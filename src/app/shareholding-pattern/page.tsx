"use client";

import React from "react";
import { 
  GenericInvestorHero, 
  GenericInvestorFilter, 
  GenericInvestorListing 
} from "@/components/GenericInvestorComponents";
import { ShareholdingIntro } from "@/components/ShareholdingIntro";
import { ShareholdingSummary } from "@/components/ShareholdingSummary";
import { ShareholdingNote } from "@/components/ShareholdingNote";
import { ShareholdingCTA } from "@/components/ShareholdingCTA";

const reports = [
  {
    id: 1,
    title: "Shareholding Pattern – Q3 2025",
    period: "Q3 FY 2024-25",
    date: "Jan 15, 2025",
    status: "Latest",
    type: "Quarterly Filing"
  },
  {
    id: 2,
    title: "Shareholding Pattern – Q2 2025",
    period: "Q2 FY 2024-25",
    date: "Oct 18, 2024",
    status: "Audited",
    type: "Quarterly Filing"
  },
  {
    id: 3,
    title: "Shareholding Pattern – Q1 2025",
    period: "Q1 FY 2024-25",
    date: "Jul 21, 2024",
    status: "Audited",
    type: "Quarterly Filing"
  },
  {
    id: 4,
    title: "Shareholding Pattern – Q4 2024",
    period: "Q4 FY 2023-24",
    date: "Apr 25, 2024",
    status: "Annual",
    type: "Annual Filing"
  },
  {
    id: 5,
    title: "Shareholding Pattern – Q3 2024",
    period: "Q3 FY 2023-24",
    date: "Jan 20, 2024",
    status: "Audited",
    type: "Quarterly Filing"
  },
  {
    id: 6,
    title: "Shareholding Pattern – Q2 2024",
    period: "Q2 FY 2023-24",
    date: "Oct 22, 2023",
    status: "Audited",
    type: "Quarterly Filing"
  }
];

export default function ShareholdingPatternPage() {
  return (
    <main className="overflow-hidden">
      <GenericInvestorHero title="Shareholding Pattern" />
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <ShareholdingIntro />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <ShareholdingSummary />
      </div>

      <GenericInvestorFilter />

      <GenericInvestorListing 
        items={reports} 
        sectionTitle="Filing Archive"
        category="Shareholding Pattern"
      />

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <ShareholdingNote />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <ShareholdingCTA />
      </div>
    </main>
  );
}



