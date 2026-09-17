"use client";

import React, { useRef, useState } from "react";
import { TrendingUp, GraduationCap, Users, ShieldCheck, Heart, Zap, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const valueProps = [
  {
    index: "01",
    icon: TrendingUp,
    title: "Career Growth",
    description: "Structured pathways for vertical and horizontal mobility across departments with clear meritocratic promotion milestones."
  },
  {
    index: "02",
    icon: GraduationCap,
    title: "Continuous L&D",
    description: "Access to institutional training, specialized metallurgy certifications, and sponsored executive education."
  },
  {
    index: "03",
    icon: Users,
    title: "Inclusive Culture",
    description: "A collaborative habitat where diverse technical perspectives drive continuous engineering innovation."
  },
  {
    index: "04",
    icon: ShieldCheck,
    title: "Institutional Stability",
    description: "Build your long-term career legacy within a financially strong, zero-debt, resilient manufacturing leader."
  },
  {
    index: "05",
    icon: Heart,
    title: "Work-Life Integration",
    description: "Empowering frameworks that prioritize comprehensive health, safety, and employee well-being."
  },
  {
    index: "06",
    icon: Zap,
    title: "Agile Innovation",
    description: "Work with cutting-edge Industry 4.0 automation, CNC bending, and advanced ERP systems."
  }
];

export function CareersValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-32 bg-white dark:bg-[#05080f] relative overflow-hidden transition-colors duration-500"
    >
      {/* Ambient Lighting & Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(var(--color-charcoal) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Full-Width Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold font-extrabold uppercase tracking-[0.35em] text-xs">
              THE J PAN ADVANTAGE
            </span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-charcoal dark:text-white leading-[1.08] tracking-tight mb-6">
            Why Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-deepblue italic font-medium">
              Legacy With Us?
            </span>
          </h2>
          
          <p className="text-muted-foreground font-normal text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We provide the institutional infrastructure, mentorship, and empowerment required for ambitious engineering and business professionals to excel.
          </p>
        </motion.div>

        {/* 3-Column Premium Grid */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 no-scrollbar pb-6 md:pb-0"
        >
          {valueProps.map((value, idx) => (
            <motion.div 
              key={value.index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative bg-silver/10 dark:bg-white/[0.03] border border-border/60 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-gold/60 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden w-full shrink-0 snap-center md:w-auto md:shrink"
            >
              {/* Side Accent Line */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-gold transition-all duration-500 group-hover:h-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Top Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-charcoal text-deepblue dark:text-gold border border-border/60 flex items-center justify-center shadow-md group-hover:bg-gold group-hover:text-charcoal group-hover:border-gold transition-all duration-500">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-muted-foreground/60 dark:text-white/30 uppercase tracking-widest font-mono">
                    {value.index}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Card Footer Marker */}
              <div className="pt-6 mt-8 border-t border-border/40 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-gold transition-colors duration-300 relative z-10">
                <span className="uppercase tracking-widest text-[10px]">Institutional Pillar</span>
                <CheckCircle2 className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators for Mobile Scroll */}
        {valueProps.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {valueProps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-gold w-6" : "bg-charcoal/20 dark:bg-silver/20"
                )}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollContainerRef.current.clientWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
