"use client";

import React from "react";
import { ShieldCheck, Scale, ScrollText } from "lucide-react";

export function PoliciesIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Commitment to Ethics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              Foundations of <br />
              <span className="text-deepblue dark:text-gold">Trust & Accountability</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
              At J Pan Tubular Components Limited, our policies serve as the compass for our 
              business conduct. We are committed to maintaining the highest 
              standards of transparency, ensuring that every operation 
              aligns with our core values of integrity and ethical responsibility.
            </p>
            
            <div className="flex flex-wrap gap-10 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-1">Integrity</h4>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Core Principle</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm">
                  <Scale className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest mb-1">Fairness</h4>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Ethical Standard</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="p-12 bg-silver/5 dark:bg-white/2 border border-border rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />
              <div className="relative z-10">
                <ScrollText className="w-12 h-12 text-gold mb-8" />
                <h3 className="text-2xl font-heading font-bold text-charcoal dark:text-white mb-6">
                  Why Policies Matter
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Ensuring consistency in decision-making across all global operations.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Protecting the rights and interests of our shareholders, employees, and partners.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Maintaining compliance with international statutory and regulatory requirements.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-deepblue/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
