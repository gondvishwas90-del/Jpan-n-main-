"use client";

import React from "react";
import { ShieldAlert, Scale, ExternalLink, HelpCircle, CheckCircle2 } from "lucide-react";

export function UnclaimedCompliance() {
  return (
    <section className="py-24 bg-charcoal dark:bg-black/40 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gold/5 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-left duration-700">
               <div className="flex items-center gap-2 mb-8">
                  <div className="h-0.5 w-10 bg-gold" />
                  <span className="text-gold font-bold uppercase tracking-widest text-xs">Statutory Compliance</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-10 leading-tight">
                  Regulatory Mandates <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold italic font-medium">& IEPF Transfer</span>
               </h2>
               <p className="text-silver/50 text-lg mb-10 leading-relaxed max-w-xl">
                  In accordance with the Companies Act, 2013, dividends remaining 
                  unclaimed for a period of seven years are mandatorily 
                  transferred to the Investor Education and Protection Fund (IEPF) 
                  Authority.
               </p>

               <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-gold transition-colors shrink-0">
                        <Scale className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Legal Framework</h4>
                        <p className="text-silver/30 text-xs leading-relaxed max-w-md">Compliance with Section 124 of the Companies Act regarding unpaid dividend accounts and fund transfers.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-gold transition-colors shrink-0">
                        <ShieldAlert className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Investor Protection</h4>
                        <p className="text-silver/30 text-xs leading-relaxed max-w-md">J Pan Tubular Components Limited strictly follows the IEPF Authority (Accounting, Audit, Transfer and Refund) Rules.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-5 animate-in fade-in slide-in-from-right duration-700 delay-200">
               <div className="bg-white/5 border border-white/10 p-12 rounded-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl" />
                  <HelpCircle className="w-16 h-16 text-gold/20 mb-8" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-8">
                    Important <br /> Disclosure
                  </h3>
                  <ul className="space-y-6 mb-12">
                     <li className="flex gap-4">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <p className="text-[11px] text-silver/40 leading-relaxed">Shareholders can still claim their transferred shares/dividends from the IEPF Authority.</p>
                     </li>
                     <li className="flex gap-4">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <p className="text-[11px] text-silver/40 leading-relaxed">Detailed lists of shares due for transfer are published annually on our website.</p>
                     </li>
                  </ul>
                  <button className="w-full py-5 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.3em] rounded-sm flex items-center justify-center gap-4 hover:bg-white transition-all shadow-xl">
                     Claim Instructions
                     <ExternalLink className="w-5 h-5" />
                  </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
