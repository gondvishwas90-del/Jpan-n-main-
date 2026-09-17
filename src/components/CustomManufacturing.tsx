"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PenTool, Box, RefreshCcw, FileCheck, ArrowRight } from "lucide-react";

const features = [
  { title: "Design Support", desc: "Collaborative R&D to optimize your component geometry.", icon: PenTool },
  { title: "OEM Manufacturing", desc: "Scaling from prototype to high-volume production.", icon: Box },
  { title: "Rapid Prototyping", desc: "Fast turnaround for functional test samples.", icon: RefreshCcw },
  { title: "Material Traceability", desc: "100% certified raw material sourcing and tracking.", icon: FileCheck },
];

export function CustomManufacturing() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Bespoke Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              Need a <span className="text-deepblue dark:text-gold">Custom Product?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Beyond our standard catalog, we specialize in co-engineering 
              unique solutions for mission-critical applications. Our team 
              works with your blueprints to deliver precision-perfect results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0">
                    <f.icon className="w-5 h-5 text-deepblue dark:text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-wider mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact#enquiry-form" className="group mt-12 w-full md:w-auto px-10 py-5 bg-deepblue text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-gold/20 flex items-center justify-center gap-3 btn-slide-gold">
              Request Engineering Quote
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative group md:px-8">
            <div className="relative aspect-video rounded-sm overflow-hidden border border-border shadow-2xl">
              <Image
                src="/images/custom-engineering.png"
                alt="Custom Engineering and Blueprints"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Floating Technical Stat */}
            <div className="absolute -top-6 -left-6 p-8 bg-gold shadow-2xl rounded-sm hidden md:block">
              <div className="text-4xl font-heading font-bold text-charcoal">0.05mm</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/60">Max Tolerance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
