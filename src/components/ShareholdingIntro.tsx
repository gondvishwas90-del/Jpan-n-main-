"use client";

import React from "react";
import { ShieldCheck, Target, Globe } from "lucide-react";

export function ShareholdingIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Governance Clarity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-10 leading-tight">
              Ownership <br />
              <span className="text-deepblue dark:text-gold italic font-medium">As a Standard of Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              Understanding the shareholding pattern is critical for 
              stakeholders to assess the company's stability and 
              leadership alignment. At J Pan Tubular Components Limited, we provide regular, 
              statutory disclosures of our ownership structure to ensure 
              absolute market transparency.
            </p>
            
            <div className="flex flex-col gap-8">
               <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 flex items-center justify-center rounded-sm border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                     <Target className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-gold">Alignment</h4>
                    <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                      Ensuring promoter commitment remains aligned with long-term shareholder value creation.
                    </p>
                  </div>
               </div>
               <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 flex items-center justify-center rounded-sm border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                     <Globe className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-gold">Public Disclosure</h4>
                    <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                      Consistent quarterly reporting in compliance with SEBI and Exchange requirements.
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <div className="p-12 bg-charcoal dark:bg-black/20 rounded-sm border border-white/5 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors" />
              <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-gold/30 mb-8" />
                <h3 className="text-2xl font-heading font-bold text-white mb-8">
                  Institutional Integrity
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-gold font-bold text-lg">01.</div>
                    <p className="text-xs text-silver/40 leading-relaxed italic">
                      "Our shareholding structure reflects a balanced participation 
                      from promoters and public institutions, fostering a resilient 
                      corporate ecosystem."
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-gold font-bold text-lg">02.</div>
                    <p className="text-xs text-silver/40 leading-relaxed italic">
                      "We maintain strict adherence to minimum public shareholding 
                      norms, ensuring liquidity and market efficiency for all investors."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Geometric Accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold/10 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
