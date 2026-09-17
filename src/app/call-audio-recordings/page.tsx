"use client";

import React from "react";
import { 
  GenericInvestorHero, 
  GenericInvestorFilter, 
  GenericInvestorListing 
} from "@/components/GenericInvestorComponents";
import { AudioIntro } from "@/components/AudioIntro";
import { AudioCTA } from "@/components/AudioCTA";

const recordings = [
  {
    id: 1,
    title: "Earnings Call – Q3 FY25",
    date: "Jan 22, 2025",
    type: "Earnings Call",
    period: "Q3 FY 2024-25",
    status: "Verified"
  },
  {
    id: 2,
    title: "Investor Meet – Institutional Day",
    date: "Nov 15, 2024",
    type: "Investor Meet",
    period: "Q2 FY 2024-25",
    status: "Verified"
  },
  {
    id: 3,
    title: "Earnings Call – Q2 FY25",
    date: "Oct 28, 2024",
    type: "Earnings Call",
    period: "Q2 FY 2024-25",
    status: "Verified"
  },
  {
    id: 4,
    title: "Analyst Day Presentation",
    date: "Aug 10, 2024",
    type: "Analyst Day",
    period: "Q2 FY 2024-25",
    status: "Verified"
  },
  {
    id: 5,
    title: "Earnings Call – Q1 FY25",
    date: "Jul 25, 2024",
    type: "Earnings Call",
    period: "Q1 FY 2024-25",
    status: "Verified"
  },
  {
    id: 6,
    title: "Earnings Call – Q4 FY24",
    date: "May 15, 2024",
    type: "Earnings Call",
    period: "Q4 FY 2023-24",
    status: "Verified"
  }
];

export default function CallAudioRecordingsPage() {
  return (
    <main className="overflow-hidden">
      <GenericInvestorHero title="Call Audio Recordings" />
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <AudioIntro />
      </div>

      <GenericInvestorFilter />

      <GenericInvestorListing 
        items={recordings} 
        sectionTitle="Acoustic Archive"
        category="Audio Recording"
      />

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <AudioCTA />
      </div>
    </main>
  );
}


