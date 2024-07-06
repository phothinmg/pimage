import type { IMagickImage } from "@imagemagick/magick-wasm";
import { ImageMagick, MagickFormat, MagickGeometry } from "@imagemagick/magick-wasm";
import { writeFile } from "fs/promises";
import { TransformType } from "../index.ts";

export async function imageTransform(options: TransformType): Promise<void> {
  const { data, fpath, width, height, outFormat } = options;
  let ofm: MagickFormat;
  switch (outFormat) {
    case "bmp":
      ofm = MagickFormat.Bmp;
      break;
    case "png":
      ofm = MagickFormat.Png;
      break;
    case "ico":
      ofm = MagickFormat.Ico;
      break;
    case "jpg":
    case "jpeg":
      ofm = MagickFormat.Jpg;
      break;
    case "gif":
      ofm = MagickFormat.Gif;
      break;
    case "tiff":
    case "tif":
      ofm = MagickFormat.Tiff;
      break;
    case "webp":
      ofm = MagickFormat.WebP;
      break;
    default:
      throw new Error(`Unsupported output format: ${outFormat}`);
  }
  if (width <= 0 || height <= 0) {
    throw new Error(
      `Invalid dimensions: width (${width}) and height (${height}) must be positive numbers`
    );
  }
  const sizingData = new MagickGeometry(width, height);
  sizingData.ignoreAspectRatio = true;
  await ImageMagick.read(data, async (image: IMagickImage) => {
    try {
      image.resize(sizingData);
      await image.write(ofm, async (data: Uint8Array) => {
        await writeFile(fpath, data);
      });
    } catch (error) {
      console.error(`Error processing image:`, error);
      throw error;
    }
  });
}
