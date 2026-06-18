import { ImageResponse } from "next/og";

export const alt = "Diego Herrera Chaves — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 80% 12%, rgba(59,130,246,.25), transparent 34%), #09090b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#a1a1aa",
            fontSize: 24,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#34d399",
            }}
          />
          Available for software engineering opportunities
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#60a5fa",
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Backend · Full-Stack
          </div>
          <div
            style={{
              maxWidth: 920,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -4,
            }}
          >
            Diego Herrera Chaves
          </div>
          <div style={{ color: "#a1a1aa", fontSize: 32, marginTop: 24 }}>
            Building reliable software for real business operations.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
