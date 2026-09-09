"use client";

import dynamic from "next/dynamic";
import tapAnimation from "../../lottie/animation-onboarding-tap.json";
import shopAnimation from "../../lottie/animation-onboarding-shop.json";
import barAnimation from "../../lottie/animation-onboarding-bar.json";

const Lottie = dynamic(() => import("lottie-react").then((module) => module.Lottie), {
  ssr: false,
});

const animations = {
  tap: tapAnimation,
  shop: shopAnimation,
  bar: barAnimation,
} as const;

type LottieIllustrationProps = {
  name: keyof typeof animations;
  label: string;
};

export function LottieIllustration({ name, label }: LottieIllustrationProps) {
  return (
    <div className="lottie-illustration" role="img" aria-label={label}>
      <Lottie
        src={animations[name]}
        autoplay
        loop
        aria-hidden="true"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
