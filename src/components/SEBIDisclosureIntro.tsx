"use client";

import React from "react";
import { Scale, ShieldCheck, FileCheck } from "lucide-react";

export function SEBIDisclosureIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Statutory Responsibility</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight">
              Upholding Market <br />
              <span className="text-deepblue dark:text-gold">Accountability</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              J Pan Tubular Components Limited adheres to the highest standards of regulatory 
              compliance, ensuring that all material events, financial 
              statements, and governance actions are disclosed in strict 
              alignment with SEBI mandates. We believe transparency is the 
              cornerstone of shareholder trust.
            </p>
            
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm">
                  <Scale className="w-5 h-5 text-gold" />
                </div>
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">LODR Compliance</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Verified Filings</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-12 bg-silver/5 dark:bg-white/2 border border-border rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />
              <div className="relative z-10 space-y-10">
                <div className="flex gap-6">
                  <FileCheck className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-2">Timely Intimation</h4>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">Ensuring all price-sensitive information is dispatched to exchanges within the stipulated regulatory windows.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <FileCheck className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-2">Technical Integrity</h4>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">Rigorous internal auditing of all statutory disclosures to ensure absolute factual accuracy and regulatory alignment.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <FileCheck className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-2">Equitable Disclosure</h4>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">Maintaining a fair market environment by providing simultaneous access to disclosures for institutional and retail stakeholders.</p>
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
