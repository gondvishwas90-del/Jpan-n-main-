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
