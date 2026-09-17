"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Users, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    title: "Technical Training & L&D",
    category: "Knowledge",
    icon: GraduationCap,
    image: "/images/about-hero.png",
    desc: "Regular workshop sessions focusing on CNC automation, metallurgy standards, and shop floor safety protocols."
  },
  {
    title: "Team Culture & Offsites",
    category: "Culture",
    icon: Users,
    image: "/images/about-manufacturing.png",
    desc: "Annual engineering off-sites and collaborative hackathons to foster inter-departmental innovation."
  },
  {
    title: "CSR & Community Engagement",
    category: "Community",
    icon: Heart,
    image: "/images/industry-appliances.png",
    desc: "Supporting local technical education and environmental conservation projects across our manufacturing plant regions."
  }
];

export function CorporateActivities() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < activities.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#05080f] border-b border-border/40 relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(var(--color-charcoal) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold font-extrabold uppercase tracking-[0.3em] text-xs">OUR PEOPLE & COMMUNITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-charcoal dark:text-white leading-tight">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-deepblue italic font-medium">Activities</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-base max-w-md font-normal leading-relaxed border-l-2 border-gold/40 pl-4"
          >
            Beyond engineering, we are committed to workforce empowerment, social responsibility, and a vibrant manufacturing culture.
          </motion.p>
        </div>

        {/* Corporate Activity Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <motion.div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-4 md:py-6 px-1.5 md:px-1 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {activities.map((act, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="group bg-silver/10 dark:bg-white/[0.03] border border-border/60 p-6 rounded-3xl overflow-hidden hover:border-gold/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
              >
                {/* Image Side - Compact 16:10 Ratio */}
                <div className="space-y-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/40 shrink-0">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal/80 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-1.5 text-gold text-[10px] font-extrabold uppercase tracking-widest">
                      <act.icon className="w-3.5 h-3.5 text-gold" />
                      <span>{act.category}</span>
                    </div>
                  </div>

                  <div className="space-y-3 px-1">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300">
                      {act.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                      {act.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Marker */}
                <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-gold transition-colors duration-300 px-1">
                  <span className="uppercase tracking-widest text-[10px]">Culture Initiative</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  if (cardsRef.current && cardsRef.current.children[i]) {
                    cardsRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                )}
                aria-label={`Go to corporate activity card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
