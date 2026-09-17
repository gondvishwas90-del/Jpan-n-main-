"use client";

import React from "react";
import { Scale, Clock, ShieldCheck, UserCheck } from "lucide-react";

export function GrievanceIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Our Commitment</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              Responsive <br />
              <span className="text-deepblue dark:text-gold italic font-medium">Redressal Hub</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              At J Pan Tubular Components Limited, we prioritize the voice of our stakeholders. 
              Our investor grievance system is engineered to provide a 
              structured, transparent, and legally-compliant framework for 
              resolving concerns related to dividends, share transfers, 
              and statutory disclosures.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                    <Scale className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2">Fair Evaluation</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Impartial review of every submission by our compliance desk.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                    <Clock className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2">Timed Resolution</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Systematic tracking ensuring resolution within 7–15 working days.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="p-12 bg-charcoal dark:bg-black/20 border border-white/5 rounded-sm relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat" />
               <div className="relative z-10">
                  <ShieldCheck className="w-16 h-16 text-gold/20 mb-8" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-8">
                    Institutional Trust
                  </h3>
                  <div className="space-y-10">
                    <div className="flex gap-6">
                       <span className="text-gold font-bold text-xl">/01</span>
                       <p className="text-xs text-silver/40 leading-relaxed italic">
                         "Every grievance is an opportunity for us to improve our 
                         governance and strengthen our relationship with investors."
                       </p>
                    </div>
                    <div className="flex gap-6">
                       <span className="text-gold font-bold text-xl">/02</span>
                       <p className="text-xs text-silver/40 leading-relaxed italic">
                         "We maintain a verbatim record of all grievances to ensure 
                         total transparency in our corporate secretarial practices."
                       </p>
                    </div>
                  </div>
               </div>
            </div>
            {/* Geometric Accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-gold/10 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
