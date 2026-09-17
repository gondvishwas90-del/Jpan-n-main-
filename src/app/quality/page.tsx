import { QualityHero } from "@/components/QualityHero";
import { QualityCommitment } from "@/components/QualityCommitment";
import { QualityCertifications } from "@/components/QualityCertifications";
import { QualityProcess } from "@/components/QualityProcess";
import { TestingFacilities } from "@/components/TestingFacilities";
import { QualityCompliance } from "@/components/QualityCompliance";
import { QualityImprovement } from "@/components/QualityImprovement";
import { QualityTrust } from "@/components/QualityTrust";
import { Achievements } from "@/components/Achievements";

export const metadata = {
  title: "Certifications & Quality | J Pan Tubular Components Limited",
  description: "Explore the rigorous quality standards and international certifications that define J Pan Tubular Components Limited's manufacturing excellence.",
};

export default function QualityPage() {
  return (
    <main className="overflow-hidden">
      <div className="animate-in fade-in duration-1000">
        <QualityHero />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <QualityCommitment />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <QualityCertifications />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <QualityProcess />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <TestingFacilities />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <Achievements />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <QualityCompliance />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
        <QualityImprovement />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800 fill-mode-both">
        <QualityTrust />
      </div>
    </main>
  );
}
