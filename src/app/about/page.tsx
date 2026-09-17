import { AboutHero } from "@/components/AboutHero";
import { OurStory } from "@/components/OurStory";
import { CompanyOverview } from "@/components/CompanyOverview";
import { VisionMission } from "@/components/VisionMission";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Leadership } from "@/components/Leadership";
import { AboutManufacturing } from "@/components/AboutManufacturing";
import { AboutQuality } from "@/components/AboutQuality";
import { AboutPresence } from "@/components/AboutPresence";
import { AboutWhyChooseUs } from "@/components/AboutWhyChooseUs";
import { AboutCTA } from "@/components/AboutCTA";

export const metadata = {
  title: "About Us | J Pan Tubular Components Limited",
  description: "Learn about the heritage, vision, and manufacturing excellence of J Pan Tubular Components Limited. Precision engineering since 1998.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <div className="animate-in fade-in duration-1000">
        <AboutHero />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <OurStory />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <CompanyOverview />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <VisionMission />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <JourneyTimeline />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <Leadership />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <AboutManufacturing />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
        <AboutQuality />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800 fill-mode-both">
        <AboutPresence />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900 fill-mode-both">
        <AboutWhyChooseUs />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
        <AboutCTA />
      </div>
    </main>
  );
}
