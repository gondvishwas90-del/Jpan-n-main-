import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { VisionMission } from "@/components/about/VisionMission";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { Leadership } from "@/components/about/Leadership";
import { AboutManufacturing } from "@/components/about/AboutManufacturing";
import { AboutQuality } from "@/components/about/AboutQuality";
import { AboutPresence } from "@/components/about/AboutPresence";
import { AboutWhyChooseUs } from "@/components/about/AboutWhyChooseUs";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | J Pan Tubular Components Limited",
  description: "Learn about the heritage, vision, and manufacturing excellence of J Pan Tubular Components Limited. Precision engineering since 1998.",
};

export default function AboutPage() {
  return (
    <div className="overflow-x-clip">
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
    </div>
  );
}
