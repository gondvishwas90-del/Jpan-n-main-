"use client";

import React from "react";
import { ShieldCheck, Scale, AlertCircle, Info } from "lucide-react";

export function MaterialCompliance() {
  return (
    <section className="py-20 bg-charcoal border-b border-border/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
             <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Regulatory Compliance</h4>
             </div>
             <p className="text-[11px] text-silver/70 leading-relaxed italic">
                All documents hosted in this repository are maintained in strict 
                compliance with Regulation 46(2)(r) of the SEBI (Listing 
                Obligations and Disclosure Requirements) Regulations, 2015.
             </p>
          </div>

          <div className="flex justify-center animate-in fade-in zoom-in-95 duration-700 delay-200">
             <div className="px-10 py-4 bg-white/5 border border-gold/20 rounded-sm shadow-xl flex items-center gap-6">
                <div className="w-px h-10 bg-gold/30" />
                <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-silver/70 uppercase tracking-widest">Repository Status</span>
                   <span className="text-xs font-bold text-white uppercase tracking-tighter">Verified & Active</span>
                </div>
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
             </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-700 delay-400">
             <div className="flex items-center gap-3 mb-4 lg:justify-end">
                <Info className="w-5 h-5 text-gold" />
                <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Statutory Notice</h4>
             </div>
             <p className="text-[11px] text-silver/70 leading-relaxed italic lg:text-right">
                The availability of these documents is intended for the information 
                of stakeholders and does not constitute a legal offer or a 
                binding contractual commitment beyond the terms stated herein.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
