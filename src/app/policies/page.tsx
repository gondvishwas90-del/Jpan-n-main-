import React from "react";
import { Metadata } from "next";
import { PoliciesHero } from "@/components/PoliciesHero";
import { PoliciesIntro } from "@/components/PoliciesIntro";
import { PoliciesFilter } from "@/components/PoliciesFilter";
import { PoliciesListing } from "@/components/PoliciesListing";
import { PoliciesHighlights } from "@/components/PoliciesHighlights";
import { PoliciesCTA } from "@/components/PoliciesCTA";

export const metadata: Metadata = {
  title: "Corporate Policies | Governance & Ethics | J Pan Tubular Components Limited",
  description: "Explore J Pan Tubular Components Limited's comprehensive corporate policies, governance framework, and ethical standards. Access our statutory and internal guidelines.",
};

export default function PoliciesPage() {
  return (
    <main>
      <PoliciesHero />
      <PoliciesIntro />
      <PoliciesFilter />
      <PoliciesHighlights />
      <PoliciesListing />
      <PoliciesCTA />
    </main>
  );
}


