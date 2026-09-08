import { BrandMark } from "@/components/BrandMark";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="logo-link" href="#top" aria-label="TapShopBar 홈">
          <BrandMark />
        </a>
        <div className="header-actions" aria-hidden="true">
          <span className="search-symbol" />
          <span className="menu-symbol"><i /><i /><i /></span>
        </div>
      </div>
    </header>
  );
}
