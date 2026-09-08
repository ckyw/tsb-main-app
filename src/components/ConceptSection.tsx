import Image from "next/image";
import { conceptContent } from "@/data/landing";

export function ConceptSection() {
  return (
    <section className="light-section concept-section" id="concept">
      <div className="site-shell">
        <h2 className="section-heading">{conceptContent.title}</h2>
        <div className="concept-grid">
          {conceptContent.items.map((item) => (
            <article className="concept-card" key={item.key}>
              <div className="sketch-frame">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={520}
                  height={510}
                  sizes="(max-width: 767px) 84vw, (max-width: 1199px) 42vw, 360px"
                />
              </div>
              <div className="concept-copy">
                <h3>{item.title}</h3>
                <p className="concept-tagline">{item.tagline}</p>
                <div className="concept-description">
                  {item.description.map((line) => <p key={line}>{line}</p>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
