import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Paul Apostol, antrenor personal în Timișoara";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fontul implicit din next/og nu are ș și ț, așa că încărcăm Barlow Condensed (licență OFL) din app/fonts.
export default async function OpengraphImage() {
  const [extraBoldItalic, bold, logo] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/BarlowCondensed-ExtraBoldItalic.ttf")),
    readFile(join(process.cwd(), "app/fonts/BarlowCondensed-Bold.ttf")),
    readFile(join(process.cwd(), "public/paul_apostol_logo_white.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #111111 0%, #050505 60%, #2a0707 100%)",
          color: "#ffffff",
          fontFamily: "Barlow Condensed",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, background: "#dc2626" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 6, textTransform: "uppercase", color: "#ef4444" }}>
            paulapostol.ro
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 168, fontWeight: 800, fontStyle: "italic", lineHeight: 0.9, textTransform: "uppercase" }}>
            Paul Apostol
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 76,
              fontWeight: 800,
              fontStyle: "italic",
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#ef4444",
            }}
          >
            Antrenor personal în Timișoara
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#d4d4d8", letterSpacing: 1 }}>
          Antrenamente 1 la 1 și plan alimentar, din 2019
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow Condensed", data: extraBoldItalic, weight: 800, style: "italic" },
        { name: "Barlow Condensed", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
