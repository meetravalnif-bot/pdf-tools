import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/image-to-pdf`, lastModified: new Date() },
    { url: `${base}/jpg-to-pdf`, lastModified: new Date() },
    { url: `${base}/png-to-pdf`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
