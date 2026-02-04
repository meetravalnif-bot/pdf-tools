"use client";

import React, { useEffect, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";
import Sortable from "sortablejs";
import styles from "../image-to-pdf/ui.module.css";
import { getFaqSchema } from "../image-to-pdf/schema";

type ImgItem = { id: string; file: File; url: string };

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function ImageToPdfTool({
  showSchema = true,
  title = "Image to PDF Converter",
  subtitle = "Upload JPG/PNG, reorder, and download a PDF.",
}: {
  showSchema?: boolean;
  title?: string;
  subtitle?: string;
}) {
  const [items, setItems] = useState<ImgItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [pageMode, setPageMode] = useState<"fit" | "a4">("fit");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const sortable = Sortable.create(listRef.current, {
      animation: 150,
      onEnd: (evt) => {
        if (evt.oldIndex == null || evt.newIndex == null) return;
        setItems((prev) => {
          const next = [...prev];
          const [moved] = next.splice(evt.oldIndex!, 1);
          next.splice(evt.newIndex!, 0, moved);
          return next;
        });
      },
    });
    return () => sortable.destroy();
  }, []);

  const onPick = (files: FileList | null) => {
    if (!files?.length) return;
    const picked: ImgItem[] = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...picked]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const x = prev.find((p) => p.id === id);
      if (x) URL.revokeObjectURL(x.url);
      return prev.filter((p) => p.id !== id);
    });
  };

  const clearAll = () => {
    items.forEach((x) => URL.revokeObjectURL(x.url));
    setItems([]);
  };

  const convert = async () => {
    if (items.length === 0) return;
    setBusy(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const A4 = { w: 595.28, h: 841.89 };

      for (const it of items) {
        const bytes = await it.file.arrayBuffer();
        const isPng = it.file.type === "image/png";
        const img = isPng ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);

        if (pageMode === "a4") {
          const page = pdfDoc.addPage([A4.w, A4.h]);
          const { width, height } = img.scaleToFit(A4.w - 40, A4.h - 40);
          page.drawImage(img, {
            x: (A4.w - width) / 2,
            y: (A4.h - height) / 2,
            width,
            height,
          });
        } else {
          const page = pdfDoc.addPage([img.width, img.height]);
          page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
        }
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes.buffer.slice(pdfBytes.byteOffset, pdfBytes.byteOffset + pdfBytes.byteLength)], {
  type: "application/pdf",
});


      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "images-to-pdf.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className={styles.wrap}>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
        />
      )}

      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.h1}>{title}</h1>
<p className={styles.sub}>{subtitle}</p>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>Free</span>
            <span className={styles.badge}>Orange + Black</span>
            <span className={styles.badge}>No Upload</span>
          </div>
        </div>

        <div className={styles.controls}>
          <label className={styles.uploader}>
            + Add Images
            <input type="file" accept="image/*" multiple hidden onChange={(e) => onPick(e.target.files)} />
          </label>

          <select className={styles.select} value={pageMode} onChange={(e) => setPageMode(e.target.value as any)}>
            <option value="fit">Fit to Image</option>
            <option value="a4">A4 Pages</option>
          </select>

          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={convert} disabled={items.length === 0 || busy}>
            {busy ? "Converting..." : "Convert to PDF"}
          </button>

          <button className={styles.btn} onClick={clearAll} disabled={items.length === 0 || busy}>
            Clear
          </button>
        </div>

        <div ref={listRef} className={styles.grid}>
          {items.map((it, idx) => (
            <div key={it.id} className={styles.thumb}>
              <div className={styles.thumbTop}>#{idx + 1}</div>
              <img src={it.url} className={styles.img} alt={`img ${idx + 1}`} />
              <div className={styles.file}>{it.file.name}</div>
              <button className={styles.smallBtn} onClick={() => removeItem(it.id)} disabled={busy}>
                Remove
              </button>
            </div>
          ))}
        </div>

        {items.length === 0 && <div className={styles.notice}>No images added yet.</div>}
      </div>

      <section className={styles.content}>
        <h2>Convert Image to PDF Online</h2>
        <p>
          Merge multiple JPG/PNG images into a single PDF document quickly. Works in your browser, so your files stay on your device.
        </p>
         <h3>How to use</h3>
      <ol>
        <li>Click <b>+ Add Images</b> and select JPG/PNG files.</li>
        <li>Drag and drop thumbnails to arrange the page order.</li>
        <li>Choose <b>Fit to Image</b> or <b>A4 Pages</b>.</li>
        <li>Click <b>Convert to PDF</b> to download.</li>
      </ol>
      <h3>FAQs</h3>
      <p>
        <b>Are my images uploaded?</b> No. Conversion runs in your browser, so
        images stay on your device.
      </p>
      <p>
        <b>Can I merge multiple images into one PDF?</b> Yes, upload multiple
        images and convert.
      </p>
      </section>
    </main>
  );
}
