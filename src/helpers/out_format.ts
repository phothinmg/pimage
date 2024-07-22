import { MagickFormat } from "@imagemagick/magick-wasm";

export type ImageOutFormat =
	| "avif"
	| "gif"
	| "ico"
	| "jpeg"
	| "jpg"
	| "png"
	| "tif"
	| "tiff"
	| "webp"
	| "txt";

export function getImageOutFormat(format: ImageOutFormat) {
	let outformat: MagickFormat;
	switch (format) {
		case "avif":
			outformat = MagickFormat.Avif;
			break;
		case "ico":
			outformat = MagickFormat.Ico;
			break;
		/* 
      Joint Photographic Experts Group
      JPEG , JPG
       */
		case "jpeg":
			outformat = MagickFormat.Jpeg;
			break;
		case "jpg":
			outformat = MagickFormat.Jpg;
			break;
		// Graphics Interchange Format
		case "gif":
			outformat = MagickFormat.Gif;
			break;
		// Portable Network Graphics
		case "png":
			outformat = MagickFormat.Png;
			break;
		// Tagged Image File Format tif and tiff
		case "tif":
			outformat = MagickFormat.Tif;
			break;
		case "tiff":
			outformat = MagickFormat.Tiff;
			break;
		case "webp":
			outformat = MagickFormat.WebP;
			break;
		default:
			break;
	}
	return outformat;
}
