"use client";

import React from "react";
import { Scale, ShieldCheck, Activity } from "lucide-react";

export function StatementOfDeviationsIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Fund Accountability</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight">
               Integrity in <br />
              <span className="text-deepblue dark:text-gold">Capital Allocation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Statement of Deviations is a critical statutory disclosure 
              confirming whether funds raised through various corporate 
              actions have been utilized for their intended purposes. It 
              ensures J Pan Tubular Components Limited's unwavering commitment to shareholder 
              trust and fiscal discipline.
            </p>
            
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm">
                  <Scale className="w-5 h-5 text-gold" />
                </div>
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Fiscal Parity</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm">
                  <Activity className="w-5 h-5 text-gold" />
                </div>
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Fund Utilization</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="p-12 bg-silver/5 dark:bg-white/2 border border-border rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />
              <div className="relative z-10 space-y-10">
                <div className="flex gap-6">
                  <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-2">Statutory Verification</h4>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">Strict adherence to SEBI requirements for the periodic reporting of fund utilization and deviations.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-2">Transparency Loop</h4>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">Providing clear visibility into any variances between planned and actual capital expenditure.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-2">Audit Compliance</h4>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">Ensuring all financial disclosures are vetted through internal and external statutory audit channels.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
