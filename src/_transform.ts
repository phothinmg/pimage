import { readFileSync } from "node:fs";
import {
	type IMagickImage,
	ImageMagick,
	type MagickFormat,
	MagickGeometry,
} from "@imagemagick/magick-wasm";
import { initialize } from "./_init.js";
import {
	type ImageOutFormat,
	baganWriteFile,
	getImageOutFormat,
	getImgName,
	isValidExt,
} from "./helpers/index.js";

interface _Transform {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	_data: any;
	_width?: number;
	_height?: number;
	output_format: MagickFormat;
	out_path?: string;
}

interface TransformImageFromPath {
	imagePath: string;
	outFormat: ImageOutFormat;
	outImageName?: string;
	outDirName?: string;
	witdth?: number;
	height?: number;
}

async function _tarnsform({
	_data,
	_width,
	_height,
	out_path,
	output_format,
}: _Transform) {
	await initialize();
	const _w = _width ?? 200;
	const _h = _height ?? 100;
	const sizingData = new MagickGeometry(_w, _h);
	sizingData.ignoreAspectRatio = true;

	await ImageMagick.read(_data, async (image: IMagickImage) => {
		image;
		image.write(output_format, (data) => {
			baganWriteFile({ filePath: out_path, data: data });
		});
	});
}
export async function transformImageFromPath({
	imagePath,
	outFormat,
	outImageName,
	outDirName,
	height,
	witdth,
}: TransformImageFromPath) {
	// set out file and path
	const outname = outImageName ?? getImgName(imagePath);
	const outdir = outDirName ?? ".";
	const outpath = `${outdir}/${outname}.${outFormat}`;
	//
	const data = readFileSync(imagePath);
	// const data = new Uint8Array(da);
	// get imagick format
	const outformat = getImageOutFormat(outFormat);
	// start transforming
	await _tarnsform({
		_data: data,
		output_format: outformat,
		_width: witdth,
		_height: height,
		out_path: outpath,
	});
}
