"use client";

import React from "react";
import { MessageSquare, ShieldCheck, Globe, Scale } from "lucide-react";

export function PublicationIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Public Accountability</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              Statutory Disclosure <br />
              <span className="text-deepblue dark:text-gold italic font-medium">Beyond Digital Boundaries</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              While our digital channels provide real-time updates, J Pan 
              Tubular remains committed to traditional media disclosures 
              as a pillar of regulatory compliance. These publications 
              ensure that critical corporate notices reach the widest 
              possible spectrum of stakeholders.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-silver/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <ShieldCheck className="w-5 h-5 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-gold">Legal Validity</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Mandatory public notices as per SEBI (LODR) Regulations.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-silver/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <Globe className="w-5 h-5 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-gold">Regional Outreach</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Bilingual disclosures in English and regional vernaculars.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="p-12 bg-charcoal dark:bg-black/20 border border-white/5 rounded-sm relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat" />
               <div className="relative z-10">
                  <MessageSquare className="w-14 h-14 text-gold/20 mb-8" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-8">
                    Corporate Integrity
                  </h3>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                       <span className="text-gold font-bold text-lg">/01</span>
                       <p className="text-[11px] text-silver/40 leading-relaxed italic">
                         "Our media strategy is built on the foundation of absolute 
                         transparency, ensuring that every significant corporate 
                         event is documented and shared with the public."
                       </p>
                    </div>
                    <div className="flex gap-6">
                       <span className="text-gold font-bold text-lg">/02</span>
                       <p className="text-[11px] text-silver/40 leading-relaxed italic">
                         "We prioritize publications in leading financial dailies 
                         to maintain high standards of investor awareness and 
                         market accessibility."
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
