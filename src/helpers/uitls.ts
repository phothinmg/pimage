import {
	type NoParamCallback,
	existsSync,
	mkdirSync,
	writeFile,
} from "node:fs";
import { dirname, extname } from "node:path";

export interface BaganWriteFileOptions {
	filePath: string;
	data: string | NodeJS.ArrayBufferView;
	callback?: NoParamCallback;
}
const validExt: string[] = [
	".png",
	".ico",
	".jpg",
	".jpeg",
	".gif",
	".tiff",
	".tif",
	".webp",
	".bmp",
];

export function isValidExt(image: string | File): boolean {
	const imageExt = getImageExt(image);

	return !!(imageExt !== "" && validExt.includes(imageExt));
}

/* 
  Guard for Null or undefined for image's ext  
  next()=> if ext === "" throw error
  */
function getImageExt(image: string | File): string {
	return typeof image === "string"
		? extname(image)
		: image instanceof File
			? extname(image.name)
			: "";
}

export const getImgName = (imgPath: string) => {
	return imgPath.split("/").slice(-1)[0].split(".")[0];
};

/**
 * Writes data to a file specified by the filePath.
 * If the directory path does not exist, it creates the directory.
 *
 * @param filePath - The path to the file where the data will be written.
 * @param data - The data to be written to the file.
 * @param callback - An optional callback function to be executed after writing the file.
 */
export function baganWriteFile({
	filePath,
	data,
	callback,
}: BaganWriteFileOptions): void {
	const cb: NoParamCallback = callback ?? (() => true);

	const directoryPath = dirname(filePath);
	if (!existsSync(directoryPath)) {
		mkdirSync(directoryPath, { recursive: true });
	}

	writeFile(filePath, data, cb);
}
