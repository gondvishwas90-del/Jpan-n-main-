"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Box, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const mainCategories = [
  {
    name: "HVAC Solutions",
    count: "120+ Components",
    icon: Layers,
    image: "/images/hvac_category_bg.png",
    description: "High-performance precision parts for global HVAC & refrigeration systems.",
    accent: "gold"
  },
  {
    name: "Automotive Range",
    count: "85+ Components",
    icon: Settings,
    image: "/images/automotive_category_bg.png",
    description: "Critical fuel lines and tubular assemblies for leading automotive brands.",
    accent: "deepblue"
  },
  {
    name: "Industrial Systems",
    count: "45+ Components",
    icon: Box,
    image: "/images/industrial_category_bg.png",
    description: "Heavy-duty modular solutions for complex industrial infrastructure.",
    accent: "gold"
  }
];

export function CategoryHighlights() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < mainCategories.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-12 md:py-32 bg-white dark:bg-[#080808] overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Engineering Excellence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-charcoal dark:text-white leading-[1.1] tracking-tight">
              Primary Product <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold/80 to-deepblue">Families</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 md:mt-0"
          >
            <p className="text-muted-foreground text-base sm:text-lg max-w-sm font-light leading-relaxed">
              Discover our comprehensive range of precision-engineered tubular solutions across three core domains.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid: Single visible card at a time with horizontal scroll on mobile (< lg), 3-column grid on desktop (>= lg) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row lg:grid lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-4 pb-4 lg:py-0 px-2 lg:px-0 gap-4 md:gap-8 lg:gap-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {mainCategories.map((cat, idx) => (
              <CategoryCard key={idx} category={cat} index={idx} />
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-4 z-10">
            {mainCategories.map((_, i) => (
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
                aria-label={`Go to category card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: any, index: number }) {
  const cardRef = useRef(null);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative h-[480px] sm:h-[520px] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden cursor-pointer w-full min-w-full lg:min-w-0 lg:w-full shrink-0 snap-center shadow-lg"
    >
      {/* Background Image with Zoom & Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-1000 grayscale group-hover:grayscale-0"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
      </motion.div>

      {/* Floating Category Badge */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
        <div className="px-6 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center gap-3">
          <category.icon className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">{category.count}</span>
        </div>
      </div>

      {/* Content Section - Glassmorphic Bottom Card */}
      <div className="absolute bottom-0 left-0 right-0 p-3 pb-4 sm:p-5 lg:p-6 xl:p-10 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
          className="relative flex flex-col justify-between bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 lg:p-6 xl:p-8"
        >
          {/* Visual Decorative Element */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 shrink-0">
             <span className="text-[10px] font-heading font-bold text-white group-hover:text-gold transition-colors duration-500">0{index + 1}</span>
          </div>

          <div className="space-y-2 sm:space-y-3 pr-10">
            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-white leading-tight group-hover:text-gold transition-colors duration-500">
              {category.name}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {category.description}
            </p>
          </div>

          <div className="pt-3 sm:pt-4 flex items-center">
            <Link 
              href="/products" 
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white group/link"
            >
              <span className="whitespace-nowrap">View Catalog</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center transition-all duration-500 group-hover/link:bg-gold group-hover/link:border-gold shrink-0">
                <ArrowUpRight className="w-4 h-4 text-white group-hover/link:text-charcoal transition-colors" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hover Light Streak */}
      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-[2000ms] ease-in-out pointer-events-none" />
    </motion.div>
  );
}
