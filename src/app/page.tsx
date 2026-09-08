import { AppFeaturesSection } from "@/components/AppFeaturesSection";
import { CampaignSection } from "@/components/CampaignSection";
import { ConceptSection } from "@/components/ConceptSection";
import { CTASection } from "@/components/CTASection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MembershipSection } from "@/components/MembershipSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <AppFeaturesSection />
        <MembershipSection />
        <CampaignSection />
        <CTASection />
      </main>
    </>
  );
}
