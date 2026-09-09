import Image from "next/image";
import { campaignConfig } from "@/config/site";

export function CampaignSection() {
  return (
    <section className="campaign-section" id="campaign">
      <div className="site-shell campaign-layout">
        <div className="campaign-copy">
          <h2>{campaignConfig.eyebrow}</h2>
          <p className="campaign-benefit"><strong>{campaignConfig.period}</strong>, {campaignConfig.benefit}</p>
          <p>{campaignConfig.message}</p>
        </div>
        <Image
          src="/images/campaign/launch-event.webp"
          alt="앱 출시 30% 할인 이벤트 손그림"
          width={560}
          height={494}
          sizes="(max-width: 599px) 108px, (max-width: 980px) 320px, 350px"
          className="campaign-art"
        />
      </div>
    </section>
  );
}
