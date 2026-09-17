"use client";

import React from "react";
import { GenericInvestorHero, GenericInvestorTable, GenericInvestorFilter } from "@/components/GenericInvestorComponents";

const data = [
  { id: 1, date: "2025-2026", particulars: "J Pan Tubular Components Limited - Annual Return", link: "/sample-report.pdf" },
  { id: 2, date: "2024-2025", particulars: "J Pan Tubular Components Limited - Annual Return", link: "/sample-report.pdf" },
  { id: 3, date: "2023-2024", particulars: "J Pan Tubular Components Limited - Annual Return", link: "/sample-report.pdf" },
  { id: 4, date: "2022-2023", particulars: "J Pan Tubular Components Limited - Annual Return", link: "/sample-report.pdf" },
  { id: 5, date: "2021-2022", particulars: "J Pan Tubular Components Limited - Annual Return", link: "/sample-report.pdf" },
  { id: 6, date: "2020-2021", particulars: "J Pan Tubular Components Limited - Annual Return", link: "/sample-report.pdf" },
];

export default function AnnualReturnPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background">
      <GenericInvestorHero 
        title="Annual Return"
        subtitle="Detailed statutory returns and compliance filings for fiscal periods."
        image="/images/annual_reports_hero.png"
      />
      
      <GenericInvestorFilter />
      <GenericInvestorTable data={data} />
    </main>
  );
}
