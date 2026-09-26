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
import { Grainient } from "@/components/ui/Grainient";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 1. Top Section: Hero (Pure original background, zero Grainient, protects Navbar) */}
      <Hero />

      {/* 2. Middle Stage: 100% Full-Opacity Grainient Background (Active only for middle sections) */}
      <div className="relative w-full">
        {/* Sticky Viewport-Sized Grainient that un-sticks before Footer */}
        <div className="sticky top-0 h-screen w-full -mb-[100vh] pointer-events-none z-0 overflow-hidden">
          <Grainient
            color1="#78a3f6"
            color2="#3679e5"
            color3="#9cd1dc"
            timeSpeed={0.25}
            colorBalance={0.02}
            warpStrength={1}
            warpFrequency={6.4}
            warpSpeed={0}
            warpAmplitude={5}
            blendAngle={9}
            blendSoftness={0.25}
            rotationAmount={830}
            noiseScale={2}
            grainAmount={0.04}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
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
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
