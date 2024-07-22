import { readFileSync } from "node:fs";
import {
	type IMagickImage,
	ImageMagick,
	MagickFormat,
	MagickGeometry,
} from "@imagemagick/magick-wasm";
import { initialize } from "../_init.js";
import { baganWriteFile, getImgName } from "../helpers/index.js";

interface TransformProps {
	imagePath: string;
	outDir?: string;
	outFilename?: string;
	width?: number;
	height?: number;
}

export async function to_jpg({
	imagePath,
	outDir = ".",
	outFilename = getImgName(imagePath),
	width = 200,
	height = 100,
}: TransformProps) {
	await initialize();
	const data = new Uint8Array(readFileSync(imagePath));
	const sizingData = new MagickGeometry(width, height);
	sizingData.ignoreAspectRatio = true;
	await ImageMagick.read(data, async (image: IMagickImage) => {
		image.write(MagickFormat.Jpg, (data) => {
			baganWriteFile({ filePath: `${outDir}/${outFilename}.jpg`, data });
		});
	});
}

export async function to_png({
	imagePath,
	outDir = ".",
	outFilename = getImgName(imagePath),
	width = 200,
	height = 100,
}: TransformProps) {
	await initialize();
	const data = new Uint8Array(readFileSync(imagePath));
	const sizingData = new MagickGeometry(width, height);
	sizingData.ignoreAspectRatio = true;
	await ImageMagick.read(data, async (image: IMagickImage) => {
		image.write(MagickFormat.Png, (data) => {
			baganWriteFile({ filePath: `${outDir}/${outFilename}.png`, data });
		});
	});
}

export async function to_ico({
	imagePath,
	outDir = ".",
	outFilename = getImgName(imagePath),
	width = 200,
	height = 100,
}: TransformProps) {
	await initialize();
	const data = new Uint8Array(readFileSync(imagePath));
	const sizingData = new MagickGeometry(width, height);
	sizingData.ignoreAspectRatio = true;
	await ImageMagick.read(data, async (image: IMagickImage) => {
		image.write(MagickFormat.Ico, (data) => {
			baganWriteFile({ filePath: `${outDir}/${outFilename}.ico`, data });
		});
	});
}

export async function to_gif({
	imagePath,
	outDir = ".",
	outFilename = getImgName(imagePath),
	width = 200,
	height = 100,
}: TransformProps) {
	await initialize();
	const data = new Uint8Array(readFileSync(imagePath));
	const sizingData = new MagickGeometry(width, height);
	sizingData.ignoreAspectRatio = true;
	await ImageMagick.read(data, async (image: IMagickImage) => {
		image.write(MagickFormat.Gif, (data) => {
			baganWriteFile({ filePath: `${outDir}/${outFilename}.gif`, data });
		});
	});
}

export async function to_webp({
	imagePath,
	outDir = ".",
	outFilename = getImgName(imagePath),
	width = 200,
	height = 100,
}: TransformProps) {
	await initialize();
	const data = new Uint8Array(readFileSync(imagePath));
	const sizingData = new MagickGeometry(width, height);
	sizingData.ignoreAspectRatio = true;
	await ImageMagick.read(data, async (image: IMagickImage) => {
		image.write(MagickFormat.WebP, (data) => {
			baganWriteFile({ filePath: `${outDir}/${outFilename}.webp`, data });
		});
	});
}
