import { ImageResponse } from "next/og";

export const alt = "TapShopBar - Find Your Wine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#000",
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 84px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 0, fontSize: 44, fontWeight: 800 }}>
        {Array.from("TSB").map((letter) => (
          <span
            key={letter}
            style={{
              width: 88,
              height: 88,
              marginRight: -6,
              border: "6px solid #fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >{letter}</span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1 }}>Find Your Wine.</div>
        <div style={{ marginTop: 28, fontSize: 34 }}>와인을 더 쉽게, 취향은 더 확실하게.</div>
      </div>
      <div style={{ width: 260, height: 18, borderRadius: 20, background: "#ffc62e" }} />
    </div>,
    size,
  );
}
