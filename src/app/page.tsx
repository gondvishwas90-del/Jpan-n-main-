import { Hero } from "@/components/Hero";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { Industries } from "@/components/Industries";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Infrastructure } from "@/components/Infrastructure";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { CTAStrip } from "@/components/CTAStrip";
import { ContactPreview } from "@/components/ContactPreview";
import { ContactMap } from "@/components/ContactMap";

export default function Home() {
  return (
    <>
      <Hero />
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
    </>
  );
}
