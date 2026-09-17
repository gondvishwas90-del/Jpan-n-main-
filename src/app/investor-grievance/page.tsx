import React from "react";
import { Metadata } from "next";
import { GrievanceHero } from "@/components/GrievanceHero";
import { GrievanceIntro } from "@/components/GrievanceIntro";
import { GrievanceSupport } from "@/components/GrievanceSupport";
import { GrievanceForm } from "@/components/GrievanceForm";
import { GrievanceRoadmap } from "@/components/GrievanceRoadmap";
import { GrievanceTracking } from "@/components/GrievanceTracking";
import { GrievanceCTA } from "@/components/GrievanceCTA";

export const metadata: Metadata = {
  title: "Investor Grievance | Support Hub | J Pan Tubular Components Limited",
  description: "Access J Pan Tubular Components Limited's institutional grievance redressal mechanism. Submit and track investor concerns with absolute transparency and commitment to fair resolution.",
};

export default function InvestorGrievancePage() {
  return (
    <main>
      <GrievanceHero />
      <GrievanceIntro />
      <GrievanceSupport />
      <GrievanceForm />
      <GrievanceRoadmap />
      <GrievanceTracking />
      <GrievanceCTA />
    </main>
  );
}


