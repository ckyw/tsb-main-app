import Image from "next/image";
import { membershipContent } from "@/data/landing";

export function MembershipSection() {
  return (
    <section className="light-section membership-section" id="membership">
      <div className="site-shell membership-layout">
        <div className="membership-copy">
          <p className="eyebrow eyebrow--dark">TAPSHOPBAR MEMBERSHIP</p>
          <h2 className="section-heading">{membershipContent.title}</h2>
          <p className="membership-description">{membershipContent.description}</p>
          <dl className="benefit-list">
            {membershipContent.benefits.map((benefit, index) => (
              <div className="benefit-row" key={`${benefit.label}-${index}`}>
                <dt className={`benefit-label benefit-label--${benefit.tone}`}>{benefit.label}</dt>
                <dd>{benefit.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="sketch-frame membership-art">
          <Image
            src={membershipContent.image}
            alt={membershipContent.imageAlt}
            width={620}
            height={455}
            sizes="(max-width: 899px) 84vw, 46vw"
          />
        </div>
      </div>
    </section>
  );
}
