"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Cog, Box, CheckCircle2 } from "lucide-react";

interface ProductCapability {
  id: string;
  index: string;
  name: string;
  eyebrowCategory: string;
  subCategory: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  specPill: string;
  href: string;
}

const capabilities: ProductCapability[] = [
  {
    id: "copper",
    index: "01",
    name: "Copper Components",
    eyebrowCategory: "HVAC & Refrigeration",
    subCategory: "OXYGEN-FREE COPPER · C12200",
    title: "High-efficiency thermal transfer & precision CNC bending.",
    description: "Custom-bent, end-formed, and brazed copper tubular assemblies engineered for zero-leak thermal loops, HVAC circuits, and refrigeration systems.",
    image: "/product_copper.png",
    icon: ShieldCheck,
    metricLabel: "Helium Leak Tested",
    metricValue: "< 10⁻⁸",
    metricSub: "mbar·l/s integrity",
    specPill: "99.9% Pure Copper",
    href: "/products?category=Copper%20Components"
  },
  {
    id: "brass",
    index: "02",
    name: "Brass Precision Parts",
    eyebrowCategory: "Fluid & Pressure Control",
    subCategory: "HIGH-TOLERANCE EXTRUDED BRASS",
    title: "Micron-tolerance connectors, flare nuts & manifolds.",
    description: "High-precision CNC-machined brass connectors, flare nuts, and sockets engineered for leak-free, high-durability fittings across extreme fluid pressures.",
    image: "/product_brass.png",
    icon: Cog,
    metricLabel: "CNC Yield",
    metricValue: "99.98%",
    metricSub: "precision tolerance",
    specPill: "Micron Accuracy",
    href: "/products?category=Brass%20Components"
  },
  {
    id: "steel",
    index: "03",
    name: "Stainless Steel Tubing",
    eyebrowCategory: "Automotive & Industrial",
    subCategory: "AUSTENITIC & FERRITIC GRADES",
    title: "Extreme pressure endurance & high-corrosion resilience.",
    description: "Durable stainless-steel tubular assemblies engineered for automotive fuel lines, critical hydraulic circuits, and severe industrial operating environments.",
    image: "/product_steel.png",
    icon: Box,
    metricLabel: "Annual Capacity",
    metricValue: "65,000",
    metricSub: "metric tonnes",
    specPill: "High Pressure Rated",
    href: "/products"
  }
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress through the entire tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Switch active item seamlessly based on natural page scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  // Click on any tab smooth-scrolls the window to that item's scroll position
  const scrollToTab = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollDistance = containerRef.current.scrollHeight - window.innerHeight;
    
    // Position target in center of progress band
    const progressTarget = (index + 0.5) / capabilities.length;
    const targetY = containerTop + progressTarget * totalScrollDistance;
    
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  const activeItem = capabilities[activeIndex];

  return (
    <section 
      id="capabilities"
      ref={containerRef}
      // Height provides ample scroll track so items cycle on scroll
      className="relative h-[260vh] bg-white text-[#0D2440]"
    >
      {/* Sticky Viewport Container: Stays pinned while scrolling through the 260vh track */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="container-custom relative z-10 w-full py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Narrative & Scroll-Linked Tabs */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Technical Eyebrow Badge */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1.5 h-1.5 bg-[#2E5E99] inline-block shadow-[0_0_8px_rgba(46,94,153,0.5)]" />
                  <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#2E5E99] uppercase">
                    CAPABILITIES
                  </span>
                </div>

                {/* Display Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-heading font-bold tracking-tight text-[#0D2440] leading-[1.08] mb-5">
                  Precision tubular. <br />
                  <span className="text-[#2E5E99] font-normal">Engineered solutions.</span>
                </h2>

                {/* Narrative Description */}
                <p className="text-[#0D2440]/75 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                  We engineer custom solutions designed for the most demanding environments: three critical metallurgy domains, one accountable manufacturer.
                </p>
              </div>

              {/* Scroll-Linked In-Page Nav Tabs */}
              <div className="border-t border-[#7BA4D0]/30 w-full relative">
                {capabilities.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToTab(idx)}
                      className="w-full text-left py-4 border-b border-[#7BA4D0]/30 flex items-center justify-between group transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2E5E99]"
                      aria-label={`Scroll to ${item.name}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-3 flex items-center justify-center">
                          {isActive ? (
                            <motion.span 
                              layoutId="activeScrollDot"
                              className="w-1.5 h-1.5 bg-[#2E5E99] inline-block shadow-[0_0_6px_#2E5E99]" 
                              transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            />
                          ) : (
                            <span className="w-1 h-1 bg-[#7BA4D0]/60 rounded-full group-hover:bg-[#2E5E99] transition-colors" />
                          )}
                        </div>
                        <span 
                          className={`font-mono text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold transition-colors duration-300 ${
                            isActive 
                              ? "text-[#0D2440] font-bold" 
                              : "text-[#0D2440]/50 group-hover:text-[#0D2440]/80"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>

                      <span className={`text-[11px] font-mono tracking-widest transition-colors ${
                        isActive ? "text-[#2E5E99] font-bold" : "text-[#7BA4D0]/70 group-hover:text-[#2E5E99]"
                      }`}>
                        {item.index}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Scroll Instruction Hint & Catalog Link */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#0D2440]/60 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full border border-[#2E5E99] animate-ping" />
                  <span>Scroll to cycle capabilities</span>
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#2E5E99] hover:text-[#0D2440] transition-colors group font-semibold"
                >
                  <span>Catalog</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Light-Themed Showcase Card */}
            <div className="lg:col-span-7">
              <div className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[560px] rounded-3xl overflow-hidden border border-[#7BA4D0]/40 bg-white shadow-2xl shadow-[#0D2440]/10 flex flex-col justify-between p-6 sm:p-8 md:p-9">
                
                {/* Dynamic Background Image with Smooth Scroll Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-0"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    
                    {/* Balanced Lighting Gradients ensuring crisp contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/90 via-[#0D2440]/55 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#E7F0FA]/30 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* CARD TOP ROW: Floating Badges */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md border border-[#7BA4D0]/40 flex items-center justify-center text-[#2E5E99] shadow-md">
                    <activeItem.icon className="w-5 h-5" />
                  </div>

                  {/* Category Pill */}
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#7BA4D0]/40 text-[10px] sm:text-xs font-mono tracking-[0.16em] uppercase text-[#0D2440] font-medium shadow-sm">
                    {activeItem.eyebrowCategory}
                  </div>
                </div>

                {/* CARD BOTTOM CONTENT: Floating Light Content Card */}
                <div className="relative z-10 pt-28 sm:pt-36">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#7BA4D0]/30 shadow-xl shadow-[#0D2440]/15"
                    >
                      {/* Material Specification Pill */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E7F0FA] border border-[#7BA4D0]/40 text-[10px] font-mono tracking-wider uppercase text-[#2E5E99] font-bold mb-2.5">
                        <CheckCircle2 className="w-3 h-3 text-[#2E5E99]" />
                        <span>{activeItem.subCategory}</span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#0D2440] tracking-tight leading-[1.18] mb-2.5">
                        {activeItem.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-[#0D2440]/75 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl">
                        {activeItem.description}
                      </p>

                      {/* Hairline Divider */}
                      <div className="w-full h-px bg-[#7BA4D0]/25 mb-4" />

                      {/* Bottom Metric & Action Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        {/* Metric Readout */}
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#2E5E99] font-semibold mb-0.5">
                            {activeItem.metricLabel}
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl sm:text-2xl font-heading font-bold text-[#0D2440] tracking-tight">
                              {activeItem.metricValue}
                            </span>
                            <span className="text-xs font-mono text-[#0D2440]/60">
                              {activeItem.metricSub}
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                          href={activeItem.href}
                          className="group/btn inline-flex items-center justify-between sm:justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#2E5E99] hover:bg-[#0D2440] text-[#E7F0FA] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
                        >
                          <span>Explore Specifications</span>
                          <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
