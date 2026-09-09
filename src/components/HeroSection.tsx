import Image from "next/image";
import { AppDownloadLink } from "@/components/AppDownloadLink";
import { heroContent } from "@/data/landing";

export function HeroSection() {
  return (
    <section className="hero-section dark-section" id="top">
      <div className="site-shell hero-inner">
        <Image
          src="/images/brand/app-icon-final.png"
          alt="탭샵바 앱 아이콘"
          width={245}
          height={245}
          className="hero-app-icon"
          priority
        />
        <h1>{heroContent.title}</h1>
        <p className="hero-description">{heroContent.description}</p>
        <AppDownloadLink analyticsId="hero_app_download_click" label={heroContent.ctaLabel} />
      </div>
    </section>
  );
}
