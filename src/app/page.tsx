import { Hero } from "@/components/home/Hero";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { Industries } from "@/components/home/Industries";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Infrastructure } from "@/components/home/Infrastructure";
import { Certifications } from "@/components/home/Certifications";
import { Testimonials } from "@/components/home/Testimonials";
import { CTAStrip } from "@/components/home/CTAStrip";
import { ContactPreview } from "@/components/home/ContactPreview";
import { ContactMap } from "@/components/shared/ContactMap";
import { RelayWaveBackground } from "@/components/ui/RelayWaveBackground";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 1. Top Section: Hero (Pure original background, zero wave, protects Navbar) */}
      <Hero />

      {/* 2. Middle Stage: Exact Relay 3D Light Stream & Wave Background (Active for all sections after Hero) */}
      <div className="relative w-full">
        {/* Sticky Viewport-Sized Relay Wave Background that un-sticks before Footer */}
        <div className="sticky top-0 h-screen w-full -mb-[100vh] pointer-events-none z-0 overflow-hidden">
          <RelayWaveBackground speed={1.0} />
        </div>

        <div className="relative z-10">
          <AboutSnapshot />
          <Industries />
          <ProductShowcase />
          <WhyChooseUs />
          <Infrastructure />
          <Certifications />
          <Testimonials />
          <CTAStrip />
          <ContactPreview />
        </div>
      </div>

      {/* 3. Globe Section (<ContactMap />) - 100% Protected from any canvas or wave effect */}
      <div className="relative w-full z-10">
        <ContactMap />
      </div>
    </div>
  );
}
