import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Otar Pirosmanashvili — .NET Backend Engineer";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#000000",
          color: "#fafafa",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
              color: "#67e8f9",
            fontSize: 24,
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#67e8f9",
            }}
          />
          <span>pirosmani.dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 600,
              letterSpacing: 0,
              lineHeight: 1.05,
            }}
          >
            Otar Pirosmanashvili
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#d4d4d8",
              marginTop: 18,
              lineHeight: 1.3,
            }}
          >
            .NET Backend Engineer / Banking & Fintech
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#71717a",
              marginTop: 24,
              fontFamily: "monospace",
            }}
          >
            Clean Architecture / CQRS / .NET 8 / ASP.NET Core
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#71717a",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <span>EU citizen / Tbilisi / GMT+4</span>
          <span>Open to remote roles</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
