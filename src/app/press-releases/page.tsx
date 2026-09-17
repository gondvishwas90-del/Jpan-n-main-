"use client";

import React from "react";
import { 
  GenericInvestorHero, 
  GenericInvestorFilter, 
  GenericInvestorListing 
} from "@/components/GenericInvestorComponents";
import { Newspaper, Building2, Globe, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const pressReleases = [
  {
    id: 1,
    title: "J Pan Tubular Components Limited Announces Major Facility Expansion in Haryana",
    type: "Corporate Expansion",
    date: "Jan 15, 2025",
    status: "Verified Release",
    period: "Q3 FY25"
  },
  {
    id: 2,
    title: "J Pan Tubular Components Limited Leading the Shift to Sustainable HVAC Components",
    type: "Sustainability",
    date: "Dec 10, 2024",
    status: "Verified Release",
    period: "Q3 FY25"
  },
  {
    id: 3,
    title: "Precision Bending: How J Pan Tubular Redefining Component Standards",
    type: "Technical Innovation",
    date: "Oct 28, 2024",
    status: "Verified Release",
    period: "Q2 FY25"
  },
  {
    id: 4,
    title: "The Rise of Indian Engineering: A Case Study on J Pan Tubular",
    type: "Global Trade",
    date: "Aug 14, 2024",
    status: "Verified Release",
    period: "Q2 FY25"
  },
  {
    id: 5,
    title: "J Pan Tubular Receives Strategic OEM Excellence Award for Zero-Defect Delivery",
    type: "Quality Honor",
    date: "Jun 02, 2024",
    status: "Verified Release",
    period: "Q1 FY25"
  }
];

export default function PressReleasesPage() {
  return (
    <main className="overflow-hidden">
      <GenericInvestorHero title="Press Releases" subtitle="Official Media Statements & Disclosures" />
      
      {/* Featured Press Release Card */}
      <section className="py-16 bg-white dark:bg-[#05080f] border-b border-border/40">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold font-extrabold uppercase tracking-[0.3em] text-xs">
              FEATURED EDITORIAL RELEASE
            </span>
          </div>

          <div className="relative rounded-3xl bg-silver/10 dark:bg-white/[0.03] border border-border/60 p-8 md:p-12 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Primary Announcement
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-charcoal dark:text-white leading-tight">
                  J Pan Tubular Components Limited Announces Major Facility Expansion in Haryana
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  We are excited to announce a 50,000 sq. ft. expansion of our main manufacturing facility, aimed at increasing production capacity for HVAC-R components by 40%. This strategic move aligns with our Industry 4.0 roadmap and green manufacturing commitments.
                </p>
                <div className="pt-2 flex items-center gap-6 text-xs font-bold text-muted-foreground">
                  <span>Published: Jan 15, 2025</span>
                  <span>•</span>
                  <span>Category: Corporate Expansion</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl hover:bg-gold dark:hover:bg-gold dark:hover:text-charcoal transition-all"
                >
                  <span>Media Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <React.Suspense fallback={<div className="py-8 text-center text-xs">Loading filter...</div>}>
        <GenericInvestorFilter />
      </React.Suspense>

      <GenericInvestorListing 
        items={pressReleases} 
        sectionTitle="Official Releases Archive"
        category="Press Releases"
      />
    </main>
  );
}
