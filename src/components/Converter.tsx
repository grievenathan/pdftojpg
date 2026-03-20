"use client";

import { useState, useCallback, useRef } from "react";
import { track } from "@vercel/analytics";
import { convertPdfToJpgs, getJpgFilename } from "@/lib/convert";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import FileCard, { FileItem } from "./FileCard";

const MAX_FILES = 10;
const MAX_FILE_SIZE = 50 * 1024 * 1024;

export default function Converter() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const incoming = Array.from(newFiles).filter(
        (f) => /\.pdf$/i.test(f.name) && f.size <= MAX_FILE_SIZE,
      );

      setFiles((prev) => {
        const remaining = MAX_FILES - prev.length;
        const toAdd = incoming.slice(0, remaining);

        if (toAdd.length > 0) {
          track("upload", { fileCount: toAdd.length });
        }

        return [
          ...prev,
          ...toAdd.map((file) => ({
            id: crypto.randomUUID(),
            file,
            status: "pending" as const,
          })),
        ];
      });
    },
    [],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const convertOne = async (item: FileItem): Promise<FileItem> => {
    try {
      const pages = await convertPdfToJpgs(item.file, 0.92, 2, (done, total) => {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === item.id ? { ...f, progress: { done, total } } : f,
          ),
        );
      });
      const totalSize = pages.reduce((sum, p) => sum + p.blob.size, 0);
      return { ...item, status: "done", pages, totalSize };
    } catch {
      return { ...item, status: "error", error: "Conversion failed" };
    }
  };

  const convertAll = async () => {
    setIsConverting(true);
    const pending = files.filter((f) => f.status === "pending");

    let converted = 0;
    for (const item of pending) {
      setFiles((prev) =>
        prev.map((f) => (f.id === item.id ? { ...f, status: "converting" } : f)),
      );
      const result = await convertOne(item);
      if (result.status === "done") converted++;
      setFiles((prev) =>
        prev.map((f) => (f.id === result.id ? result : f)),
      );
    }
    if (converted > 0) track("convert", { fileCount: converted });
    setIsConverting(false);
  };

  const downloadOne = async (item: FileItem) => {
    if (!item.pages || item.pages.length === 0) return;
    track("download", { type: "single" });

    if (item.pages.length === 1) {
      saveAs(item.pages[0].blob, getJpgFilename(item.file.name, 1, 1));
      return;
    }

    const zip = new JSZip();
    for (const page of item.pages) {
      zip.file(
        getJpgFilename(item.file.name, page.pageNumber, item.pages.length),
        page.blob,
      );
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, item.file.name.replace(/\.pdf$/i, "-images.zip"));
  };

  const downloadAll = async () => {
    const doneFiles = files.filter((f) => f.status === "done" && f.pages);
    if (doneFiles.length === 0) return;

    track("download", { type: "all", fileCount: doneFiles.length });
    const zip = new JSZip();

    for (const item of doneFiles) {
      if (!item.pages) continue;
      for (const page of item.pages) {
        zip.file(
          getJpgFilename(item.file.name, page.pageNumber, item.pages.length),
          page.blob,
        );
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "pdf-to-jpg-images.zip");
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAll = () => {
    setFiles([]);
  };

  const pendingCount = files.filter((f) => f.status === "pending").length;
  const doneCount = files.filter((f) => f.status === "done").length;
  const hasFiles = files.length > 0;
  const totalImages = files
    .filter((f) => f.status === "done" && f.pages)
    .reduce((sum, f) => sum + (f.pages?.length ?? 0), 0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-xl border border-border bg-surface">
        {/* Drop zone */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`
            cursor-pointer transition-all m-4 rounded-xl border-2 border-dashed
            ${isDragging ? "border-gray-400 bg-gray-50" : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"}
            ${hasFiles ? "p-6" : "p-10 sm:p-14"}
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="rounded-lg border border-border bg-white p-3">
              <svg
                className="h-5 w-5 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {isDragging ? "Drop your PDFs here" : "Drop PDF files here, or click to browse"}
              </p>
              <p className="mt-1 text-xs text-muted">
                Up to {MAX_FILES} files &middot; 50MB max per file
              </p>
            </div>
          </div>
        </div>

        {/* File list */}
        {hasFiles && (
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-muted">
                {files.length} {files.length === 1 ? "file" : "files"} &middot;{" "}
                {doneCount} converted{totalImages > 0 && ` (${totalImages} images)`}
              </p>
              <button
                onClick={clearAll}
                className="text-xs text-muted hover:text-gray-900 transition-colors"
              >
                Clear all
              </button>
            </div>

            <div className="max-h-[360px] space-y-1 overflow-y-auto">
              {files.map((item) => (
                <FileCard
                  key={item.id}
                  item={item}
                  onDownload={() => downloadOne(item)}
                  onRemove={() => removeFile(item.id)}
                />
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-4 flex gap-2">
              {pendingCount > 0 && (
                <button
                  onClick={convertAll}
                  disabled={isConverting}
                  className="flex-1 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
                >
                  {isConverting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Spinner /> Converting...
                    </span>
                  ) : (
                    `Convert all (${pendingCount})`
                  )}
                </button>
              )}

              {doneCount > 1 && (
                <button
                  onClick={downloadAll}
                  className="flex-1 rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-surface-hover"
                >
                  Download all as ZIP
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
