import { readFileSync } from "node:fs";
import { extname } from "node:path";

type ExtType = Array<{ name: string; type: string }>;

const extType: ExtType = [
	{
		name: ".png",
		type: "image/png",
	},
	{
		name: ".gif",
		type: "image/gif",
	},
	{
		name: ".jpg",
		type: "image/jpeg",
	},
	{
		name: ".jpeg",
		type: "image/jpeg",
	},
	{
		name: ".bm",
		type: "image/bmp",
	},
	{
		name: ".bmp",
		type: "image/bmp",
	},
	{
		name: ".webp",
		type: "image/webp",
	},
	{
		name: ".ico",
		type: "image/x-icon",
	},
	{
		name: ".svg",
		type: "image/svg+xml",
	},
];

/**
 * Converts an image file to a Base64-encoded data URI string.
 * @param {string} imageFilePath - The file path of the image to be converted.
 * @returns {string} A string representing the image as a Base64-encoded data URI.
 */
export function imageToUri(imageFilePath: string): string {
	const content = readFileSync(imageFilePath, "base64");
	const ext = extname(imageFilePath);
	const ct = extType.find((i) => i.name === ext);
	if (!ct) {
		throw new Error(`Unsupported file extension: ${ext}`);
	}
	return `data:${ct.type};base64,${content}`;
}
