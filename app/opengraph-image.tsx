import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";
export const alt = "Muhammad Taha — AI & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const portrait = await readFile(
    join(process.cwd(), "public", "profile.jpeg"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#F4F1EA",
        color: "#1E1A14",
        padding: 72,
        alignItems: "center",
        gap: 60,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 3,
            color: "#A34C32",
            marginBottom: 24,
          }}
        >
          BOLTTAHA / PORTFOLIO
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.05,
            fontFamily: "serif",
            marginBottom: 28,
          }}
        >
          Muhammad Taha
        </div>
        <div style={{ fontSize: 32, color: "#6B6455", marginBottom: 24 }}>
          {site.role}
        </div>
        <div style={{ fontSize: 23, color: "#6B6455" }}>
          AI applications · Backend services · Data pipelines
        </div>
        <div style={{ fontSize: 22, marginTop: 44 }}>muhammadtaha.app</div>
      </div>
      {/* next/og requires a native image element with embedded image bytes. */}
      <img
        src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
        alt=""
        width={260}
        height={260}
        style={{ borderRadius: 130, border: "2px solid #CFC8BA" }}
      />
    </div>,
    size,
  );
}
