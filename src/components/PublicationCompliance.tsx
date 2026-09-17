"use client";

import React from "react";
import { ShieldAlert, Scale, Info, CheckCircle2 } from "lucide-react";

export function PublicationCompliance() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-t border-border">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="bg-silver/5 dark:bg-white/2 border border-border p-12 md:p-20 rounded-sm relative overflow-hidden group shadow-xl">
            {/* Design Accents */}
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 animate-in fade-in slide-in-from-left duration-700">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm">
                    <ShieldAlert className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Statutory Disclosure</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
                  Public Awareness <br />
                  <span className="text-muted-foreground">& Legal Mandates</span>
                </h3>
                
                <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
                  As per Regulation 47 of SEBI (LODR) Regulations, 2015, listed companies 
                  are required to publish financial results and notices of corporate 
                  actions in at least one English national daily and one regional 
                  daily. J Pan Tubular Components Limited strictly adheres to these mandates to ensure 
                  maximum market transparency.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                     <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                     <div>
                        <h4 className="text-[11px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-1.5">Market Outreach</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">Ensuring notice accessibility for investors who rely on traditional media.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                     <div>
                        <h4 className="text-[11px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-1.5">Audit Compliance</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">Full documentation for statutory audit and secretarial verification.</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 animate-in fade-in slide-in-from-right duration-700 delay-200">
                 <div className="p-10 border border-gold/20 bg-gold/5 rounded-sm">
                    <div className="flex items-center gap-4 mb-8">
                       <Scale className="w-8 h-8 text-gold" />
                       <h4 className="text-sm font-heading font-bold text-charcoal dark:text-white uppercase tracking-widest">Legal Precision</h4>
                    </div>
                    <ul className="space-y-6">
                       <li className="flex gap-4">
                          <span className="text-gold font-bold text-xs mt-1">/01</span>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">Financial Results (Quarterly/Annual) are published within 48 hours of board approval.</p>
                       </li>
                       <li className="flex gap-4">
                          <span className="text-gold font-bold text-xs mt-1">/02</span>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">AGM/EGM notices are published in both English and Regional vernacular dailies.</p>
                       </li>
                       <li className="flex gap-4">
                          <span className="text-gold font-bold text-xs mt-1">/03</span>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">Newspaper clippings are archived for historical reference and investor discovery.</p>
                       </li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
