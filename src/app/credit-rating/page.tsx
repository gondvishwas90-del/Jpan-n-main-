import React from "react";
import { Metadata } from "next";
import { RatingHero } from "@/components/RatingHero";
import { RatingIntro } from "@/components/RatingIntro";
import { RatingStability } from "@/components/RatingStability";
import { RatingAlpha } from "@/components/RatingAlpha";
import { RatingArchive } from "@/components/RatingArchive";
import { RatingAgencies } from "@/components/RatingAgencies";
import { RatingCTA } from "@/components/RatingCTA";
import { GenericInvestorFilter } from "@/components/GenericInvestorComponents";

export const metadata: Metadata = {
  title: "Credit Rating | Financial Strength | J Pan Tubular Components Limited",
  description: "Explore J Pan Tubular Components Limited's creditworthiness and financial stability. Access independent credit rating evaluations and historical performance data.",
};

export default function CreditRatingPage() {
  return (
    <main>
      <RatingHero />
      <RatingIntro />
      <RatingStability />
      <RatingAlpha />
      <GenericInvestorFilter />
      <RatingArchive />
      <RatingAgencies />
      <RatingCTA />
    </main>
  );
}

