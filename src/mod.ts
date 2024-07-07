/* import @imagemagick/magick-wasm */
import type { IMagickImage } from "@imagemagick/magick-wasm";
import {
  ImageMagick,
  MagickFormat,
  MagickGeometry,
  initializeImageMagick,
} from "@imagemagick/magick-wasm";
/* "node:fs/promises" */
import { writeFile, readFile, mkdtemp } from "node:fs/promises";
/* "node:fs" */
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname } from "node:path";
/**
 *  P-IMAGE
 * -----------
 *
 * Some image functions of @imagemagick_magick_wasm api.
 */
namespace Pimage {
  /* TYPES */
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

  export interface IcoPackType {
    format: ImageFormat;
    fpath: string;
    size: number;
  }

  type IconPackTypeArray = Array<IcoPackType>;

  export interface IconPackOutType {
    icoArray: IconPackTypeArray;
    outDir: string;
  }

  export interface TransformType {
    data: Uint8Array;
    fpath: string;
    width: number;
    height: number;
    outFormat: ImageFormat;
  }

  export interface TransformImage {
    imgPath: string | File;
    outFileName?: string;
    outFileExt: ImageFormat;
    outFilePath?: string;
    outImgWidth?: number;
    outImgHeight?: number;
  }

  export type ExtType = Array<{ name: string; type: string }>;
  /* ---------------------------------------------------------------------------------------------------------------------------------------------- */

  /**
 
 * **Loads and initializes the ImageMagick WebAssembly module.**
 * 
 * Handles different scenarios for fetching the WebAssembly file, including local file access, network fetch, and caching mechanisms.
 */
  export async function initialize(): Promise<void> {
    if (typeof import.meta.resolve !== "function") {
      throw new Error(
        "import.meta.resolve is not supported in this environment."
      );
    }
    const wasmUrlString = import.meta.resolve("./magick.wasm");
    if (!wasmUrlString) {
      throw new Error("Failed to resolve the URL for magick.wasm");
    }
    const wasmUrl = new URL(wasmUrlString);
    try {
      if (wasmUrl.protocol === "file:") {
        const fileData = await readFile(wasmUrl);
        await initializeImageMagick(fileData);
        return;
      }

      if (typeof caches === "undefined") {
        const response = await fetch(wasmUrl);
        const arrayBuffer = await response.arrayBuffer();
        await initializeImageMagick(new Int8Array(arrayBuffer));
        return;
      }

      if (!caches) {
        throw new Error("caches is not supported in this environment.");
      }
      const cache = await caches.open("magick_native");
      const cached = await cache.match(wasmUrl);

      if (cached !== null) {
        const cachedArrayBuffer = await cached.arrayBuffer();
        await initializeImageMagick(new Int8Array(cachedArrayBuffer));
        return;
      }

      const response = await fetch(wasmUrl);
      await cache.put(wasmUrl, response.clone());
      const arrayBuffer = await response.arrayBuffer();
      await initializeImageMagick(new Int8Array(arrayBuffer));
    } catch (error) {
      console.error(`Error initializing ImageMagick:`, error);
      throw error;
    }
  }

  /* --------------------------------------------------------------------------------------------------------------------------------------- */
  /**
   * Loads image data from a file.
   *
   * @param {string} fpath - The path of the image file.
   * @return {Promise<Uint8Array>} A promise that resolves to the image data as a `Uint8Array`.
   * @throws {Error} If the file extension is not supported.
   *
   * @example
   *
   * ```js
   * const imgFile = "./foo/bar.png"; //OR uploaded file
   * await loadImgData(imgFile)
   * ```
   */
  export async function loadImgData(fpath: string | File): Promise<Uint8Array> {
    const supportedExtensions = [
      "png",
      "ico",
      "jpg",
      "jpeg",
      "gif",
      "tiff",
      "tif",
      "webp",
      "bmp",
    ];
    const ext =
      typeof fpath === "string"
        ? fpath.split(".").pop()
        : fpath.name.split(".").pop();
    if (!supportedExtensions.includes(ext)) {
      throw new Error(`Unsupported file extension: ${ext}`);
    }
    if (fpath instanceof File) {
      const arrayBuffer = await fpath.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    } else if (typeof fpath === "string") {
      if (!existsSync(fpath)) {
        throw new Error(`File does not exist: ${fpath}`);
      }
      return await readFile(fpath);
    } else {
      throw new Error("Invalid file path type");
    }
  }

  /**
   * For manifest file
   */
  const manifest: string = `
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
}

`;
  /**
   * For example text file
   */
  const fileText: string = `
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="shortcut icon" type="image/x-icon" sizes="16x16" href=/favicon.ico>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512"  href="/android-chrome-512x512.png">
<link rel="manifest" href="/site.webmanifest">

`;

  /**
   * Transforms the input image data to the specified output format and dimensions.
   *
   * @param options - An object containing the image transformation options.
   * @param options.data - The Uint8Array representing the image data.
   * @param options.fpath - The file path where the transformed image will be saved.
   * @param options.width - The width of the transformed image.
   * @param options.height - The height of the transformed image.
   * @param options.outFormat - The output format of the transformed image (e.g., "png", "jpg", "bmp").
   *
   * @returns A Promise that resolves when the image transformation is complete.
   * @throws Error if the output format is unsupported or if the width or height are not positive numbers.
   */
  async function imageTransform(options: TransformType): Promise<void> {
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
    try {
      await ImageMagick.read(data, async (image: IMagickImage) => {
        image.resize(sizingData);
        await image.write(ofm, async (data: Uint8Array) => {
          await writeFile(fpath, data);
        });
      });
    } catch (error) {
      console.error(`Error processing image:`, error);
      throw error;
    }
  }
  /**
   * Generates an array of objects representing the different sizes and formats required for browser icons.
   * @returns {Promise<IcoArrayType>} An array of objects representing the different sizes and formats required for browser icons.
   */
  async function icopack_gen(): Promise<IconPackOutType> {
    const outDir = await mkdtemp("pimage-");

    // Return an array of objects representing the different sizes and formats required for browser icons
    const icoArray: IconPackTypeArray = [
      // Favicon
      {
        format: "ico",
        fpath: `./${outDir}/favicon.ico`,
        size: 16,
      },
      {
        format: "png",
        fpath: `./${outDir}/favicon-16x16.png`,
        size: 16,
      },
      {
        format: "png",
        fpath: `./${outDir}/favicon-32x32.png`,
        size: 32,
      },
      // Android Chrome
      {
        format: "png",
        fpath: `./${outDir}/android-chrome-192x192.png`,
        size: 192,
      },

      // Apple Touch Icon
      {
        format: "png",
        fpath: `./${outDir}/apple-touch-icon.png`,
        size: 180,
      },

      // Android Chrome (512x512)
      {
        format: "png",
        fpath: `./${outDir}/android-chrome-512x512.png`,
        size: 512,
      },
    ];
    return { icoArray, outDir };
  }

  /* ---------------------------------------------------------------------------------------------------------------------------------- */

  /**
   * Transforms the input image to the specified dimensions and format, saving the result to the output path.
   *
   * @param imgPath - The path to the input image or a File object.
   * @param outFileName - The desired name for the output file.
   * @param outFileExt - The desired extension/format for the output file.
   * @param outImgHeight - The desired height for the output image.
   * @param outImgWidth - The desired width for the output image.
   * @param outFilePath - The directory path where the output file will be saved.
   */
  export async function transformImage({
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
      "png",
      "ico",
      "jpg",
      "jpeg",
      "gif",
      "tiff",
      "tif",
      "webp",
      "bmp",
    ];

    if (!supportedExtensions.includes(impExt)) {
      throw new Error("Unsupported input image extension.");
    }

    if (!supportedExtensions.includes(outFileExt)) {
      throw new Error("Unsupported output image extension.");
    }

    const outputFileName = outFileName || impName;
    const outputFilePath = outFilePath || "./";

    if (!existsSync(outputFilePath)) {
      try {
        mkdirSync(outputFilePath);
      } catch (error) {
        throw new Error(`Failed to create output directory: ${outputFilePath}`);
      }
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
  /**
   * Generates browser icons and related files based on the input image file.
   *
   * @param {string | File} file - The path to the input image file or a File object.
   * @returns {Promise<void>} A Promise that resolves when the generation of browser icons and related files is complete.
   * @throws {Error} If there are issues with loading image data, generating icons, or writing files.
   *
   * @example
   *
   * ```typescript
   * await icoPackGenerator("./path/to/image.png");
   * ```
   */
  export async function icoPackGenerator(file: string | File): Promise<void> {
    try {
      await initialize();

      const supportedExtensions = [
        "png",
        "ico",
        "jpg",
        "jpeg",
        "gif",
        "tiff",
        "tif",
        "webp",
        "bmp",
      ];
      const ext =
        typeof file === "string"
          ? file.split(".").pop()
          : file.name.split(".").pop();
      if (!supportedExtensions.includes(ext)) {
        throw new Error(`Unsupported file extension: ${ext}`);
      }

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
    } catch (error) {
      console.error(`Error generating icon pack:`, error);
      throw error;
    }
  }

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
}

export default Pimage;
