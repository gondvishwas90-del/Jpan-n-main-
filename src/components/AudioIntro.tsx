"use client";

import React from "react";
import { Headphones, ShieldCheck, Share2, MessageSquare } from "lucide-react";

export function AudioIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Investor Accountability</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              The Voice of <br />
              <span className="text-deepblue dark:text-gold italic font-medium">Transparency</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              At J Pan Tubular Components Limited, we believe transparency extends beyond written 
              reports. By providing direct access to our earnings and 
              analyst calls, we ensure that every stakeholder can hear 
              the primary narrative, fostering a deeper understanding of 
              our strategic direction and operational integrity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <Headphones className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-gold">Acoustic Clarity</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">High-bitrate recordings ensuring every word is captured with precision.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <ShieldCheck className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-gold">Primary Archive</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Unaltered recordings serving as the definitive corporate record.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="p-12 bg-charcoal dark:bg-black/20 border border-white/5 rounded-sm relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat" />
               <div className="relative z-10">
                  <MessageSquare className="w-16 h-16 text-gold/20 mb-8" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-8">
                    Corporate Dialogue
                  </h3>
                  <div className="space-y-10">
                    <div className="flex gap-6">
                       <span className="text-gold font-bold text-xl">/01</span>
                       <p className="text-xs text-silver/40 leading-relaxed italic">
                         "Hearing the nuance in an analyst call provides context that 
                         even the most detailed transcript cannot replicate. We 
                         prioritize audio accessibility for total clarity."
                       </p>
                    </div>
                    <div className="flex gap-6">
                       <span className="text-gold font-bold text-xl">/02</span>
                       <p className="text-xs text-silver/40 leading-relaxed italic">
                         "Our recording repository is a testament to our commitment 
                         to open communication and equitable information sharing."
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
