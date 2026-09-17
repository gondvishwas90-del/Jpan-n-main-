"use client";

import React from "react";
import { AnnualReportsHero } from "@/components/AnnualReportsHero";
import { AnnualReportsGrid } from "@/components/AnnualReportsGrid";
import { AnnualReportsFilter } from "@/components/AnnualReportsFilter";

export default function AnnualReportsPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background">
      <AnnualReportsHero />
      
      {/* Search & Filter - Wrapped in Suspense for Next.js build compatibility with useSearchParams */}
      <React.Suspense fallback={<div className="py-12 text-center text-charcoal/50">Loading filter...</div>}>
        <AnnualReportsFilter />
      </React.Suspense>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <AnnualReportsGrid />
      </div>
    </main>
  );
}
