import Image from "next/image";
import { appFeaturesContent } from "@/data/landing";

export function AppFeaturesSection() {
  return (
    <section className="dark-section app-features" id="app-features">
      <div className="site-shell">
        <h2 className="section-heading section-heading--light">{appFeaturesContent.title}</h2>
        <div className="app-feature-list">
          {appFeaturesContent.items.map((feature, index) => (
            <article className="app-feature" key={feature.title}>
              <div className="phone-stage">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 767px) 84vw, (max-width: 1199px) 46vw, 520px"
                  className="phone-image"
                  priority={index === 0}
                />
              </div>
              <div className="app-feature-copy">
                <span className="feature-number" aria-hidden="true">0{index + 1}</span>
                <h3>{feature.title}</h3>
                {feature.description.map((line) => <p key={line}>{line}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
