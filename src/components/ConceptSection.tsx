import { conceptContent } from "@/data/landing";
import { LottieIllustration } from "@/components/LottieIllustration";

export function ConceptSection() {
  return (
    <section className="light-section concept-section" id="concept">
      <div className="site-shell">
        <h2 className="section-heading">{conceptContent.title}</h2>
        <div className="concept-grid">
          {conceptContent.items.map((item) => (
            <article className="concept-card" key={item.key}>
              <div className="sketch-frame">
                <LottieIllustration name={item.key} label={item.animationLabel} />
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
