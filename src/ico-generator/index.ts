import type { IcoPackType, IconPackOutType } from "../index.ts";
import { imageTransform } from "../image-transform/index.ts";
import { icopack_gen } from "./icopack_gen.ts";
import loadImgData from "../load-image-data/index.ts";
import { manifest, fileText } from "./text.ts";
import { initialize } from "../image-magick/index.ts";
import { writeFile } from "fs/promises";

export async function icoPackGenerator(file: string | File): Promise<void> {
  await initialize();

  // Load image data
  const fileData: Uint8Array = await loadImgData(file);

  // Generate browser-ico object
  const fileArray: IconPackOutType = await icopack_gen();
  const outdir = fileArray.outDir;
  // Generate the ico files with different sizes
  const promises = fileArray.icoArray.map((file: IcoPackType) =>
    imageTransform({
      data: fileData,
      fpath: file.fpath,
      width: file.size,
      height: file.size,
      outFormat: file.format,
    })
  );
  await Promise.all(promises);

  // Generate site.webmanifest for the icons
  const mfPath: string = `./${fileArray.outDir}/site.webmanifest`;

  // Example text file
  const textPath: string = `./${fileArray.outDir}/example.txt`;

  // Write the manifest file
  await writeFile(mfPath, manifest);

  // Write the example text file
  await writeFile(textPath, fileText);
}
