import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to PDF Converter – Free Online PNG to PDF Tool",
  description:
    "Convert PNG to PDF online in seconds. Merge multiple PNG images into one PDF. Fast, privacy-friendly, no signup.",
  alternates: { canonical: "/png-to-pdf" },
  openGraph: {
    title: "PNG to PDF Converter – Free Online Tool",
    description: "Convert PNG images to a single PDF quickly.",
    url: "/png-to-pdf",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
