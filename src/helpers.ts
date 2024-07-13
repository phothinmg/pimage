import { extname } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { initializeImageMagick } from "@imagemagick/magick-wasm";
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

function isValidExt(image: string | File): boolean {
  const imageExt = getImageExt(image);
  return imageExt !== "" && validExt.includes(imageExt) ? true : false;
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

export function loadImage(image: string | File): Buffer {
  const ive = isValidExt(image);
  if (!ive)
    console.log("Image File extension is invalid or currently unsupported.");
  const imgf = image instanceof File;
  const imgs = typeof image === "string";
  if (!imgf && !imgs)
    console.log("Image File type error , should be string or File");
  let imageBuffer: Buffer;
  const ie = existsSync(image as string);

  if (ive && imgf) {
    setTimeout(async () => {
      imageBuffer = Buffer.from(await image.arrayBuffer());
    }, 100);
  } else if (ie && ive && imgs) {
    imageBuffer = readFileSync(image);
  } else {
    throw new Error("Error when loading image");
  }
  return imageBuffer;
}

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

/**
 * For manifest file
 */
export const manifest: string = `
 {
   "name": "",
   "short_name": "",
   "icons": [
     {
       "src": "/android-chrome-192x192.png",
       "sizes": "192x192",
       "type": "image/png"
     },
     {
       "src": "/android-chrome-512x512.png",
       "sizes": "512x512",
       "type": "image/png"
     }
   ],
   "theme_color": "#ffffff",
   "background_color": "#ffffff",
   "display": "standalone"
 }`;

/**
 * For example text file
 */
export const fileText: string = `
 <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
 <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
 <link rel="shortcut icon" type="image/x-icon" sizes="16x16" href=/favicon.ico>
 <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
 <link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png">
 <link rel="icon" type="image/png" sizes="512x512"  href="/android-chrome-512x512.png">
 <link rel="manifest" href="/site.webmanifest">
 
 `;
