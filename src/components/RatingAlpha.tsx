"use client";

import React from "react";
import { ShieldCheck, Calendar, ArrowRight, TrendingUp, BarChart3, Globe } from "lucide-react";

export function RatingAlpha() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container-custom">
        <div className="bg-charcoal dark:bg-black/40 border border-white/5 rounded-sm relative group overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
           {/* Institutional Design Elements */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] group-hover:bg-gold/10 transition-colors" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deepblue/5 blur-[100px]" />
           <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat pointer-events-none" />

           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Rating Alpha */}
              <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                 <div className="flex items-center gap-3 mb-12">
                    <div className="h-px w-10 bg-gold" />
                    <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Current Evaluation</span>
                 </div>
                 
                 <div className="mb-12">
                    <span className="text-[120px] font-heading font-bold text-white leading-none tracking-tighter block mb-2">
                       A<span className="text-gold">+</span>
                    </span>
                    <div className="flex items-center gap-4">
                       <div className="px-4 py-1.5 bg-gold text-charcoal text-[9px] font-bold uppercase tracking-widest rounded-sm shadow-xl">
                          Stable Outlook
                       </div>
                       <span className="text-silver/30 text-[10px] font-bold uppercase tracking-widest">Verified 2024-25</span>
                    </div>
                 </div>

                 <p className="text-silver/40 text-sm leading-relaxed mb-10 italic">
                    "This rating reflects J Pan Tubular Components Limited's strong market position, 
                    healthy capital structure, and robust liquidity profile 
                    maintained across fiscal cycles."
                 </p>

                 <div className="flex items-center gap-8 pt-10 border-t border-white/5">
                    <div className="flex flex-col">
                       <span className="text-[9px] text-silver/20 uppercase tracking-widest mb-1">Rating Agency</span>
                       <span className="text-white font-bold text-sm tracking-widest uppercase">ICRA Limited</span>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex flex-col">
                       <span className="text-[9px] text-silver/20 uppercase tracking-widest mb-1">Effective Date</span>
                       <span className="text-white font-bold text-sm tracking-widest uppercase">Jan 12, 2025</span>
                    </div>
                 </div>
              </div>

              {/* Right Column: Narrative Strength */}
              <div className="lg:col-span-7 p-12 md:p-20 bg-white/2">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <BarChart3 className="w-10 h-10 text-gold/30 mb-8" />
                       <h4 className="text-white font-bold text-sm uppercase tracking-widest">Financial Resiliency</h4>
                       <p className="text-silver/40 text-[11px] leading-relaxed">
                          Demonstrated ability to maintain healthy interest 
                          coverage and cash-flow-to-debt ratios amidst 
                          fluctuating industrial demand.
                       </p>
                    </div>
                    <div className="space-y-6">
                       <Globe className="w-10 h-10 text-gold/30 mb-8" />
                       <h4 className="text-white font-bold text-sm uppercase tracking-widest">Operational Scale</h4>
                       <p className="text-silver/40 text-[11px] leading-relaxed">
                          High utilization of manufacturing capacity and a 
                          diversified client portfolio contributing to 
                          revenue stability.
                       </p>
                    </div>
                    <div className="md:col-span-2 pt-10 border-t border-white/5">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                          <div className="flex items-center gap-6">
                             <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm">
                                <ShieldCheck className="w-6 h-6 text-gold" />
                             </div>
                             <div>
                                <h5 className="text-white font-bold text-[10px] uppercase tracking-widest mb-1">Institutional Report</h5>
                                <p className="text-silver/30 text-[9px]">Access the complete credit rationale and detailed evaluation report.</p>
                             </div>
                          </div>
                          <button className="px-10 py-5 bg-gold text-charcoal font-bold text-[9px] uppercase tracking-[0.3em] rounded-sm transition-all shadow-2xl flex items-center justify-center gap-4 btn-slide-white group">
                             View Rationale
                             <ArrowRight className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
