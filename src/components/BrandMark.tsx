import Image from "next/image";

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
      <Image src="/images/brand/tsb-mark.webp" alt="" fill sizes="330px" priority />
    </span>
  );
}
