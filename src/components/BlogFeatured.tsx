"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

interface BlogFeaturedProps {
  onReadMore: (article: any) => void;
}

export function BlogFeatured({ onReadMore }: BlogFeaturedProps) {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-0.5 w-8 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-widest text-xs">Featured Article</span>
        </div>

        <div className="group relative flex flex-col lg:flex-row bg-silver/5 dark:bg-white/2 rounded-sm overflow-hidden border border-border hover:border-gold transition-all duration-500 shadow-2xl">
          {/* Image Side */}
          <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto relative overflow-hidden">
            <Image
              src="/images/quality-hero.png"
              alt="The Future of Automated Brazing in HVAC"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-deepblue/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute top-8 left-8">
              <span className="px-4 py-2 bg-charcoal/90 backdrop-blur-md text-gold text-[10px] font-bold uppercase tracking-widest rounded-sm border border-gold/20">
                Thought Leadership
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-6 mb-8 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                Nov 12, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                8 Min Read
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gold" />
                Engineering Team
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight group-hover:text-deepblue dark:group-hover:text-gold transition-colors">
              The Evolution of Automated Brazing in HVAC-R Systems
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              As global energy standards tighten, the precision of tubular 
              joints has become critical. We explore how next-generation 
              automation is redefining the reliability of copper assemblies.
            </p>

            <button 
              onClick={() => onReadMore({
                title: "The Evolution of Automated Brazing in HVAC-R Systems",
                date: "Nov 12, 2025",
                time: "8 Min",
                category: "Technology",
                author: "Engineering Team",
                image: "/images/quality-hero.png",
                content: [
                  "The industrial cooling sector is undergoing a massive transformation, driven by both regulatory pressures and technological breakthroughs. At the heart of this shift is the brazing process—the critical junction where precision meets reliability.",
                  "Traditional manual brazing, while effective in the hands of a master craftsman, introduces inherent variability. In high-volume production for HVAC-R systems, this variability can lead to microscopic leakages that compromise the lifecycle efficiency of the entire unit.",
                  "J Pan Tubular Components Limited's transition to automated induction brazing has set a new benchmark. By using precisely controlled thermal cycles and robotic alloy deposition, we achieve 99.99% leak-free reliability. This technology doesn't just increase speed; it ensures that every single joint meets the exact same metallurgical standard.",
                  "As we look towards 2026, the integration of real-time thermal imaging and AI-driven quality inspection will further refine this process, making 'Zero-Defect' manufacturing a reality for the global market."
                ]
              })}
              className="flex items-center gap-3 text-charcoal dark:text-white font-bold text-sm uppercase tracking-widest hover:text-gold transition-colors group/btn"
            >
              Continue Reading
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
