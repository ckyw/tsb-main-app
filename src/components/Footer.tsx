import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <BrandMark inverted />
        <p>© {new Date().getFullYear()} TapShopBar. All rights reserved.</p>
      </div>
    </footer>
  );
}
