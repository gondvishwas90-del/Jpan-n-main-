"use client";

import React, { useRef, useState } from "react";
import { Fan, Car, Home, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlowingWave } from "@/components/ui/glowing-wave";

const industries = [
  {
    id: "hvac",
    title: "HVAC & Climate Control",
    icon: Fan,
    description:
      "Advanced copper, stainless steel and aluminum solutions designed for high-efficiency air conditioning and refrigeration applications.",
  },
  {
    id: "automotive",
    title: "Automotive Engineering",
    icon: Car,
    description:
      "Precision-manufactured components supporting performance-driven automotive and mobility systems.",
  },
  {
    id: "appliances",
    title: "Consumer Appliances",
    icon: Home,
    description:
      "Reliable engineered solutions powering modern home and commercial appliance technologies.",
  },
  {
    id: "industrial",
    title: "Industrial & Data Centers",
    icon: Factory,
    description:
      "Heavy-duty precision components supporting industrial operations and mission-critical data center cooling environments.",
  },
];

interface IndustryCardProps {
  industry: (typeof industries)[number];
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
}

const IndustryCard = ({
  industry,
  index,
  isActive,
  onMouseEnter,
}: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isCardActive = isActive || isHovered;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-[82vw] sm:w-[320px] md:w-full shrink-0 snap-center select-none"
    >
      <Link
        href="/products"
        className={cn(
          "group relative h-[380px] w-full overflow-hidden transition-all duration-500 ease-out cursor-pointer border flex flex-col justify-between block backdrop-blur-xl shadow-lg",
          isCardActive
            ? "rounded-2xl rounded-r-[140px] md:rounded-r-[170px] bg-white/25 dark:bg-white/[0.22] border-white/60 dark:border-white/30 text-[#0D2440] dark:text-white -translate-y-2 shadow-2xl"
            : "rounded-2xl bg-white/20 dark:bg-white/20 border-white/40 dark:border-white/20 text-[#0D2440] dark:text-white hover:bg-white/25 dark:hover:bg-white/[0.22] hover:border-white/60 dark:hover:border-white/30 hover:-translate-y-1"
        )}
      >
        {/* Glass Specular Top Highlight Sheen */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/35 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-0" />

        <div className="flex flex-col justify-between h-full p-7 md:p-8 relative z-10">
          <div className="space-y-4">
            {/* Frosted Glass Icon Box */}
            <div
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 border backdrop-blur-md",
                isCardActive
                  ? "bg-white/30 dark:bg-white/25 border-white/50 dark:border-white/30 text-[#2E5E99] dark:text-[#7BA4D0] scale-105"
                  : "bg-white/20 dark:bg-white/20 border-white/40 dark:border-white/20 text-[#2E5E99] dark:text-[#7BA4D0]"
              )}
            >
              <industry.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <h3 className="text-xl font-heading font-black tracking-tight leading-snug transition-colors duration-300 text-[#0D2440] dark:text-white">
              {industry.title}
            </h3>

            {/* Accent Line */}
            <div
              className={cn(
                "h-[2.5px] rounded-full transition-all duration-300",
                isCardActive
                  ? "bg-[#2E5E99] dark:bg-[#7BA4D0] w-14"
                  : "bg-[#7BA4D0]/50 dark:bg-white/25 w-8 group-hover:w-12 group-hover:bg-[#2E5E99] dark:group-hover:bg-[#7BA4D0]"
              )}
            />
          </div>

          <div className="space-y-5">
            <p
              className={cn(
                "text-xs leading-relaxed font-medium transition-colors duration-300 pr-3",
                isCardActive ? "text-[#0D2440] dark:text-white" : "text-[#0D2440]/85 dark:text-white/80"
              )}
            >
              {industry.description}
            </p>

            {/* Frosted Action Pill */}
            <div>
              <div
                className={cn(
                  "inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300",
                  isCardActive
                    ? "bg-[#2E5E99] text-white border-[#2E5E99] dark:bg-[#7BA4D0] dark:text-[#0B0D0F] dark:border-[#7BA4D0]"
                    : "bg-white/20 dark:bg-white/20 backdrop-blur-md text-[#2E5E99] dark:text-white border-white/40 dark:border-white/20 hover:bg-[#2E5E99] dark:hover:bg-[#7BA4D0] hover:text-white dark:hover:text-[#0B0D0F]"
                )}
              >
                <span>Explore Solutions</span>
                <div
                  className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1",
                    isCardActive
                      ? "bg-white dark:bg-[#0B0D0F] text-[#2E5E99] dark:text-[#7BA4D0]"
                      : "bg-[#E7F0FA] dark:bg-white/10 text-[#2E5E99] dark:text-white"
                  )}
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHorizontalScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardWidth = (firstChild?.offsetWidth || 280) + 16;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < industries.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 bg-gradient-to-b from-[#E7F0FA] via-[#F4F8FC] to-[#DDEBF7] dark:from-[#071321] dark:via-[#09182b] dark:to-[#071321] text-[#0D2440] dark:text-white overflow-hidden border-y border-[#7BA4D0]/20 dark:border-white/10 transition-colors duration-500">
      {/* Isolated Soft Fluid Water Shader Background - Strictly for this section */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden select-none">
        <GlowingWave
          speed={0.80}
          color1="#7BA4D0"
          color2="#2E5E99"
          frequency={0.7}
          intensity={1.0}
          complexity={0.5}
          opacity={0.45}
          transparent={true}
        />
        {/* Subtle Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10 mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center justify-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0D2440] dark:text-[#F5F5F5] mb-3 leading-[1.15]">
            Pioneering Solutions for <br />
            <span className="text-[#2E5E99] dark:text-[#7BA4D0]">Demanding Industries</span>
          </h2>
          <p className="text-[#0D2440]/75 dark:text-[#C4C8CC] text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            From HVAC and refrigeration systems to automotive, home appliances, and mission-critical
            data center infrastructure — our precision-engineered tubular components power the
            world&apos;s most reliable OEM technologies.
          </p>
        </div>

        {/* 4 Industries Cards Grid */}
        <div
          ref={scrollRef}
          onScroll={handleHorizontalScroll}
          className="flex overflow-x-auto snap-x snap-mandatory -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 pt-2 pb-6 md:pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {industries.map((industry, idx) => (
            <IndustryCard
              key={idx}
              industry={industry}
              index={idx}
              isActive={activeIndex === idx}
              onMouseEnter={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 relative z-10">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                if (scrollRef.current && scrollRef.current.children[i]) {
                  scrollRef.current.children[i].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-[#2E5E99] dark:bg-[#7BA4D0]" : "w-1.5 bg-[#7BA4D0]/40 dark:bg-white/20"
              )}
              aria-label={`Go to industry ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
