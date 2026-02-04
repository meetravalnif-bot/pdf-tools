import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG to PDF Converter – Free Online JPG to PDF Tool",
  description:
    "Convert JPG/JPEG to PDF online in seconds. Merge multiple JPG images into one PDF. Fast, privacy-friendly, no signup.",
  alternates: { canonical: "/jpg-to-pdf" },
  openGraph: {
    title: "JPG to PDF Converter – Free Online Tool",
    description: "Convert JPG/JPEG images to a single PDF quickly.",
    url: "/jpg-to-pdf",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
