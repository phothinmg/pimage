import { readFileSync } from "node:fs";
import { initializeImageMagick } from "@imagemagick/magick-wasm";
export async function initialize() {
	const wasmLink = new URL(import.meta.resolve("./magick.wasm"));

	if (wasmLink.protocol === "file:") {
		const wasmBytes = readFileSync(wasmLink);
		await initializeImageMagick(wasmBytes);
		return;
	}

	const data = await fetch(wasmLink);
	const wasmBytes = Buffer.from(await data.arrayBuffer());
	await initializeImageMagick(wasmBytes);
}
