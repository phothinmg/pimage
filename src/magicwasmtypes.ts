export type ByteArray = Int8Array | Uint8Array | Uint8ClampedArray;
export interface IConfigurationFile {
	readonly fileName: string;
	data: string;
}
export interface IConfigurationFiles {
	all(): Generator<IConfigurationFile>;
	readonly log: IConfigurationFile;
	readonly policy: IConfigurationFile;
}
export declare class ConfigurationFiles implements IConfigurationFiles {
	private constructor();
	static default: IConfigurationFiles;
	all(): Generator<IConfigurationFile>;
	readonly log: IConfigurationFile;
	readonly policy: IConfigurationFile;
}
export declare enum MagickFormat {
	Unknown = "UNKNOWN",
	ThreeFr = "3FR",
	ThreeG2 = "3G2",
	ThreeGp = "3GP",
	A = "A",
	Aai = "AAI",
	Ai = "AI",
	APng = "APNG",
	Art = "ART",
	Arw = "ARW",
	Ashlar = "ASHLAR",
	Avi = "AVI",
	Avif = "AVIF",
	Avs = "AVS",
	B = "B",
	Bayer = "BAYER",
	Bayera = "BAYERA",
	Bgr = "BGR",
	Bgra = "BGRA",
	Bgro = "BGRO",
	Bmp = "BMP",
	Bmp2 = "BMP2",
	Bmp3 = "BMP3",
	Brf = "BRF",
	C = "C",
	Cal = "CAL",
	Cals = "CALS",
	Canvas = "CANVAS",
	Caption = "CAPTION",
	Cin = "CIN",
	Cip = "CIP",
	Clip = "CLIP",
	Cmyk = "CMYK",
	Cmyka = "CMYKA",
	Cr2 = "CR2",
	Cr3 = "CR3",
	Crw = "CRW",
	Cube = "CUBE",
	Cur = "CUR",
	Cut = "CUT",
	Data = "DATA",
	Dcm = "DCM",
	Dcr = "DCR",
	Dcraw = "DCRAW",
	Dcx = "DCX",
	Dds = "DDS",
	Dfont = "DFONT",
	Dng = "DNG",
	Dpx = "DPX",
	Dxt1 = "DXT1",
	Dxt5 = "DXT5",
	Epdf = "EPDF",
	Epi = "EPI",
	Eps = "EPS",
	Eps2 = "EPS2",
	Eps3 = "EPS3",
	Epsf = "EPSF",
	Epsi = "EPSI",
	Ept = "EPT",
	Ept2 = "EPT2",
	Ept3 = "EPT3",
	Erf = "ERF",
	Exr = "EXR",
	Farbfeld = "FARBFELD",
	Fax = "FAX",
	Ff = "FF",
	Fff = "FFF",
	File = "FILE",
	Fits = "FITS",
	Fl32 = "FL32",
	Flv = "FLV",
	Fractal = "FRACTAL",
	Ftp = "FTP",
	Fts = "FTS",
	Ftxt = "FTXT",
	G = "G",
	G3 = "G3",
	G4 = "G4",
	Gif = "GIF",
	Gif87 = "GIF87",
	Gradient = "GRADIENT",
	Gray = "GRAY",
	Graya = "GRAYA",
	Group4 = "GROUP4",
	Hald = "HALD",
	Hdr = "HDR",
	Heic = "HEIC",
	Heif = "HEIF",
	Histogram = "HISTOGRAM",
	Hrz = "HRZ",
	Htm = "HTM",
	Html = "HTML",
	Http = "HTTP",
	Https = "HTTPS",
	Icb = "ICB",
	Ico = "ICO",
	Icon = "ICON",
	Iiq = "IIQ",
	Info = "INFO",
	Inline = "INLINE",
	Ipl = "IPL",
	Isobrl = "ISOBRL",
	Isobrl6 = "ISOBRL6",
	J2c = "J2C",
	J2k = "J2K",
	Jng = "JNG",
	Jnx = "JNX",
	Jp2 = "JP2",
	Jpc = "JPC",
	Jpe = "JPE",
	Jpeg = "JPEG",
	Jpg = "JPG",
	Jpm = "JPM",
	Jps = "JPS",
	Jpt = "JPT",
	Json = "JSON",
	Jxl = "JXL",
	K = "K",
	K25 = "K25",
	Kdc = "KDC",
	Label = "LABEL",
	M = "M",
	M2v = "M2V",
	M4v = "M4V",
	Mac = "MAC",
	Map = "MAP",
	Mask = "MASK",
	Mat = "MAT",
	Matte = "MATTE",
	Mdc = "MDC",
	Mef = "MEF",
	Miff = "MIFF",
	Mkv = "MKV",
	Mng = "MNG",
	Mono = "MONO",
	Mov = "MOV",
	Mos = "MOS",
	Mp4 = "MP4",
	Mpc = "MPC",
	Mpeg = "MPEG",
	Mpg = "MPG",
	Mpo = "MPO",
	Mrw = "MRW",
	Msl = "MSL",
	Msvg = "MSVG",
	Mtv = "MTV",
	Mvg = "MVG",
	Nef = "NEF",
	Nrw = "NRW",
	Null = "NULL",
	O = "O",
	Ora = "ORA",
	Orf = "ORF",
	Otb = "OTB",
	Otf = "OTF",
	Pal = "PAL",
	Palm = "PALM",
	Pam = "PAM",
	Pango = "PANGO",
	Pattern = "PATTERN",
	Pbm = "PBM",
	Pcd = "PCD",
	Pcds = "PCDS",
	Pcl = "PCL",
	Pct = "PCT",
	Pcx = "PCX",
	Pdb = "PDB",
	Pdf = "PDF",
	Pdfa = "PDFA",
	Pef = "PEF",
	Pes = "PES",
	Pfa = "PFA",
	Pfb = "PFB",
	Pfm = "PFM",
	Pgm = "PGM",
	Pgx = "PGX",
	Phm = "PHM",
	Picon = "PICON",
	Pict = "PICT",
	Pix = "PIX",
	Pjpeg = "PJPEG",
	Plasma = "PLASMA",
	Png = "PNG",
	Png00 = "PNG00",
	Png24 = "PNG24",
	Png32 = "PNG32",
	Png48 = "PNG48",
	Png64 = "PNG64",
	Png8 = "PNG8",
	Pnm = "PNM",
	Pocketmod = "POCKETMOD",
	Ppm = "PPM",
	Ps = "PS",
	Ps2 = "PS2",
	Ps3 = "PS3",
	Psb = "PSB",
	Psd = "PSD",
	Ptif = "PTIF",
	Pwp = "PWP",
	Qoi = "QOI",
	R = "R",
	RadialGradient = "RADIAL-GRADIENT",
	Raf = "RAF",
	Ras = "RAS",
	Raw = "RAW",
	Rgb = "RGB",
	Rgb565 = "RGB565",
	Rgba = "RGBA",
	Rgbo = "RGBO",
	Rgf = "RGF",
	Rla = "RLA",
	Rle = "RLE",
	Rmf = "RMF",
	Rw2 = "RW2",
	Rwl = "RWL",
	Scr = "SCR",
	Screenshot = "SCREENSHOT",
	Sct = "SCT",
	Sfw = "SFW",
	Sgi = "SGI",
	Shtml = "SHTML",
	Six = "SIX",
	Sixel = "SIXEL",
	SparseColor = "SPARSE-COLOR",
	Sr2 = "SR2",
	Srf = "SRF",
	Srw = "SRW",
	Stegano = "STEGANO",
	Sti = "STI",
	StrImg = "STRIMG",
	Sun = "SUN",
	Svg = "SVG",
	Svgz = "SVGZ",
	Text = "TEXT",
	Tga = "TGA",
	Thumbnail = "THUMBNAIL",
	Tif = "TIF",
	Tiff = "TIFF",
	Tiff64 = "TIFF64",
	Tile = "TILE",
	Tim = "TIM",
	Tm2 = "TM2",
	Ttc = "TTC",
	Ttf = "TTF",
	Txt = "TXT",
	Ubrl = "UBRL",
	Ubrl6 = "UBRL6",
	Uil = "UIL",
	Uyvy = "UYVY",
	Vda = "VDA",
	Vicar = "VICAR",
	Vid = "VID",
	Viff = "VIFF",
	Vips = "VIPS",
	Vst = "VST",
	WebM = "WEBM",
	WebP = "WEBP",
	Wbmp = "WBMP",
	Wmv = "WMV",
	Wpg = "WPG",
	X3f = "X3F",
	Xbm = "XBM",
	Xc = "XC",
	Xcf = "XCF",
	Xpm = "XPM",
	Xps = "XPS",
	Xv = "XV",
	Y = "Y",
	Yaml = "YAML",
	Ycbcr = "YCbCr",
	Ycbcra = "YCbCrA",
	Yuv = "YUV"
}
export interface IDefine {
	readonly format: MagickFormat;
	readonly name: string;
	readonly value: string;
}
export interface IDefines {
	getDefines(): IDefine[];
}
export declare class MagickDefine implements IDefine {
	constructor(format: MagickFormat, name: string, value: string);
	readonly format: MagickFormat;
	readonly name: string;
	readonly value: string;
}
export declare abstract class DefinesCreator implements IDefines {
	protected format: MagickFormat;
	constructor(format: MagickFormat);
	abstract getDefines(): IDefine[];
	createDefine(name: string, value: boolean): MagickDefine;
	createDefine(name: string, value: number): MagickDefine;
	createDefine(name: string, value: string): MagickDefine;
	protected hasValue(value: unknown): boolean;
}
export interface IDisposable {
	dispose(): void;
}
export declare enum Gravity {
	Undefined = 0,
	Forget = 0,
	Northwest = 1,
	North = 2,
	Northeast = 3,
	West = 4,
	Center = 5,
	East = 6,
	Southwest = 7,
	South = 8,
	Southeast = 9
}
export interface IMagickColor {
	r: number;
	g: number;
	b: number;
	a: number;
	k: number;
	isCmyk: boolean;
	toShortString(): string;
	toString(): string;
}
export declare class MagickColor implements IMagickColor {
	constructor(color?: string);
	constructor(r: number, g: number, b: number);
	constructor(r: number, g: number, b: number, a: number);
	constructor(c: number, m: number, y: number, k: number, a: number);
	r: number;
	g: number;
	b: number;
	a: number;
	k: number;
	isCmyk: boolean;
	toShortString(): string;
	toString(): string;
	private initialize;
	private toHex;
}
export declare abstract class NativeInstance {
	private readonly disposeMethod;
	private instance;
	protected onDispose?(): void;
	dispose(): void;
	private disposeInstance;
}
export declare enum PaintMethod {
	Undefined = 0,
	Point = 1,
	Replace = 2,
	Floodfill = 3,
	FillToBorder = 4,
	Reset = 5
}
export declare enum TextAlignment {
	Undefined = 0,
	Left = 1,
	Center = 2,
	Right = 3
}
export declare enum TextDecoration {
	Undefined = 0,
	None = 1,
	Underline = 2,
	Overline = 3,
	LineThrough = 4
}
export interface IDrawingWand extends IDisposable {
	color(x: number, y: number, paintMethod: number): void;
	draw(drawables: IDrawable[]): void;
	fillColor(value: IMagickColor): void;
	fillOpacity(value: number): void;
	font(family: string): void;
	fontPointSize(value: number): void;
	gravity(value: Gravity): void;
	line(startX: number, startY: number, endX: number, endY: number): void;
	point(x: number, y: number): void;
	rectangle(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number): void;
	roundRectangle(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number, cornerWidth: number, cornerHeight: number): void;
	strokeColor(value: IMagickColor): void;
	strokeWidth(value: number): void;
	text(x: number, y: number, value: string): void;
	textAlignment(value: TextAlignment): void;
	textAntialias(value: boolean): void;
	textDecoration(value: TextDecoration): void;
	textInterlineSpacing(value: number): void;
	textInterwordspacing(value: number): void;
	textKerning(value: number): void;
	textUnderColor(value: IMagickColor): void;
}
export declare class DrawingWand extends NativeInstance implements IDrawingWand {
	private constructor();
	color(x: number, y: number, paintMethod: PaintMethod): void;
	draw(drawables: IDrawable[]): void;
	fillColor(value: IMagickColor): void;
	fillOpacity(value: number): void;
	font(fileName: string): void;
	fontPointSize(value: number): void;
	gravity(value: Gravity): void;
	line(startX: number, startY: number, endX: number, endY: number): void;
	point(x: number, y: number): void;
	rectangle(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number): void;
	roundRectangle(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number, cornerWidth: number, cornerHeight: number): void;
	strokeColor(value: IMagickColor): void;
	strokeWidth(value: number): void;
	text(x: number, y: number, value: string): void;
	textAlignment(value: TextAlignment): void;
	textAntialias(value: boolean): void;
	textDecoration(value: TextDecoration): void;
	textInterlineSpacing(value: number): void;
	textInterwordspacing(value: number): void;
	textKerning(value: number): void;
	textUnderColor(value: IMagickColor): void;
}
export interface IDrawable {
	draw(wand: IDrawingWand): void;
}
export declare class DrawableColor implements IDrawable {
	private readonly _x;
	private readonly _y;
	private readonly _paintMethod;
	constructor(x: number, y: number, paintMethod: PaintMethod);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableFillColor implements IDrawable {
	private readonly _color;
	constructor(color: IMagickColor);
	draw(wand: IDrawingWand): void;
}
export declare class Percentage {
	private _value;
	constructor(value: number);
	multiply(value: number): number;
	toDouble(): number;
}
export declare class DrawableFillOpacity implements IDrawable {
	private readonly _opacity;
	constructor(opacity: Percentage);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableFontPointSize implements IDrawable {
	private readonly _pointSize;
	constructor(pointSize: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableFont implements IDrawable {
	private readonly _font;
	constructor(font: string);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableGravity implements IDrawable {
	private readonly _gravity;
	constructor(gravity: Gravity);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableLine implements IDrawable {
	private readonly _startX;
	private readonly _startY;
	private readonly _endX;
	private readonly _endY;
	constructor(startX: number, startY: number, endX: number, endY: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawablePoint implements IDrawable {
	private readonly _x;
	private readonly _y;
	constructor(x: number, y: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableRectangle implements IDrawable {
	private readonly _upperLeftX;
	private readonly _upperLeftY;
	private readonly _lowerRightX;
	private readonly _lowerRightY;
	constructor(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableRoundRectangle implements IDrawable {
	private readonly _upperLeftX;
	private readonly _upperLeftY;
	private readonly _lowerRightX;
	private readonly _lowerRightY;
	private readonly _cornerWidth;
	private readonly _cornerHeight;
	constructor(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number, cornerWidth: number, cornerHeight: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableStrokeColor implements IDrawable {
	private readonly _color;
	constructor(color: IMagickColor);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableStrokeWidth implements IDrawable {
	private readonly _width;
	constructor(width: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextAlignment implements IDrawable {
	private readonly _alignment;
	constructor(alignment: TextAlignment);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextAntialias implements IDrawable {
	private readonly _isEnabled;
	private constructor();
	static get disabled(): DrawableTextAntialias;
	static get enabled(): DrawableTextAntialias;
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextDecoration implements IDrawable {
	private readonly _decoration;
	constructor(decoration: TextDecoration);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextInterlineSpacing implements IDrawable {
	private readonly _spacing;
	constructor(spacing: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextInterwordSpacing implements IDrawable {
	private readonly _spacing;
	constructor(spacing: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextKerning implements IDrawable {
	private readonly _kerning;
	constructor(kerning: number);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableTextUnderColor implements IDrawable {
	private readonly _color;
	constructor(color: IMagickColor);
	draw(wand: IDrawingWand): void;
}
export declare class DrawableText implements IDrawable {
	private readonly _x;
	private readonly _y;
	private readonly _value;
	constructor(x: number, y: number, value: string);
	draw(wand: IDrawingWand): void;
}
declare enum AlphaOption$1 {
	Undefined = 0,
	Activate = 1,
	Associate = 2,
	Background = 3,
	Copy = 4,
	Deactivate = 5,
	Discrete = 6,
	Disassociate = 7,
	Extract = 8,
	Off = 9,
	On = 10,
	Opaque = 11,
	Remove = 12,
	Set = 13,
	Shape = 14,
	Transparent = 15,
	OffIfOpaque = 16
}
export declare enum AutoThresholdMethod {
	Undefined = 0,
	Kapur = 1,
	OTSU = 2,
	Triangle = 3
}
export declare enum Channels {
	Undefined = 0,
	Red = 1,
	Gray = 1,
	Cyan = 1,
	Green = 2,
	Magenta = 2,
	Blue = 4,
	Yellow = 4,
	Black = 8,
	Alpha = 16,
	Opacity = 16,
	Index = 32,
	Composite = 31,
	TrueAlpha = 256,
	RGB = 7,
	CMYK = 15,
	CMYKA = 31,
	Meta0 = 1024,
	Meta1 = 2048,
	Meta2 = 4096,
	Meta3 = 8192,
	Meta4 = 16384,
	Meta5 = 32768,
	Meta6 = 65536,
	Meta7 = 131072,
	Meta8 = 262144,
	Meta9 = 524288,
	Meta10 = 1048576,
	Meta11 = 2097152,
	Meta12 = 4194304,
	Meta13 = 8388608,
	Meta14 = 16777216,
	Meta15 = 33554432,
	Meta16 = 67108864,
	Meta17 = 134217728,
	Meta18 = 268435456,
	Meta19 = 536870912,
	Meta20 = 1073741824,
	Meta21 = -2147483648,
	Meta22 = 1,
	Meta23 = 2,
	Meta24 = 4,
	Meta25 = 8,
	Meta26 = 16,
	Meta27 = 32,
	Meta28 = 64,
	Meta29 = 128,
	Meta30 = 256,
	Meta31 = 512,
	Meta32 = 1024,
	Meta33 = 2048,
	Meta34 = 4096,
	Meta35 = 8192,
	Meta36 = 16384,
	Meta37 = 32768,
	Meta38 = 65536,
	Meta39 = 131072,
	Meta40 = 262144,
	Meta41 = 524288,
	Meta42 = 1048576,
	Meta43 = 2097152,
	Meta44 = 4194304,
	Meta45 = 8388608,
	Meta46 = 16777216,
	Meta47 = 33554432,
	Meta48 = 67108864,
	Meta49 = 134217728,
	Meta50 = 268435456,
	Meta51 = 536870912,
	Meta52 = 1073741824,
	All = 134217727
}
export declare class PrimaryInfo {
	constructor(x: number, y: number, z: number);
	readonly x: number;
	readonly y: number;
	readonly z: number;
}
export declare class ChromaticityInfo {
	constructor(red: PrimaryInfo, green: PrimaryInfo, blue: PrimaryInfo, white: PrimaryInfo);
	readonly red: PrimaryInfo;
	readonly green: PrimaryInfo;
	readonly blue: PrimaryInfo;
	readonly white: PrimaryInfo;
}
export declare enum ClassType {
	Undefined = 0,
	Direct = 1,
	Pseudo = 2
}
export declare enum ColorSpace {
	Undefined = 0,
	CMY = 1,
	CMYK = 2,
	Gray = 3,
	HCL = 4,
	HCLp = 5,
	HSB = 6,
	HSI = 7,
	HSL = 8,
	HSV = 9,
	HWB = 10,
	Lab = 11,
	LCH = 12,
	LCHab = 13,
	LCHuv = 14,
	Log = 15,
	LMS = 16,
	Luv = 17,
	OHTA = 18,
	Rec601YCbCr = 19,
	Rec709YCbCr = 20,
	RGB = 21,
	scRGB = 22,
	sRGB = 23,
	Transparent = 24,
	XyY = 25,
	XYZ = 26,
	YCbCr = 27,
	YCC = 28,
	YDbDr = 29,
	YIQ = 30,
	YPbPr = 31,
	YUV = 32,
	LinearGray = 33
}
export declare enum ColorType {
	Undefined = 0,
	Bilevel = 1,
	Grayscale = 2,
	GrayscaleAlpha = 3,
	Palette = 4,
	PaletteAlpha = 5,
	TrueColor = 6,
	TrueColorAlpha = 7,
	ColorSeparation = 8,
	ColorSeparationAlpha = 9,
	Optimize = 10,
	PaletteBilevelAlpha = 11
}
export declare enum CompositeOperator {
	Undefined = 0,
	Alpha = 1,
	Atop = 2,
	Blend = 3,
	Blur = 4,
	Bumpmap = 5,
	ChangeMask = 6,
	Clear = 7,
	ColorBurn = 8,
	ColorDodge = 9,
	Colorize = 10,
	CopyBlack = 11,
	CopyBlue = 12,
	Copy = 13,
	CopyCyan = 14,
	CopyGreen = 15,
	CopyMagenta = 16,
	CopyAlpha = 17,
	CopyRed = 18,
	CopyYellow = 19,
	Darken = 20,
	DarkenIntensity = 21,
	Difference = 22,
	Displace = 23,
	Dissolve = 24,
	Distort = 25,
	DivideDst = 26,
	DivideSrc = 27,
	DstAtop = 28,
	Dst = 29,
	DstIn = 30,
	DstOut = 31,
	DstOver = 32,
	Exclusion = 33,
	HardLight = 34,
	HardMix = 35,
	Hue = 36,
	In = 37,
	Intensity = 38,
	Lighten = 39,
	LightenIntensity = 40,
	LinearBurn = 41,
	LinearDodge = 42,
	LinearLight = 43,
	Luminize = 44,
	Mathematics = 45,
	MinusDst = 46,
	MinusSrc = 47,
	Modulate = 48,
	ModulusAdd = 49,
	ModulusSubtract = 50,
	Multiply = 51,
	No = 52,
	Out = 53,
	Over = 54,
	Overlay = 55,
	PegtopLight = 56,
	PinLight = 57,
	Plus = 58,
	Replace = 59,
	Saturate = 60,
	Screen = 61,
	SoftLight = 62,
	SrcAtop = 63,
	Src = 64,
	SrcIn = 65,
	SrcOut = 66,
	SrcOver = 67,
	Threshold = 68,
	VividLight = 69,
	Xor = 70,
	Stereo = 71,
	Freeze = 72,
	Interpolate = 73,
	Negate = 74,
	Reflect = 75,
	SoftBurn = 76,
	SoftDodge = 77,
	Stamp = 78,
	RMSE = 79,
	SaliencyBlend = 80,
	SeamlessBlend = 81
}
export declare enum CompressionMethod {
	Undefined = 0,
	B44A = 1,
	B44 = 2,
	BZip = 3,
	DXT1 = 4,
	DXT3 = 5,
	DXT5 = 6,
	Fax = 7,
	Group4 = 8,
	JBIG1 = 9,
	JBIG2 = 10,
	JPEG2000 = 11,
	JPEG = 12,
	LosslessJPEG = 13,
	LZMA = 14,
	LZW = 15,
	NoCompression = 16,
	Piz = 17,
	Pxr24 = 18,
	RLE = 19,
	Zip = 20,
	ZipS = 21,
	Zstd = 22,
	WebP = 23,
	DWAA = 24,
	DWAB = 25,
	BC7 = 26,
	BC5 = 27
}
export interface IMagickGeometry {
	readonly aspectRatio: boolean;
	fillArea: boolean;
	greater: boolean;
	height: number;
	ignoreAspectRatio: boolean;
	isPercentage: boolean;
	less: boolean;
	limitPixels: boolean;
	width: number;
	x: number;
	y: number;
}
export declare class MagickGeometry implements IMagickGeometry {
	private _width;
	private _height;
	private _x;
	private _y;
	private _aspectRatio;
	private _fillArea;
	private _greater;
	private _isPercentage;
	private _ignoreAspectRatio;
	private _less;
	private _limitPixels;
	constructor(value: string);
	constructor(widthAndHeight: number);
	constructor(width: number, height: number);
	constructor(x: number, y: number, width: number, height: number);
	get aspectRatio(): boolean;
	get fillArea(): boolean;
	set fillArea(value: boolean);
	get greater(): boolean;
	set greater(value: boolean);
	get height(): number;
	set height(value: number);
	get ignoreAspectRatio(): boolean;
	set ignoreAspectRatio(value: boolean);
	get isPercentage(): boolean;
	set isPercentage(value: boolean);
	get less(): boolean;
	set less(value: boolean);
	get limitPixels(): boolean;
	set limitPixels(value: boolean);
	get width(): number;
	set width(value: number);
	get x(): number;
	set x(value: number);
	get y(): number;
	set y(value: number);
	toString(): string;
	private initialize;
	private initializeFromAspectRation;
	private parseNumber;
	private isNumber;
	private hasFlag;
}
export declare class Point {
	constructor(xy: number);
	constructor(x: number, y: number);
	readonly x: number;
	readonly y: number;
}
export declare class ConnectedComponent {
	private constructor();
	readonly area: number;
	readonly centroid: Point;
	readonly color?: IMagickColor;
	readonly height: number;
	readonly id: number;
	readonly width: number;
	readonly x: number;
	readonly y: number;
	toGeometry(): IMagickGeometry;
}
export declare class Threshold {
	constructor(minimum: number, maximum?: number);
	readonly minimum: number;
	readonly maximum: number;
	toString(): string;
}
export type Connectivity = 4 | 8;
export declare class ConnectedComponentsSettings {
	angleThreshold?: Threshold;
	areaThreshold?: Threshold;
	circularityThreshold?: Threshold;
	connectivity: Connectivity;
	diameterThreshold?: Threshold;
	eccentricityThreshold?: Threshold;
	majorAxisThreshold?: Threshold;
	meanColor?: boolean;
	minorAxisThreshold?: Threshold;
	perimeterThreshold?: Threshold;
	constructor(connectivity: Connectivity);
}
export declare enum DensityUnit {
	Undefined = 0,
	PixelsPerInch = 1,
	PixelsPerCentimeter = 2
}
export declare class Density {
	constructor(xy: number);
	constructor(xy: number, unit: DensityUnit);
	constructor(x: number, y: number, units: DensityUnit);
	readonly x: number;
	readonly y: number;
	readonly units: DensityUnit;
}
export declare enum DistortMethod {
	Undefined = 0,
	Affine = 1,
	AffineProjection = 2,
	ScaleRotateTranslate = 3,
	Perspective = 4,
	PerspectiveProjection = 5,
	BilinearForward = 6,
	BilinearReverse = 7,
	Polynomial = 8,
	Arc = 9,
	Polar = 10,
	DePolar = 11,
	Cylinder2Plane = 12,
	Plane2Cylinder = 13,
	Barrel = 14,
	BarrelInverse = 15,
	Shepards = 16,
	Resize = 17,
	Sentinel = 18,
	RigidAffine = 19
}
export declare class DistortSettings {
	constructor(method: DistortMethod);
	readonly method: DistortMethod;
	bestFit: boolean;
	scale?: number;
	viewport?: IMagickGeometry;
}
export declare enum Endian {
	Undefined = 0,
	LSB = 1,
	MSB = 2
}
export declare enum ErrorMetric {
	Undefined = 0,
	Absolute = 1,
	Fuzz = 2,
	MeanAbsolute = 3,
	MeanErrorPerPixel = 4,
	MeanSquared = 5,
	NormalizedCrossCorrelation = 6,
	PeakAbsolute = 7,
	PeakSignalToNoiseRatio = 8,
	PerceptualHash = 9,
	RootMeanSquared = 10,
	StructuralSimilarity = 11,
	StructuralDissimilarity = 12
}
export declare enum EvaluateOperator {
	Undefined = 0,
	Abs = 1,
	Add = 2,
	AddModulus = 3,
	And = 4,
	Cosine = 5,
	Divide = 6,
	Exponential = 7,
	GaussianNoise = 8,
	ImpulseNoise = 9,
	LaplacianNoise = 10,
	LeftShift = 11,
	Log = 12,
	Max = 13,
	Mean = 14,
	Median = 15,
	Min = 16,
	MultiplicativeNoise = 17,
	Multiply = 18,
	Or = 19,
	PoissonNoise = 20,
	Pow = 21,
	RightShift = 22,
	RootMeanSquare = 23,
	Set = 24,
	Sine = 25,
	Subtract = 26,
	Sum = 27,
	ThresholdBlack = 28,
	Threshold = 29,
	ThresholdWhite = 30,
	UniformNoise = 31,
	Xor = 32,
	InverseLog = 33
}
export declare enum FilterType {
	Undefined = 0,
	Point = 1,
	Box = 2,
	Triangle = 3,
	Hermite = 4,
	Hann = 5,
	Hamming = 6,
	Blackman = 7,
	Gaussian = 8,
	Quadratic = 9,
	Cubic = 10,
	Catrom = 11,
	Mitchell = 12,
	Jinc = 13,
	Sinc = 14,
	SincFast = 15,
	Kaiser = 16,
	Welch = 17,
	Parzen = 18,
	Bohman = 19,
	Bartlett = 20,
	Lagrange = 21,
	Lanczos = 22,
	LanczosSharp = 23,
	Lanczos2 = 24,
	Lanczos2Sharp = 25,
	Robidoux = 26,
	RobidouxSharp = 27,
	Cosine = 28,
	Spline = 29,
	LanczosRadius = 30,
	CubicSpline = 31
}
export declare enum GifDisposeMethod {
	Undefined = 0,
	None = 1,
	Background = 2,
	Previous = 3
}
export interface IImageProfile {
	readonly name: string;
	readonly data: Uint8Array;
}
export declare class ImageProfile implements IImageProfile {
	constructor(name: string, data: Uint8Array);
	readonly name: string;
	readonly data: Uint8Array;
}
export declare enum Interlace {
	Undefined = 0,
	NoInterlace = 1,
	Line = 2,
	Plane = 3,
	Partition = 4,
	Gif = 5,
	Jpeg = 6,
	Png = 7
}
export declare class MagickSettings {
	antiAlias?: boolean;
	backgroundColor?: IMagickColor;
	colorSpace?: ColorSpace;
	colorType?: ColorType;
	compression?: CompressionMethod;
	debug?: boolean;
	depth?: number;
	endian?: Endian;
	fillColor?: IMagickColor;
	font?: string;
	fontPointsize?: number;
	format?: MagickFormat;
	interlace?: Interlace;
	strokeColor?: IMagickColor;
	strokeWidth?: number;
	textInterlineSpacing?: number;
	textKerning?: number;
	getDefine(name: string): string;
	getDefine(format: MagickFormat, name: string): string;
	setDefine(name: string, value: string): void;
	setDefine(format: MagickFormat, name: string, value: string): void;
	setDefine(format: MagickFormat, name: string, value: number): void;
	setDefine(format: MagickFormat, name: string, value: boolean): void;
	setDefines(defines: IDefines): void;
	private parseDefine;
}
export declare class MagickReadSettings extends MagickSettings {
	constructor(partialSettings?: Partial<MagickReadSettings>);
	height?: number;
	width?: number;
	private getSize;
}
export declare class MontageSettings {
	backgroundColor?: IMagickColor;
	borderColor?: IMagickColor;
	borderWidth?: number;
	fillColor?: IMagickColor;
	font?: string;
	fontPointsize?: number;
	frameGeometry?: IMagickGeometry;
	geometry?: IMagickGeometry;
	gravity?: Gravity;
	label?: string;
	shadow?: boolean;
	strokeColor?: IMagickColor;
	textureFileName?: string;
	tileGeometry?: IMagickGeometry;
	title?: string;
	transparentColor?: IMagickColor;
}
export interface IMagickImageCollection extends Array<IMagickImage>, IDisposable {
	appendHorizontally<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	appendHorizontally<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	appendVertically<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	appendVertically<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	clone<TReturnType>(func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	clone<TReturnType>(func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	coalesce(): void;
	evaluate<TReturnType>(evaluateOperator: EvaluateOperator, func: (image: IMagickImage) => TReturnType): TReturnType;
	evaluate<TReturnType>(evaluateOperator: EvaluateOperator, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	flatten<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	flatten<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	merge<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	merge<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	montage<TReturnType>(settings: MontageSettings, func: (image: IMagickImage) => TReturnType): TReturnType;
	montage<TReturnType>(settings: MontageSettings, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	mosaic<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	mosaic<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	read(fileName: string, settings?: MagickReadSettings): void;
	read(array: ByteArray, settings?: MagickReadSettings): void;
	write<TReturnType>(func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
}
export declare class MagickImageCollection extends Array<MagickImage> implements IMagickImageCollection {
	private constructor();
	static create(): IMagickImageCollection;
	static create(array: ByteArray): IMagickImageCollection;
	dispose(): void;
	appendHorizontally<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	appendHorizontally<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	appendVertically<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	appendVertically<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	clone<TReturnType>(func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	clone<TReturnType>(func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	coalesce(): void;
	evaluate<TReturnType>(evaluateOperator: EvaluateOperator, func: (image: IMagickImage) => TReturnType): TReturnType;
	evaluate<TReturnType>(evaluateOperator: EvaluateOperator, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	flatten<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	flatten<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	merge<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	merge<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	montage<TReturnType>(settings: MontageSettings, func: (image: IMagickImage) => TReturnType): TReturnType;
	montage<TReturnType>(settings: MontageSettings, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	mosaic<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	mosaic<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	read(fileName: string, settings?: MagickReadSettings): void;
	read(array: ByteArray, settings?: MagickReadSettings): void;
	write<TReturnType>(func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	private addImages;
	private attachImages;
	private static createObject;
	private createImage;
	private static createSettings;
	private detachImages;
	private getSettings;
	private mergeImages;
	private throwIfEmpty;
	private checkResult;
}
export declare enum Kernel {
	Undefined = "Undefined",
	Unity = "Unity",
	Gaussian = "Gaussian",
	DoG = "DoG",
	LoG = "LoG",
	Blur = "Blur",
	Comet = "Comet",
	Binomial = "Binomial",
	Laplacian = "Laplacian",
	Sobel = "Sobel",
	FreiChen = "FreiChen",
	Roberts = "Roberts",
	Prewitt = "Prewitt",
	Compass = "Compass",
	Kirsch = "Kirsch",
	Diamond = "Diamond",
	Square = "Square",
	Rectangle = "Rectangle",
	Octagon = "Octagon",
	Disk = "Disk",
	Plus = "Plus",
	Cross = "Cross",
	Ring = "Ring",
	Peaks = "Peaks",
	Edges = "Edges",
	Corners = "Corners",
	Diagonals = "Diagonals",
	LineEnds = "LineEnds",
	LineJunctions = "LineJunctions",
	Ridges = "Ridges",
	ConvexHull = "ConvexHull",
	ThinSE = "ThinSE",
	Skeleton = "Skeleton",
	Chebyshev = "Chebyshev",
	Manhattan = "Manhattan",
	Octagonal = "Octagonal",
	Euclidean = "Euclidean",
	UserDefined = "UserDefined"
}
export declare enum MorphologyMethod {
	Undefined = 0,
	Convolve = 1,
	Correlate = 2,
	Erode = 3,
	Dilate = 4,
	ErodeIntensity = 5,
	DilateIntensity = 6,
	IterativeDistance = 7,
	Open = 8,
	Close = 9,
	OpenIntensity = 10,
	CloseIntensity = 11,
	Smooth = 12,
	EdgeIn = 13,
	EdgeOut = 14,
	Edge = 15,
	TopHat = 16,
	BottomHat = 17,
	HitAndMiss = 18,
	Thinning = 19,
	Thicken = 20,
	Distance = 21,
	Voronoi = 22
}
export declare class MorphologySettings {
	constructor(method: MorphologyMethod, kernel: Kernel | string, args?: string);
	channels: Channels;
	convolveBias: Percentage | undefined;
	convolveScale: IMagickGeometry | undefined;
	iterations: number;
	readonly kernel: string;
	readonly method: MorphologyMethod;
}
declare enum OrientationType$1 {
	Undefined = 0,
	TopLeft = 1,
	TopRight = 2,
	BottomRight = 3,
	BottomLeft = 4,
	LeftTop = 5,
	RightTop = 6,
	RightBottom = 7,
	LeftBottom = 8
}
export declare enum PixelChannel {
	Red = 0,
	Cyan = 0,
	Gray = 0,
	Green = 1,
	Magenta = 1,
	Blue = 2,
	Yellow = 2,
	Black = 3,
	Alpha = 4,
	Index = 5,
	Meta0 = 10,
	Meta1 = 11,
	Meta2 = 12,
	Meta3 = 13,
	Meta4 = 14,
	Meta5 = 15,
	Meta6 = 16,
	Meta7 = 17,
	Meta8 = 18,
	Meta9 = 19,
	Meta10 = 20,
	Meta11 = 21,
	Meta12 = 22,
	Meta13 = 23,
	Meta14 = 24,
	Meta15 = 25,
	Meta16 = 26,
	Meta17 = 27,
	Meta18 = 28,
	Meta19 = 29,
	Meta20 = 30,
	Meta21 = 31,
	Meta22 = 32,
	Meta23 = 33,
	Meta24 = 34,
	Meta25 = 35,
	Meta26 = 36,
	Meta27 = 37,
	Meta28 = 38,
	Meta29 = 39,
	Meta30 = 40,
	Meta31 = 41,
	Meta32 = 42,
	Meta33 = 43,
	Meta34 = 44,
	Meta35 = 45,
	Meta36 = 46,
	Meta37 = 47,
	Meta38 = 48,
	Meta39 = 49,
	Meta40 = 50,
	Meta41 = 51,
	Meta42 = 52,
	Meta43 = 53,
	Meta44 = 54,
	Meta45 = 55,
	Meta46 = 56,
	Meta47 = 57,
	Meta48 = 58,
	Meta49 = 59,
	Meta50 = 60,
	Meta51 = 61,
	Meta52 = 62,
	Composite = 64
}
export type quantumArray = Uint8Array;
export interface IPixelCollection extends IDisposable {
	getArea(x: number, y: number, width: number, height: number): quantumArray;
	getPixel(x: number, y: number): quantumArray;
	setArea(x: number, y: number, width: number, height: number, quantumPixels: quantumArray): void;
	setArea(x: number, y: number, width: number, height: number, numberPixels: number[]): void;
	setPixel(x: number, y: number, quantumPixels: quantumArray): void;
	setPixel(x: number, y: number, numberPixels: number[]): void;
	toByteArray(x: number, y: number, width: number, height: number, mapping: string): Uint8Array | null;
}
export declare class PixelCollection extends NativeInstance implements IPixelCollection {
	private readonly image;
	private constructor();
	getArea(x: number, y: number, width: number, height: number): quantumArray;
	getPixel(x: number, y: number): quantumArray;
	setArea(x: number, y: number, width: number, height: number, quantumPixels: quantumArray): void;
	setArea(x: number, y: number, width: number, height: number, numberPixels: number[]): void;
	setPixel(x: number, y: number, quantumPixels: quantumArray): void;
	setPixel(x: number, y: number, numberPixels: number[]): void;
	toByteArray(x: number, y: number, width: number, height: number, mapping: string): Uint8Array | null;
	private use;
}
export declare enum PixelIntensityMethod {
	Undefined = 0,
	Average = 1,
	Brightness = 2,
	Lightness = 3,
	MS = 4,
	Rec601Luma = 5,
	Rec601Luminance = 6,
	Rec709Luma = 7,
	Rec709Luminance = 8,
	RMS = 9
}
export declare enum PixelInterpolateMethod {
	Undefined = 0,
	Average = 1,
	Average9 = 2,
	Average16 = 3,
	Background = 4,
	Bilinear = 5,
	Blend = 6,
	Catrom = 7,
	Integer = 8,
	Mesh = 9,
	Nearest = 10,
	Spline = 11
}
declare class ProgressEvent$1 {
	readonly origin: string | null;
	readonly progress: Percentage;
	cancel: boolean;
}
export declare enum DitherMethod {
	Undefined = 0,
	No = 1,
	Riemersma = 2,
	FloydSteinberg = 3
}
export declare class QuantizeSettings {
	constructor();
	colors: number;
	colorSpace: ColorSpace;
	ditherMethod?: DitherMethod;
	measureErrors: boolean;
	treeDepth: number;
}
export declare enum RenderingIntent {
	Undefined = 0,
	Saturation = 1,
	Perceptual = 2,
	Absolute = 3,
	Relative = 4
}
export interface IChannelStatistics {
	readonly channel: PixelChannel;
	readonly depth: number;
	readonly entropy: number;
	readonly kurtosis: number;
	readonly maximum: number;
	readonly mean: number;
	readonly minimum: number;
	readonly skewness: number;
	readonly standardDeviation: number;
}
export interface IStatistics {
	readonly channels: ReadonlyArray<PixelChannel>;
	composite(): IChannelStatistics;
	getChannel(channel: PixelChannel): IChannelStatistics | null;
}
export declare enum VirtualPixelMethod {
	Undefined = 0,
	Background = 1,
	Dither = 2,
	Edge = 3,
	Mirror = 4,
	Random = 5,
	Tile = 6,
	Transparent = 7,
	Mask = 8,
	Black = 9,
	Gray = 10,
	White = 11,
	HorizontalTile = 12,
	VerticalTile = 13,
	HorizontalTileEdge = 14,
	VerticalTileEdge = 15,
	CheckerTile = 16
}
export declare enum MagickErrorSeverity {
	Warning = 300,
	ResourceLimitWarning = 300,
	TypeWarning = 305,
	OptionWarning = 310,
	DelegateWarning = 315,
	MissingDelegateWarning = 320,
	CorruptImageWarning = 325,
	FileOpenWarning = 330,
	BlobWarning = 335,
	StreamWarning = 340,
	CacheWarning = 345,
	CoderWarning = 350,
	FilterWarning = 352,
	ModuleWarning = 355,
	DrawWarning = 360,
	ImageWarning = 365,
	WandWarning = 370,
	RandomWarning = 375,
	XServerWarning = 380,
	MonitorWarning = 385,
	RegistryWarning = 390,
	ConfigureWarning = 395,
	PolicyWarning = 399,
	Error = 400,
	ResourceLimitError = 400,
	TypeError = 405,
	OptionError = 410,
	DelegateError = 415,
	MissingDelegateError = 420,
	CorruptImageError = 425,
	FileOpenError = 430,
	BlobError = 435,
	StreamError = 440,
	CacheError = 445,
	CoderError = 450,
	FilterError = 452,
	ModuleError = 455,
	DrawError = 460,
	ImageError = 465,
	WandError = 470,
	RandomError = 475,
	XServerError = 480,
	MonitorError = 485,
	RegistryError = 490,
	ConfigureError = 495,
	PolicyError = 499
}
export declare class MagickError extends Error {
	private _relatedErrors;
	readonly severity: MagickErrorSeverity;
	get relatedErrors(): ReadonlyArray<MagickError>;
}
export declare class WarningEvent {
	readonly error: MagickError;
}
export interface IMagickImage extends IDisposable {
	animationDelay: number;
	animationIterations: number;
	animationTicksPerSecond: number;
	readonly artifactNames: ReadonlyArray<string>;
	readonly attributeNames: ReadonlyArray<string>;
	backgroundColor: IMagickColor;
	readonly baseHeight: number;
	readonly baseWidth: number;
	blackPointCompensation: boolean;
	borderColor: IMagickColor;
	boundingBox: IMagickGeometry | null;
	readonly channelCount: number;
	readonly channels: ReadonlyArray<PixelChannel>;
	chromaticity: ChromaticityInfo;
	classType: ClassType;
	colorFuzz: Percentage;
	colormapSize: number;
	colorSpace: ColorSpace;
	colorType: ColorType;
	comment: string | null;
	compose: CompositeOperator;
	readonly compression: CompressionMethod;
	density: Density;
	depth: number;
	endian: Endian;
	readonly fileName: string | null;
	filterType: FilterType;
	format: MagickFormat;
	gamma: number;
	gifDisposeMethod: GifDisposeMethod;
	hasAlpha: boolean;
	readonly height: number;
	readonly interlace: Interlace;
	interpolate: PixelInterpolateMethod;
	readonly isOpaque: boolean;
	label: string | null;
	matteColor: IMagickColor;
	orientation: OrientationType$1;
	onProgress?: (event: ProgressEvent$1) => void;
	onWarning?: (event: WarningEvent) => void;
	page: IMagickGeometry;
	readonly profileNames: ReadonlyArray<string>;
	quality: number;
	renderingIntent: RenderingIntent;
	readonly settings: MagickSettings;
	readonly signature: string | null;
	readonly totalColors: number;
	virtualPixelMethod: VirtualPixelMethod;
	width: number;
	adaptiveBlur(): void;
	adaptiveBlur(radius: number): void;
	adaptiveBlur(radius: number, sigma: number): void;
	alpha(value: AlphaOption$1): void;
	autoGamma(): void;
	autoGamma(channels: Channels): void;
	autoLevel(): void;
	autoLevel(channels: Channels): void;
	autoOrient(): void;
	autoThreshold(method: AutoThresholdMethod): void;
	blur(): void;
	blur(channels: Channels): void;
	blur(radius: number, sigma: number): void;
	blur(radius: number, sigma: number, channels: Channels): void;
	border(size: number): void;
	border(width: number, height: number): void;
	brightnessContrast(brightness: Percentage, contrast: Percentage): void;
	brightnessContrast(brightness: Percentage, contrast: Percentage, channels: Channels): void;
	charcoal(): void;
	charcoal(radius: number, sigma: number): void;
	clahe(xTiles: number, yTiles: number, numberBins: number, clipLimit: number): void;
	clahe(xTiles: Percentage, yTiles: Percentage, numberBins: number, clipLimit: number): void;
	clone<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	clone<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	colorAlpha(color: IMagickColor): void;
	compare(image: IMagickImage, metric: ErrorMetric): number;
	compare(image: IMagickImage, metric: ErrorMetric, channels: Channels): number;
	composite(image: IMagickImage): void;
	composite(image: IMagickImage, compose: CompositeOperator): void;
	composite(image: IMagickImage, compose: CompositeOperator, channels: Channels): void;
	composite(image: IMagickImage, compose: CompositeOperator, args: string): void;
	composite(image: IMagickImage, compose: CompositeOperator, args: string, channels: Channels): void;
	composite(image: IMagickImage, point: Point): void;
	composite(image: IMagickImage, point: Point, channels: Channels): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point, channels: Channels): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point, args: string): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point, args: string, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, args: string): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, args: string, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, point: Point): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, point: Point, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point, args: string): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point, args: string, channels: Channels): void;
	connectedComponents(connectivity: Connectivity): ConnectedComponent[];
	connectedComponents(settings: ConnectedComponentsSettings): ConnectedComponent[];
	contrast(): void;
	contrastStretch(blackPoint: Percentage): void;
	contrastStretch(blackPoint: Percentage, channels: Channels): void;
	contrastStretch(blackPoint: Percentage, whitePoint: Percentage): void;
	contrastStretch(blackPoint: Percentage, whitePoint: Percentage, channels: Channels): void;
	crop(geometry: IMagickGeometry): void;
	crop(geometry: IMagickGeometry, gravity: Gravity): void;
	crop(width: number, height: number): void;
	crop(width: number, height: number, gravity: Gravity): void;
	cropToTiles<TReturnType>(geometry: IMagickGeometry, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	cropToTiles<TReturnType>(geometry: IMagickGeometry, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	cropToTiles<TReturnType>(width: number, height: number, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	cropToTiles<TReturnType>(width: number, height: number, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	deskew(threshold: Percentage): number;
	deskew(threshold: Percentage, autoCrop: boolean): number;
	distort(method: DistortMethod, params: number[]): void;
	distort(settings: DistortSettings, params: number[]): void;
	draw(drawables: IDrawable[]): void;
	draw(...drawables: IDrawable[]): void;
	evaluate(channels: Channels, operator: EvaluateOperator, value: number): void;
	evaluate(channels: Channels, operator: EvaluateOperator, value: Percentage): void;
	evaluate(channels: Channels, geometry: IMagickGeometry, operator: EvaluateOperator, value: number): void;
	evaluate(channels: Channels, geometry: IMagickGeometry, operator: EvaluateOperator, value: Percentage): void;
	extent(width: number, height: number): void;
	extent(width: number, height: number, gravity: Gravity): void;
	extent(width: number, height: number, backgroundColor: IMagickColor): void;
	extent(geometry: IMagickGeometry): void;
	extent(geometry: IMagickGeometry, gravity: Gravity): void;
	extent(geometry: IMagickGeometry, gravity: Gravity, backgroundColor: IMagickColor): void;
	extent(geometry: IMagickGeometry, backgroundColor: IMagickColor): void;
	flip(): void;
	flop(): void;
	gaussianBlur(radius: number): void;
	gaussianBlur(radius: number, sigma: number): void;
	gaussianBlur(radius: number, sigma: number, channels: Channels): void;
	getArtifact(name: string): string | null;
	getAttribute(name: string): string | null;
	getPixels<TReturnType>(func: (pixels: IPixelCollection) => TReturnType): TReturnType;
	getPixels<TReturnType>(func: (pixels: IPixelCollection) => Promise<TReturnType>): Promise<TReturnType>;
	getProfile(name: string): IImageProfile | null;
	getWriteMask<TReturnType>(func: (mask: IMagickImage | null) => TReturnType): TReturnType;
	getWriteMask<TReturnType>(func: (mask: IMagickImage | null) => Promise<TReturnType>): Promise<TReturnType>;
	grayscale(): void;
	grayscale(method: PixelIntensityMethod): void;
	histogram(): Map<string, number>;
	inverseContrast(): void;
	inverseLevel(blackPoint: Percentage, whitePoint: Percentage): void;
	inverseLevel(blackPoint: Percentage, whitePoint: Percentage, gamma: number): void;
	inverseLevel(blackPoint: Percentage, whitePoint: Percentage, gamma: number, channels: Channels): void;
	inverseOpaque(target: IMagickColor, fill: IMagickColor): void;
	inverseSigmoidalContrast(contrast: number): void;
	inverseSigmoidalContrast(contrast: number, midpoint: Percentage): void;
	inverseSigmoidalContrast(contrast: number, midpoint: number): void;
	inverseSigmoidalContrast(contrast: number, midpoint: number, channels: Channels): void;
	inverseTransparent(color: IMagickColor): void;
	level(blackPoint: Percentage, whitePoint: Percentage): void;
	level(blackPoint: Percentage, whitePoint: Percentage, gamma: number): void;
	level(blackPoint: Percentage, whitePoint: Percentage, gamma: number, channels: Channels): void;
	linearStretch(blackPoint: Percentage, whitePoint: Percentage): void;
	liquidRescale(geometry: IMagickGeometry): void;
	liquidRescale(width: number, height: number): void;
	modulate(brightness: Percentage): void;
	modulate(brightness: Percentage, saturation: Percentage): void;
	modulate(brightness: Percentage, saturation: Percentage, hue: Percentage): void;
	morphology(settings: MorphologySettings): void;
	motionBlur(radius: number, sigma: number, angle: number): void;
	negate(): void;
	negate(channels: Channels): void;
	negateGrayScale(): void;
	negateGrayScale(channels: Channels): void;
	normalize(): void;
	oilPaint(): void;
	oilPaint(radius: number): void;
	opaque(target: IMagickColor, fill: IMagickColor): void;
	ping(fileName: string, settings?: MagickReadSettings): void;
	ping(array: ByteArray, settings?: MagickReadSettings): void;
	quantize(settings: QuantizeSettings): void;
	read(color: IMagickColor, width: number, height: number): void;
	read(fileName: string, settings?: MagickReadSettings): void;
	read(array: ByteArray, settings?: MagickReadSettings): void;
	readFromCanvas(canvas: HTMLCanvasElement, settings?: CanvasRenderingContext2DSettings): void;
	removeArtifact(name: string): void;
	removeAttribute(name: string): void;
	removeProfile(profile: IImageProfile): void;
	removeProfile(name: string): void;
	removeWriteMask(): void;
	repage(): void;
	resize(geometry: IMagickGeometry): void;
	resize(width: number, height: number): void;
	rotate(degrees: number): void;
	separate<TReturnType>(func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	separate<TReturnType>(func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	separate<TReturnType>(channels: Channels, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	separate<TReturnType>(channels: Channels, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	sepiaTone(): void;
	sepiaTone(threshold: number): void;
	sepiaTone(threshold: Percentage): void;
	setArtifact(name: string, value: string | boolean): void;
	setAttribute(name: string, value: string): void;
	setProfile(profile: IImageProfile): void;
	setProfile(name: string, data: ByteArray): void;
	setWriteMask(image: IMagickImage): void;
	sharpen(): void;
	sharpen(radius: number, sigma: number): void;
	sharpen(radius: number, sigma: number, channels: Channels): void;
	shave(leftRight: number, topBottom: number): void;
	sigmoidalContrast(contrast: number): void;
	sigmoidalContrast(contrast: number, midpoint: Percentage): void;
	sigmoidalContrast(contrast: number, midpoint: number): void;
	sigmoidalContrast(contrast: number, midpoint: number, channels: Channels): void;
	solarize(): void;
	solarize(factor: number): void;
	solarize(factor: Percentage): void;
	splice(geometry: IMagickGeometry): void;
	statistics(): IStatistics;
	statistics(channels: Channels): IStatistics;
	strip(): void;
	threshold(percentage: Percentage): void;
	threshold(percentage: Percentage, channels: Channels): void;
	toString(): string;
	transparent(color: IMagickColor): void;
	trim(): void;
	trim(...edges: Gravity[]): void;
	trim(percentage: Percentage): void;
	vignette(): void;
	vignette(radius: number, sigma: number, x: number, y: number): void;
	wave(): void;
	wave(method: PixelInterpolateMethod, amplitude: number, length: number): void;
	write<TReturnType>(func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	writeToCanvas(canvas: HTMLCanvasElement, settings?: CanvasRenderingContext2DSettings): void;
}
export declare class MagickImage extends NativeInstance implements IMagickImage {
	private readonly _settings;
	private _progress?;
	private _warning?;
	private constructor();
	get animationDelay(): number;
	set animationDelay(value: number);
	get animationIterations(): number;
	set animationIterations(value: number);
	get animationTicksPerSecond(): number;
	set animationTicksPerSecond(value: number);
	get artifactNames(): ReadonlyArray<string>;
	get attributeNames(): ReadonlyArray<string>;
	get backgroundColor(): IMagickColor;
	set backgroundColor(value: IMagickColor);
	get baseHeight(): number;
	get baseWidth(): number;
	get blackPointCompensation(): boolean;
	set blackPointCompensation(value: boolean);
	get borderColor(): IMagickColor;
	set borderColor(value: IMagickColor);
	get boundingBox(): IMagickGeometry | null;
	get channelCount(): number;
	get channels(): ReadonlyArray<PixelChannel>;
	get chromaticity(): ChromaticityInfo;
	set chromaticity(value: ChromaticityInfo);
	get classType(): ClassType;
	set classType(value: ClassType);
	get colorFuzz(): Percentage;
	set colorFuzz(value: Percentage);
	get colormapSize(): number;
	set colormapSize(value: number);
	get colorSpace(): ColorSpace;
	set colorSpace(value: ColorSpace);
	get colorType(): ColorType;
	set colorType(value: ColorType);
	get comment(): string | null;
	set comment(value: string | null);
	get compose(): CompositeOperator;
	set compose(value: CompositeOperator);
	get compression(): CompressionMethod;
	get density(): Density;
	set density(value: Density);
	get depth(): number;
	set depth(value: number);
	get endian(): number;
	set endian(value: number);
	get fileName(): string | null;
	get filterType(): number;
	set filterType(value: number);
	get format(): MagickFormat;
	set format(value: MagickFormat);
	get gamma(): number;
	get gifDisposeMethod(): GifDisposeMethod;
	set gifDisposeMethod(value: GifDisposeMethod);
	get hasAlpha(): boolean;
	set hasAlpha(value: boolean);
	get height(): number;
	get interlace(): Interlace;
	get isOpaque(): boolean;
	get interpolate(): PixelInterpolateMethod;
	set interpolate(value: PixelInterpolateMethod);
	get label(): string | null;
	set label(value: string | null);
	get matteColor(): IMagickColor;
	set matteColor(value: IMagickColor);
	get orientation(): OrientationType$1;
	set orientation(value: OrientationType$1);
	get onProgress(): ((event: ProgressEvent$1) => number) | undefined;
	set onProgress(value: ((event: ProgressEvent$1) => number) | undefined);
	get onWarning(): ((event: WarningEvent) => number) | undefined;
	set onWarning(value: ((event: WarningEvent) => number) | undefined);
	get page(): IMagickGeometry;
	set page(value: IMagickGeometry);
	get profileNames(): ReadonlyArray<string>;
	get quality(): number;
	set quality(value: number);
	get renderingIntent(): RenderingIntent;
	set renderingIntent(value: RenderingIntent);
	get settings(): MagickSettings;
	get signature(): string | null;
	get totalColors(): number;
	get virtualPixelMethod(): VirtualPixelMethod;
	set virtualPixelMethod(value: VirtualPixelMethod);
	get width(): number;
	adaptiveBlur(): void;
	adaptiveBlur(radius: number): void;
	adaptiveBlur(radius: number, sigma: number): void;
	alpha(value: AlphaOption$1): void;
	autoGamma(): void;
	autoLevel(): void;
	autoOrient(): void;
	autoThreshold(method: AutoThresholdMethod): void;
	blur(): void;
	blur(channels: Channels): void;
	blur(radius: number, sigma: number): void;
	blur(radius: number, sigma: number, channels: Channels): void;
	border(size: number): void;
	border(width: number, height: number): void;
	brightnessContrast(brightness: Percentage, contrast: Percentage): void;
	brightnessContrast(brightness: Percentage, contrast: Percentage, channels: Channels): void;
	charcoal(): void;
	charcoal(radius: number, sigma: number): void;
	clahe(xTiles: number, yTiles: number, numberBins: number, clipLimit: number): void;
	clahe(xTiles: Percentage, yTiles: Percentage, numberBins: number, clipLimit: number): void;
	clone<TReturnType>(func: (image: IMagickImage) => TReturnType): TReturnType;
	clone<TReturnType>(func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	colorAlpha(color: IMagickColor): void;
	compare(image: IMagickImage, metric: ErrorMetric): number;
	compare(image: IMagickImage, metric: ErrorMetric, channels: Channels): number;
	composite(image: IMagickImage): void;
	composite(image: IMagickImage, compose: CompositeOperator): void;
	composite(image: IMagickImage, compose: CompositeOperator, channels: Channels): void;
	composite(image: IMagickImage, compose: CompositeOperator, args: string): void;
	composite(image: IMagickImage, compose: CompositeOperator, args: string, channels: Channels): void;
	composite(image: IMagickImage, point: Point): void;
	composite(image: IMagickImage, point: Point, channels: Channels): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point, channels: Channels): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point, args: string): void;
	composite(image: IMagickImage, compose: CompositeOperator, point: Point, args: string, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, args: string): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, args: string, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, point: Point): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, point: Point, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point, channels: Channels): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point, args: string): void;
	compositeGravity(image: IMagickImage, gravity: Gravity, compose: CompositeOperator, point: Point, args: string, channels: Channels): void;
	connectedComponents(connectivity: Connectivity): ConnectedComponent[];
	connectedComponents(settings: ConnectedComponentsSettings): ConnectedComponent[];
	contrast: () => void;
	contrastStretch(blackPoint: Percentage): void;
	contrastStretch(blackPoint: Percentage, channnels: Channels): void;
	contrastStretch(blackPoint: Percentage, whitePoint: Percentage): void;
	contrastStretch(blackPoint: Percentage, whitePoint: Percentage, channnels: Channels): void;
	static create(): IMagickImage;
	static create(color: IMagickColor, width: number, height: number): IMagickImage;
	static create(fileName: string, settings?: MagickReadSettings): IMagickImage;
	static create(array: ByteArray, settings?: MagickReadSettings): IMagickImage;
	crop(geometry: IMagickGeometry): void;
	crop(geometry: IMagickGeometry, gravity: Gravity): void;
	crop(width: number, height: number): void;
	crop(width: number, height: number, gravity: Gravity): void;
	cropToTiles<TReturnType>(geometry: IMagickGeometry, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	cropToTiles<TReturnType>(geometry: IMagickGeometry, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	cropToTiles<TReturnType>(width: number, height: number, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	cropToTiles<TReturnType>(width: number, height: number, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	deskew(threshold: Percentage): number;
	deskew(threshold: Percentage, autoCrop: boolean): number;
	distort(method: DistortMethod, params: number[]): void;
	distort(settings: DistortSettings, params: number[]): void;
	draw(drawables: IDrawable[]): void;
	draw(...drawables: IDrawable[]): void;
	evaluate(channels: Channels, operator: EvaluateOperator, value: number): void;
	evaluate(channels: Channels, operator: EvaluateOperator, value: Percentage): void;
	evaluate(channels: Channels, geometry: IMagickGeometry, operator: EvaluateOperator, value: number): void;
	evaluate(channels: Channels, geometry: IMagickGeometry, operator: EvaluateOperator, value: Percentage): void;
	extent(width: number, height: number): void;
	extent(width: number, height: number, gravity: Gravity): void;
	extent(width: number, height: number, backgroundColor: IMagickColor): void;
	extent(geometry: IMagickGeometry): void;
	extent(geometry: IMagickGeometry, gravity: Gravity): void;
	extent(geometry: IMagickGeometry, gravity: Gravity, backgroundColor: IMagickColor): void;
	extent(geometry: IMagickGeometry, backgroundColor: IMagickColor): void;
	flip(): void;
	flop(): void;
	gaussianBlur(radius: number): void;
	gaussianBlur(radius: number, sigma: number): void;
	gaussianBlur(radius: number, sigma: number, channels: Channels): void;
	getArtifact(name: string): string | null;
	getAttribute(name: string): string | null;
	getPixels<TReturnType>(func: (pixels: IPixelCollection) => TReturnType): TReturnType;
	getPixels<TReturnType>(func: (pixels: IPixelCollection) => Promise<TReturnType>): Promise<TReturnType>;
	getProfile(name: string): IImageProfile | null;
	getWriteMask<TReturnType>(func: (mask: IMagickImage | null) => TReturnType): TReturnType;
	getWriteMask<TReturnType>(func: (mask: IMagickImage | null) => Promise<TReturnType>): Promise<TReturnType>;
	grayscale(method?: PixelIntensityMethod): void;
	histogram(): Map<string, number>;
	inverseContrast: () => void;
	inverseLevel(blackPoint: Percentage, whitePoint: Percentage): void;
	inverseLevel(blackPoint: Percentage, whitePoint: Percentage, gamma: number): void;
	inverseLevel(blackPoint: Percentage, whitePoint: Percentage, gamma: number, channels: Channels): void;
	inverseOpaque: (target: IMagickColor, fill: IMagickColor) => void;
	inverseSigmoidalContrast(contrast: number): void;
	inverseSigmoidalContrast(contrast: number, midpoint: Percentage): void;
	inverseSigmoidalContrast(contrast: number, midpoint: number): void;
	inverseSigmoidalContrast(contrast: number, midpoint: number, channels: Channels): void;
	inverseTransparent: (color: IMagickColor) => void;
	level(blackPoint: Percentage, whitePoint: Percentage): void;
	level(blackPoint: Percentage, whitePoint: Percentage, gamma: number): void;
	level(blackPoint: Percentage, whitePoint: Percentage, gamma: number, channels: Channels): void;
	linearStretch(blackPoint: Percentage, whitePoint: Percentage): void;
	liquidRescale(geometry: IMagickGeometry): void;
	liquidRescale(width: number, height: number): void;
	negate(): void;
	negateGrayScale(): void;
	normalize(): void;
	modulate(brightness: Percentage): void;
	modulate(brightness: Percentage, saturation: Percentage): void;
	modulate(brightness: Percentage, saturation: Percentage, hue: Percentage): void;
	morphology(settings: MorphologySettings): void;
	motionBlur(radius: number, sigma: number, angle: number): void;
	oilPaint(): void;
	oilPaint(radius: number): void;
	opaque: (target: IMagickColor, fill: IMagickColor) => void;
	ping(fileName: string, settings?: MagickReadSettings): void;
	ping(array: ByteArray, settings?: MagickReadSettings): void;
	quantize(settings: QuantizeSettings): void;
	read(color: IMagickColor, width: number, height: number): void;
	read(fileName: string, settings?: MagickReadSettings): void;
	read(array: ByteArray, settings?: MagickReadSettings): void;
	readFromCanvas(canvas: HTMLCanvasElement, settings?: CanvasRenderingContext2DSettings): void;
	removeArtifact(name: string): void;
	removeAttribute(name: string): void;
	removeProfile(profile: IImageProfile): void;
	removeProfile(name: string): void;
	removeWriteMask(): void;
	repage(): void;
	resize(geometry: IMagickGeometry): void;
	resize(width: number, height: number): void;
	rotate(degrees: number): void;
	separate<TReturnType>(func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	separate<TReturnType>(func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	separate<TReturnType>(channels: Channels, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	separate<TReturnType>(channels: Channels, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	sepiaTone(): void;
	setArtifact(name: string, value: string | boolean): void;
	setAttribute(name: string, value: string): void;
	setProfile(profile: IImageProfile): void;
	setProfile(pname: string, data: ByteArray): void;
	setWriteMask(image: IMagickImage): void;
	sharpen(): void;
	sharpen(radius: number, sigma: number): void;
	sharpen(radius: number, sigma: number, channels: Channels): void;
	shave(leftRight: number, topBottom: number): void;
	sigmoidalContrast(contrast: number): void;
	sigmoidalContrast(contrast: number, midpoint: Percentage): void;
	sigmoidalContrast(contrast: number, midpoint: number): void;
	sigmoidalContrast(contrast: number, midpoint: number, channels: Channels): void;
	solarize(): void;
	splice(geometry: IMagickGeometry): void;
	statistics(): IStatistics;
	statistics(channels: Channels): IStatistics;
	strip(): void;
	threshold(percentage: Percentage): void;
	threshold(percentage: Percentage, channels: Channels): void;
	toString: () => string;
	transparent(color: IMagickColor): void;
	trim(): void;
	trim(...edges: Gravity[]): void;
	trim(percentage: Percentage): void;
	wave(): void;
	wave(method: PixelInterpolateMethod, amplitude: number, length: number): void;
	vignette(): void;
	vignette(radius: number, sigma: number, x: number, y: number): void;
	write<TReturnType>(func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => TReturnType): TReturnType;
	write<TReturnType>(format: MagickFormat, func: (data: Uint8Array) => Promise<TReturnType>): Promise<TReturnType>;
	writeToCanvas(canvas: HTMLCanvasElement, settings?: CanvasRenderingContext2DSettings): void;
	protected onDispose(): void;
	private _contrast;
	private _opaque;
	private _sigmoidalContrast;
	private _transparent;
	private static createInstance;
	private fromBool;
	private disposeProgressDelegate;
	private readOrPing;
	private readFromArray;
	private toBool;
	private valueOrDefault;
	private useException;
	private useExceptionPointer;
}
export declare class TypeMetric {
	private constructor();
	readonly ascent: number;
	readonly descent: number;
	readonly maxHorizontalAdvance: number;
	readonly textHeight: number;
	readonly textWidth: number;
	readonly underlinePosition: number;
	readonly underlineThickness: number;
}
export declare class Drawables {
	private _drawables;
	disableStrokeAntialias(): Drawables;
	enableStrokeAntialias(): Drawables;
	fillColor(color: IMagickColor): Drawables;
	fillOpacity(opacity: Percentage): Drawables;
	font(font: string): Drawables;
	fontPointSize(pointSize: number): Drawables;
	fontTypeMetrics(text: string, ignoreNewlines?: boolean): TypeMetric | null;
	gravity(value: Gravity): Drawables;
	line(startX: number, startY: number, endX: number, endY: number): Drawables;
	point(x: number, y: number): Drawables;
	rectangle(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number): Drawables;
	roundRectangle(upperLeftX: number, upperLeftY: number, lowerRightX: number, lowerRightY: number, cornerWidth: number, cornerHeight: number): Drawables;
	strokeColor(color: IMagickColor): Drawables;
	strokeWidth(width: number): Drawables;
	text(x: number, y: number, value: string): Drawables;
	textAlignment(alignment: TextAlignment): Drawables;
	textDecoration(decoration: TextDecoration): Drawables;
	textInterlineSpacing(spacing: number): Drawables;
	textInterwordSpacing(spacing: number): Drawables;
	textKerning(kerning: number): Drawables;
	textUnderColor(color: IMagickColor): Drawables;
	draw(image: IMagickImage): Drawables;
}
export declare enum LogEventTypes {
	None = 0,
	Accelerate = 1,
	Annotate = 2,
	Blob = 4,
	Cache = 8,
	Coder = 16,
	Configure = 32,
	Deprecate = 64,
	Draw = 128,
	Exception = 256,
	Image = 512,
	Locale = 1024,
	Module = 2048,
	Pixel = 4096,
	Policy = 8192,
	Resource = 16384,
	Trace = 32768,
	Transform = 65536,
	User = 131072,
	Wand = 262144,
	Detailed = 2147450879,
	All = 2147483647
}
export declare class LogEvent {
	constructor(eventType: LogEventTypes, message?: string);
	readonly eventType: LogEventTypes;
	readonly message: string;
}
export declare enum DngInterpolation {
	Disabled = -1,
	Linear = 0,
	Vng = 1,
	Ppg = 2,
	Ahd = 3,
	DCB = 4,
	Dht = 11,
	ModifiedAhd = 12
}
export declare enum DngOutputColor {
	Raw = 0,
	SRGB = 1,
	AdobeRGB = 2,
	WideGamutRGB = 3,
	KodakProPhotoRGB = 4,
	XYZ = 5,
	ACES = 6
}
export declare class DngReadDefines extends DefinesCreator {
	constructor();
	disableAutoBrightness?: boolean;
	interpolationQuality?: DngInterpolation;
	outputColor?: DngOutputColor;
	useAutoWhitebalance?: boolean;
	useCameraWhitebalance?: boolean;
	getDefines(): IDefine[];
}
export declare class ImageMagick {
	private readonly loader;
	private api?;
	static read<TReturnType>(color: IMagickColor, width: number, height: number, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(color: IMagickColor, width: number, height: number, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static read<TReturnType>(array: ByteArray, format: MagickFormat, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(array: ByteArray, format: MagickFormat, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static read<TReturnType>(array: ByteArray, settings: MagickReadSettings, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(array: ByteArray, settings: MagickReadSettings, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static read<TReturnType>(array: ByteArray, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(array: ByteArray, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static read<TReturnType>(fileName: string, format: MagickFormat, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(fileName: string, format: MagickFormat, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static read<TReturnType>(fileName: string, settings: MagickReadSettings, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(fileName: string, settings: MagickReadSettings, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static read<TReturnType>(fileName: string, func: (image: IMagickImage) => TReturnType): TReturnType;
	static read<TReturnType>(fileName: string, func: (image: IMagickImage) => Promise<TReturnType>): Promise<TReturnType>;
	static readCollection<TReturnType>(array: ByteArray, format: MagickFormat, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	static readCollection<TReturnType>(array: ByteArray, format: MagickFormat, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	static readCollection<TReturnType>(array: ByteArray, settings: MagickReadSettings, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	static readCollection<TReturnType>(array: ByteArray, settings: MagickReadSettings, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	static readCollection<TReturnType>(array: ByteArray, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	static readCollection<TReturnType>(array: ByteArray, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	static readCollection<TReturnType>(fileName: string, settings: MagickReadSettings, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	static readCollection<TReturnType>(fileName: string, settings: MagickReadSettings, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	static readCollection<TReturnType>(fileName: string, func: (images: IMagickImageCollection) => TReturnType): TReturnType;
	static readCollection<TReturnType>(fileName: string, func: (images: IMagickImageCollection) => Promise<TReturnType>): Promise<TReturnType>;
	static readFromCanvas<TReturnType>(canvas: HTMLCanvasElement, func: (image: IMagickImage) => TReturnType, settings?: CanvasRenderingContext2DSettings): TReturnType;
	static readFromCanvas<TReturnType>(canvas: HTMLCanvasElement, func: (image: IMagickImage) => Promise<TReturnType>, settings?: CanvasRenderingContext2DSettings): Promise<TReturnType>;
	private writeConfigurationFiles;
}
export declare function initializeImageMagick(wasmLocationDataOrAssembly: URL | ByteArray | WebAssembly.Module, configurationFiles?: IConfigurationFiles): Promise<void>;
export declare class MagickColors {
	static get None(): IMagickColor;
	static get Transparent(): IMagickColor;
	static get AliceBlue(): IMagickColor;
	static get AntiqueWhite(): IMagickColor;
	static get Aqua(): IMagickColor;
	static get Aquamarine(): IMagickColor;
	static get Azure(): IMagickColor;
	static get Beige(): IMagickColor;
	static get Bisque(): IMagickColor;
	static get Black(): IMagickColor;
	static get BlanchedAlmond(): IMagickColor;
	static get Blue(): IMagickColor;
	static get BlueViolet(): IMagickColor;
	static get Brown(): IMagickColor;
	static get BurlyWood(): IMagickColor;
	static get CadetBlue(): IMagickColor;
	static get Chartreuse(): IMagickColor;
	static get Chocolate(): IMagickColor;
	static get Coral(): IMagickColor;
	static get CornflowerBlue(): IMagickColor;
	static get Cornsilk(): IMagickColor;
	static get Crimson(): IMagickColor;
	static get Cyan(): IMagickColor;
	static get DarkBlue(): IMagickColor;
	static get DarkCyan(): IMagickColor;
	static get DarkGoldenrod(): IMagickColor;
	static get DarkGray(): IMagickColor;
	static get DarkGreen(): IMagickColor;
	static get DarkKhaki(): IMagickColor;
	static get DarkMagenta(): IMagickColor;
	static get DarkOliveGreen(): IMagickColor;
	static get DarkOrange(): IMagickColor;
	static get DarkOrchid(): IMagickColor;
	static get DarkRed(): IMagickColor;
	static get DarkSalmon(): IMagickColor;
	static get DarkSeaGreen(): IMagickColor;
	static get DarkSlateBlue(): IMagickColor;
	static get DarkSlateGray(): IMagickColor;
	static get DarkTurquoise(): IMagickColor;
	static get DarkViolet(): IMagickColor;
	static get DeepPink(): IMagickColor;
	static get DeepSkyBlue(): IMagickColor;
	static get DimGray(): IMagickColor;
	static get DodgerBlue(): IMagickColor;
	static get Firebrick(): IMagickColor;
	static get FloralWhite(): IMagickColor;
	static get ForestGreen(): IMagickColor;
	static get Fuchsia(): IMagickColor;
	static get Gainsboro(): IMagickColor;
	static get GhostWhite(): IMagickColor;
	static get Gold(): IMagickColor;
	static get Goldenrod(): IMagickColor;
	static get Gray(): IMagickColor;
	static get Green(): IMagickColor;
	static get GreenYellow(): IMagickColor;
	static get Honeydew(): IMagickColor;
	static get HotPink(): IMagickColor;
	static get IndianRed(): IMagickColor;
	static get Indigo(): IMagickColor;
	static get Ivory(): IMagickColor;
	static get Khaki(): IMagickColor;
	static get Lavender(): IMagickColor;
	static get LavenderBlush(): IMagickColor;
	static get LawnGreen(): IMagickColor;
	static get LemonChiffon(): IMagickColor;
	static get LightBlue(): IMagickColor;
	static get LightCoral(): IMagickColor;
	static get LightCyan(): IMagickColor;
	static get LightGoldenrodYellow(): IMagickColor;
	static get LightGreen(): IMagickColor;
	static get LightGray(): IMagickColor;
	static get LightPink(): IMagickColor;
	static get LightSalmon(): IMagickColor;
	static get LightSeaGreen(): IMagickColor;
	static get LightSkyBlue(): IMagickColor;
	static get LightSlateGray(): IMagickColor;
	static get LightSteelBlue(): IMagickColor;
	static get LightYellow(): IMagickColor;
	static get Lime(): IMagickColor;
	static get LimeGreen(): IMagickColor;
	static get Linen(): IMagickColor;
	static get Magenta(): IMagickColor;
	static get Maroon(): IMagickColor;
	static get MediumAquamarine(): IMagickColor;
	static get MediumBlue(): IMagickColor;
	static get MediumOrchid(): IMagickColor;
	static get MediumPurple(): IMagickColor;
	static get MediumSeaGreen(): IMagickColor;
	static get MediumSlateBlue(): IMagickColor;
	static get MediumSpringGreen(): IMagickColor;
	static get MediumTurquoise(): IMagickColor;
	static get MediumVioletRed(): IMagickColor;
	static get MidnightBlue(): IMagickColor;
	static get MintCream(): IMagickColor;
	static get MistyRose(): IMagickColor;
	static get Moccasin(): IMagickColor;
	static get NavajoWhite(): IMagickColor;
	static get Navy(): IMagickColor;
	static get OldLace(): IMagickColor;
	static get Olive(): IMagickColor;
	static get OliveDrab(): IMagickColor;
	static get Orange(): IMagickColor;
	static get OrangeRed(): IMagickColor;
	static get Orchid(): IMagickColor;
	static get PaleGoldenrod(): IMagickColor;
	static get PaleGreen(): IMagickColor;
	static get PaleTurquoise(): IMagickColor;
	static get PaleVioletRed(): IMagickColor;
	static get PapayaWhip(): IMagickColor;
	static get PeachPuff(): IMagickColor;
	static get Peru(): IMagickColor;
	static get Pink(): IMagickColor;
	static get Plum(): IMagickColor;
	static get PowderBlue(): IMagickColor;
	static get Purple(): IMagickColor;
	static get RebeccaPurple(): IMagickColor;
	static get Red(): IMagickColor;
	static get RosyBrown(): IMagickColor;
	static get RoyalBlue(): IMagickColor;
	static get SaddleBrown(): IMagickColor;
	static get Salmon(): IMagickColor;
	static get SandyBrown(): IMagickColor;
	static get SeaGreen(): IMagickColor;
	static get SeaShell(): IMagickColor;
	static get Sienna(): IMagickColor;
	static get Silver(): IMagickColor;
	static get SkyBlue(): IMagickColor;
	static get SlateBlue(): IMagickColor;
	static get SlateGray(): IMagickColor;
	static get Snow(): IMagickColor;
	static get SpringGreen(): IMagickColor;
	static get SteelBlue(): IMagickColor;
	static get Tan(): IMagickColor;
	static get Teal(): IMagickColor;
	static get Thistle(): IMagickColor;
	static get Tomato(): IMagickColor;
	static get Turquoise(): IMagickColor;
	static get Violet(): IMagickColor;
	static get Wheat(): IMagickColor;
	static get White(): IMagickColor;
	static get WhiteSmoke(): IMagickColor;
	static get Yellow(): IMagickColor;
	static get YellowGreen(): IMagickColor;
}
export interface IMagickFormatInfo {
	readonly description: string;
	readonly format: MagickFormat;
	readonly supportsMultipleFrames: boolean;
	readonly supportsReading: boolean;
	readonly supportsWriting: boolean;
}
export interface IMagickImageInfo {
	readonly colorSpace: ColorSpace;
	readonly compression: CompressionMethod;
	readonly density: Density;
	readonly format: MagickFormat;
	readonly height: number;
	readonly interlace: Interlace;
	readonly orientation: OrientationType$1;
	readonly quality: number;
	readonly width: number;
	read(array: ByteArray, settings?: MagickReadSettings): void;
}
export declare class MagickImageInfo implements IMagickImageInfo {
	private _colorSpace;
	private _compression;
	private _density;
	private _format;
	private _height;
	private _interlace;
	private _orientation;
	private _quality;
	private _width;
	get colorSpace(): ColorSpace;
	get compression(): CompressionMethod;
	get density(): Density;
	get format(): MagickFormat;
	get height(): number;
	get interlace(): Interlace;
	get orientation(): OrientationType$1;
	get quality(): number;
	get width(): number;
	constructor();
	read(array: ByteArray, settings?: MagickReadSettings): void;
	static create(array: ByteArray, settings?: MagickReadSettings): IMagickImageInfo;
}
export declare class Magick {
	static get delegates(): string;
	static get features(): string;
	static get imageMagickVersion(): string;
	static get supportedFormats(): ReadonlyArray<IMagickFormatInfo>;
	static onLog?: (event: LogEvent) => void;
	static addFont(name: string, data: Uint8Array): void;
	static setRandomSeed: (seed: number) => void;
	static setLogEvents(eventTypes: LogEventTypes): void;
	private static getEventTypeString;
	private static logDelegate;
}
export declare class Quantum {
	static get depth(): number;
	static get max(): number;
}

export {
	AlphaOption$1 as AlphaOption,
	OrientationType$1 as OrientationType,
	ProgressEvent$1 as ProgressEvent,
};
