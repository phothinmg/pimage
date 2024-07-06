import { icoPackGenerator } from "./ico-generator/index.ts";
import { initialize } from "./image-magick/index.ts";
import loadImgData from "./load-image-data/index.ts";
import { imageTransform } from "./image-transform/index.ts";
import { existsSync, mkdirSync } from "node:fs";
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

export interface TransformType {
  data: Uint8Array;
  fpath: string;
  width: number;
  height: number;
  outFormat: ImageFormat;
}

export interface IcoPackType {
  format: ImageFormat;
  fpath: string;
  size: number;
}
export type IconPackTypeArray = Array<IcoPackType>;

export interface IconPackOutType {
  icoArray: IconPackTypeArray;
  outDir: string;
}

export interface TransformImage {
  imgPath: string | File;
  outFileName?: string;
  outFileExt: ImageFormat;
  outFilePath?: string;
  outImgWidth?: number;
  outImgHeight?: number;
}

/**
 * Transforms the input image to the specified dimensions and format, saving the result to the output path.
 * @param imgPath - The path to the input image or a File object.
 * @param outFileName - The desired name for the output file.
 * @param outFileExt - The desired extension/format for the output file.
 * @param outImgHeight - The desired height for the output image.
 * @param outImgWidth - The desired width for the output image.
 * @param outFilePath - The directory path where the output file will be saved.
 */
async function transformImage({
  imgPath,
  outFileName,
  outFileExt,
  outImgHeight = 100,
  outImgWidth = 200,
  outFilePath,
}: TransformImage) {
  await initialize();

  const fileData: Uint8Array = await loadImgData(imgPath);

  let impName: string = "";
  let impExt: string = "";
  if (typeof imgPath === "string") {
    [impName, impExt] = imgPath.split("/").slice(-1)[0].split(".");
  } else if (imgPath instanceof File) {
    [impName, impExt] = imgPath.name.split(".");
  } else {
    throw new Error("Invalid input type for imgPath.");
  }

  const supportedExtensions = [
    "png", "ico", "jpg", "jpeg", "gif", "tiff", "tif", "webp", "bmp"
  ];

  if (!supportedExtensions.includes(impExt)) {
    throw new Error("Unsupported input image extension.");
  }

  const outputFileName = outFileName || impName;
  const outputFilePath = outFilePath || "./";
  
  if (!existsSync(outputFilePath)) {
    mkdirSync(outputFilePath);
  }

  const outputPath = `${outputFilePath}/${outputFileName}.${outFileExt}`;

  await imageTransform({
    data: fileData,
    fpath: outputPath,
    width: outImgWidth,
    height: outImgHeight,
    outFormat: outFileExt,
  });
}

export { icoPackGenerator, transformImage };
