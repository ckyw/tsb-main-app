type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverted = false, compact = false }: BrandMarkProps) {
  return (
    <span
      aria-label="TapShopBar"
      className={`brand-mark ${inverted ? "brand-mark--inverted" : ""} ${compact ? "brand-mark--compact" : ""}`}
    >
      {Array.from("TSB").map((letter) => (
        <span key={letter}>{letter}</span>
      ))}
    </span>
  );
}
