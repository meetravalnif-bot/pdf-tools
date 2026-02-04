import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to PDF Converter – Free JPG/PNG to PDF Online",
  description:
    "Convert images to PDF in seconds. Merge multiple JPG/PNG into one PDF. Fast, privacy-friendly, works in your browser.",
  alternates: { canonical: "/image-to-pdf" },
  openGraph: {
    title: "Image to PDF Converter – Free Online Tool",
    description:
      "Merge multiple images into a single PDF. Works fast in your browser.",
    url: "/image-to-pdf",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
