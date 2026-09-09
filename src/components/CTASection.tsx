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
        <div className="store-badges" aria-label="앱 다운로드 스토어">
          <Image
            src="/images/stores/google-play.png"
            alt="Google Play에서 다운로드"
            width={530}
            height={163}
            sizes="(max-width: 599px) 112px, (max-width: 980px) 170px, 240px"
            className="store-badge"
          />
          <Image
            src="/images/stores/app-store.png"
            alt="App Store에서 다운로드"
            width={530}
            height={163}
            sizes="(max-width: 599px) 112px, (max-width: 980px) 170px, 240px"
            className="store-badge"
          />
        </div>
        <div className="cta-panel">
          <span>{finalCtaContent.panelText}</span>
          <AppDownloadLink analyticsId="bottom_app_download_click" label={finalCtaContent.ctaLabel} />
        </div>
      </div>
    </section>
  );
}
