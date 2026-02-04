import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF Tools",
  description: "Free online PDF tools",
};

function Header() {
  return (
    <header
      style={{
        background: "var(--black)",
        color: "white",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg,var(--orange),var(--orange-dark))",
              display: "inline-block",
            }}
          />
          <span style={{ fontWeight: 800, letterSpacing: "-0.3px" }}>PDF Tools</span>
        </Link>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/image-to-pdf" style={{ opacity: 0.95 }}>Image to PDF</Link>
          <Link href="/jpg-to-pdf" style={{ opacity: 0.7 }}>JPG to PDF</Link>
          <Link href="/png-to-pdf" style={{ opacity: 0.7 }}>PNG to PDF</Link>
        </nav>

        <Link
          href="/image-to-pdf"
          style={{
            background: "linear-gradient(135deg,var(--orange),var(--orange-dark))",
            color: "white",
            padding: "10px 14px",
            borderRadius: 12,
            fontWeight: 800,
            boxShadow: "0 10px 24px rgba(255,122,24,0.25)",
          }}
        >
          Convert Now
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ marginTop: 40, background: "white", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900, color: "var(--black)" }}>PDF Tools</div>
            <div style={{ color: "var(--muted)", marginTop: 6, fontSize: 13 }}>
              Free tools to convert and manage PDFs. Privacy-friendly.
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 14 }}>
            <Link href="/image-to-pdf">Image to PDF</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 16 }}>
          © {new Date().getFullYear()} PDF Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
