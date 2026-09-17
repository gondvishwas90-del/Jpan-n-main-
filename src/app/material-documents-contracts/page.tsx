import React from "react";
import { Metadata } from "next";
import { MaterialHero } from "@/components/MaterialHero";
import { MaterialIntro } from "@/components/MaterialIntro";
import { MaterialCompliance } from "@/components/MaterialCompliance";
import { MaterialHighlights } from "@/components/MaterialHighlights";
import { MaterialListing } from "@/components/MaterialListing";
import { MaterialCTA } from "@/components/MaterialCTA";

export const metadata: Metadata = {
  title: "Material Documents & Contracts | Statutory Disclosures | J Pan Tubular Components Limited",
  description: "Access J Pan Tubular Components Limited's authoritative repository of material documents, corporate agreements, and board-approved contracts. Maintained per SEBI LODR mandates.",
};

export default function MaterialDocumentsPage() {
  return (
    <main>
      <MaterialHero />
      <MaterialIntro />
      <MaterialCompliance />
      <MaterialHighlights />
      <MaterialListing />
      <MaterialCTA />
    </main>
  );
}

