import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          border: "1px solid rgba(103,232,249,0.4)",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: 14,
            color: "#67e8f9",
            letterSpacing: "-1px",
          }}
        >
          OP
        </span>
      </div>
    ),
    { ...size }
  );
}
