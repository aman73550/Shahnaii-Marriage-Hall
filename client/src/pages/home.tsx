import { LuxuryCursor } from "@/components/luxury-cursor";
import { GoldTicker } from "@/components/gold-ticker";
import { GlassmorphismHeader } from "@/components/glassmorphism-header";
import { ImperialHero } from "@/components/imperial-hero";
import { ExperienceWings } from "@/components/experience-wings";
import { WhyShahnaii } from "@/components/why-shahnaii";
import { SocialProof } from "@/components/social-proof";
import { GallerySection } from "@/components/gallery-section";
import { HumanStory } from "@/components/human-story";
import { ConciergeMap } from "@/components/concierge-map";
import { RoyalTrioNav } from "@/components/royal-trio-nav";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#050505" }}
    >
      <LuxuryCursor />
      <GoldTicker />
      <GlassmorphismHeader />

      <main className="pt-7">
        <ImperialHero />
        <ExperienceWings />
        <WhyShahnaii />
        <SocialProof />
        <GallerySection />
        <HumanStory />
        <ConciergeMap />
      </main>

      <SiteFooter />
      <RoyalTrioNav />
    </div>
  );
}
