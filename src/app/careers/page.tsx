import React from "react";
import { Metadata } from "next";
import { CareersHero } from "@/components/CareersHero";
import { CareersIntro } from "@/components/CareersIntro";
import { CareersValues } from "@/components/CareersValues";
import { CareersCulture } from "@/components/CareersCulture";
import { CareersBenefits } from "@/components/CareersBenefits";
import { CareersRoadmap } from "@/components/CareersRoadmap";
import { CareersOpenings } from "@/components/CareersOpenings";
import { CareersCTA } from "@/components/CareersCTA";

export const metadata: Metadata = {
  title: "Careers | Join J Pan Tubular Components Limited | Shape the Industrial Future",
  description: "Explore career opportunities at J Pan Tubular Components Limited. Build your professional legacy with a leader in precision manufacturing, innovation, and sustainable growth.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareersIntro />
      <CareersValues />
      <CareersCulture />
      <CareersBenefits />
      <CareersRoadmap />
      <CareersOpenings />
      <CareersCTA />
    </main>
  );
}


