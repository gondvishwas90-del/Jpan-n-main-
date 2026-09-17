"use client";

import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const featured = [
  {
    title: "Main Assembly Floor",
    subtitle: "Scale & Precision",
    desc: "A 50,000 sq. ft. dedicated production facility optimized for high-volume component manufacturing and assembly.",
    image: "/images/about-manufacturing.png",
    specs: ["40+ CNC Lines", "ISO 9001 Certified", "Automated Brazing"]
  },
  {
    title: "The R&D Laboratory",
    subtitle: "Technical Excellence",
    desc: "In-house lab equipped with Spectrometry, Hydro-testing, and Metrology stations for uncompromising quality assurance.",
    image: "/images/quality-hero.png",
    specs: ["Spectrometry", "NABL Aligned", "24/7 Monitoring"]
  }
];

export function GalleryFeatured() {
  return (
    <section className="py-24 bg-silver/5 dark:bg-black/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Facility Spotlights</span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-charcoal dark:text-white mb-6">
            Featured <span className="text-deepblue dark:text-gold">Highlights</span>
          </h2>
        </div>

        <div className="space-y-24">
          {featured.map((f, idx) => (
            <div 
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 aspect-[16/9] relative rounded-sm overflow-hidden shadow-2xl group">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-deepblue/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5">
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs block mb-4">{f.subtitle}</span>
                <h3 className="text-4xl font-heading font-bold text-charcoal dark:text-white mb-6">{f.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {f.desc}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {f.specs.map((spec, sidx) => (
                    <li key={sidx} className="flex items-center gap-3 text-sm font-bold text-charcoal/60 dark:text-white/60">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-3 text-charcoal dark:text-white font-bold text-sm uppercase tracking-widest hover:text-deepblue dark:hover:text-gold transition-colors group/btn">
                  View Facility Details
                  <MoveRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
