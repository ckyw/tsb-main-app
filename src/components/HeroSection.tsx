import { AppDownloadLink } from "@/components/AppDownloadLink";
import { BrandMark } from "@/components/BrandMark";
import { heroContent } from "@/data/landing";

export function HeroSection() {
  return (
    <section className="hero-section dark-section" id="top">
      <div className="site-shell hero-inner">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <BrandMark inverted compact />
        <h1>{heroContent.title}</h1>
        <p className="hero-description">{heroContent.description}</p>
        <AppDownloadLink analyticsId="hero_app_download_click" label={heroContent.ctaLabel} />
      </div>
    </section>
  );
}
