import type { IMagickImage } from "@imagemagick/magick-wasm";
import {
  ImageMagick,
  MagickFormat,
  MagickGeometry,
} from "@imagemagick/magick-wasm";
import { initialize, loadImage, manifest, fileText } from "./helpers.js";
import { existsSync } from "node:fs";
import { writeFile, mkdir, mkdtemp } from "node:fs/promises";
import path from "node:path";
export type ImageFormat =
  | "png"
  | "ico"
  | "jpg"
  | "jpeg"
  | "gif"
  | "tiff"
  | "tif"
  | "webp"
  | "bmp";

export interface IcoPackType {
  format: ".ico" | ".png";
  fpath: string;
  size: number;
}

type IconPackTypeArray = Array<IcoPackType>;

interface IcoPackGenrator {
  outputDir?: string;
  imageFile: string | File;
}

export async function icopackGenerator({
  outputDir,
  imageFile,
}: IcoPackGenrator): Promise<void> {
  /* 1. init() any cache*/
  await initialize();
  /* 2. Set up out directory */
  const outDir = outputDir ?? (await mkdtemp("pimage-"));
  /* 2.1 make sure  */
  if (!existsSync(outDir)) await mkdir(outDir);
//   const outDir = path.join(process.cwd(), out);
  /* 3.1 The object to generate ico pack */
  const icoArray: IconPackTypeArray = [
    // Favicon
    {
      format: ".ico",
      fpath: `./${outDir}/favicon.ico`,
      size: 16,
    },
    {
      format: ".png",
      fpath: `./${outDir}/favicon-16x16.png`,
      size: 16,
    },
    {
      format: ".png",
      fpath: `./${outDir}/favicon-32x32.png`,
      size: 32,
    },
    // Android Chrome
    {
      format: ".png",
      fpath: `./${outDir}/android-chrome-192x192.png`,
      size: 192,
    },

    // Apple Touch Icon
    {
      format: ".png",
      fpath: `./${outDir}/apple-touch-icon.png`,
      size: 180,
    },

    // Android Chrome (512x512)
    {
      format: ".png",
      fpath: `./${outDir}/android-chrome-512x512.png`,
      size: 512,
    },
  ];
  setTimeout(() => {
    /* Load Image  */
    const data = loadImage(imageFile);
    let ofm: MagickFormat;
    icoArray.map(async (i) => {
      ofm =
        i.format === ".ico"
          ? MagickFormat.Ico
          : i.format === ".png"
          ? MagickFormat.Png
          : MagickFormat.Png;

      const sizingData = new MagickGeometry(i.size, i.size);
      sizingData.ignoreAspectRatio = true;

      try {
        await ImageMagick.read(data, async (image: IMagickImage) => {
          image.resize(sizingData);
          await image.write(ofm, async (data: Uint8Array) => {
            await writeFile(i.fpath, data);
          });
        });
      } catch (error) {
        console.error(`Error generating icon pack:`, error);
        throw error;
      }
    });
  }, 2000);

  const mfPath: string = `./${outDir}/site.webmanifest`;
  const textPath: string = `./${outDir}/example.txt`;
  try {
    await writeFile(mfPath, manifest);

    // Write the example text file
    await writeFile(textPath, fileText);
  } catch (error) {
    throw error;
  }
}
