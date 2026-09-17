"use client";

import React from "react";
import { 
  GenericInvestorHero, 
  GenericInvestorFilter, 
  GenericInvestorListing 
} from "@/components/GenericInvestorComponents";
import { StatementOfDeviationsIntro } from "@/components/StatementOfDeviationsIntro";
import { StatementOfDeviationsNote } from "@/components/StatementOfDeviationsNote";
import { StatementOfDeviationsCTA } from "@/components/StatementOfDeviationsCTA";

const statements = [
  {
    id: 1,
    period: "Q3 FY 2024–25",
    title: "Statement of Deviations – Q3 2025",
    date: "Jan 18, 2025",
    status: "Latest",
    type: "Fund Disclosure"
  },
  {
    id: 2,
    period: "Q2 FY 2024–25",
    title: "Statement of Deviations – Q2 2025",
    date: "Oct 28, 2024",
    status: "Verified",
    type: "Fund Disclosure"
  },
  {
    id: 3,
    period: "Q1 FY 2024–25",
    title: "Statement of Deviations – Q1 2025",
    date: "July 24, 2024",
    status: "Verified",
    type: "Fund Disclosure"
  }
];

export default function StatementOfDeviationsPage() {
  return (
    <main className="overflow-hidden">
      <GenericInvestorHero title="Statement of Deviations" />
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <StatementOfDeviationsIntro />
      </div>

      <GenericInvestorFilter />

      <GenericInvestorListing 
        items={statements} 
        sectionTitle="Periodic Archive"
        category="Statement of Deviation"
      />

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <StatementOfDeviationsNote />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <StatementOfDeviationsCTA />
      </div>
    </main>
  );
}

