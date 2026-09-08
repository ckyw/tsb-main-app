import Image from "next/image";
import { AppDownloadLink } from "@/components/AppDownloadLink";
import { finalCtaContent } from "@/data/landing";

export function CTASection() {
  return (
    <section className="dark-section final-cta" id="download">
      <div className="site-shell final-cta-inner">
        <Image
          src={finalCtaContent.image}
          alt={finalCtaContent.imageAlt}
          width={540}
          height={430}
          sizes="(max-width: 767px) 70vw, 420px"
          className="download-art"
        />
        <h2>{finalCtaContent.title}</h2>
        <p>{finalCtaContent.description}</p>
        <div className="cta-panel">
          <span>{finalCtaContent.panelText}</span>
          <AppDownloadLink analyticsId="bottom_app_download_click" label={finalCtaContent.ctaLabel} />
        </div>
      </div>
    </section>
  );
}
