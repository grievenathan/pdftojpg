import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

let workerInitialized = false;

function initWorker() {
  if (workerInitialized) return;
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();
  workerInitialized = true;
}

export interface ConvertedPage {
  pageNumber: number;
  blob: Blob;
  width: number;
  height: number;
}

export async function convertPdfToJpgs(
  file: File,
  quality: number = 0.92,
  scale: number = 2,
  onProgress?: (done: number, total: number) => void,
): Promise<ConvertedPage[]> {
  initWorker();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const totalPages = pdf.numPages;
  const results: ConvertedPage[] = [];

  for (let i = 1; i <= totalPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({ canvasContext: ctx, viewport }).promise;

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("Canvas toBlob failed"))),
        "image/jpeg",
        quality,
      );
    });

    results.push({
      pageNumber: i,
      blob,
      width: viewport.width,
      height: viewport.height,
    });

    onProgress?.(i, totalPages);
  }

  return results;
}

export function getJpgFilename(pdfName: string, pageNumber: number, totalPages: number): string {
  const base = pdfName.replace(/\.pdf$/i, "");
  if (totalPages === 1) return `${base}.jpg`;
  return `${base}-page-${pageNumber}.jpg`;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
