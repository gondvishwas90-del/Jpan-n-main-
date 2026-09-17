"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Factory, ArrowRight, Compass, Globe, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const locations = [
  {
    id: "greater-noida",
    type: "Corporate HO & Plant VI",
    city: "Greater Noida 1",
    state: "Uttar Pradesh",
    address: "B-2/31, 32 & 42, Surajpur Site B Industrial Block C Road, Greater Noida, UP 201306",
    icon: Building2,
    coords: { top: "24%", left: "56%" },
    labelDirection: "right"
  },
  {
    id: "greater-noida-a2",
    type: "Manufacturing Unit v2",
    city: "Greater Noida 2",
    state: "Uttar Pradesh",
    address: "A2/1A, Surajpur Site B Industrial Block G Rd, Block A, Industrial Area, Surajpur, Greater Noida, Uttar Pradesh 201306",
    icon: Factory,
    coords: { top: "20%", left: "59%" },
    labelDirection: "right"
  },
  {
    id: "neemrana",
    type: "Manufacturing Unit v3",
    city: "Neemrana",
    state: "Rajasthan",
    address: "Plot No. E-16 Industrial Area, Kolila Joga, Neemrana, Rajasthan 301020",
    icon: Factory,
    coords: { top: "30%", left: "38%" },
    labelDirection: "right"
  },
  {
    id: "sanand",
    type: "Manufacturing Unit v4",
    city: "Sanand (Ahmedabad)",
    state: "Gujarat",
    address: "E-235, SANAND Industrial Estate, Ahmedabad, Gujarat 382170",
    icon: Factory,
    coords: { top: "46%", left: "30%" },
    labelDirection: "right"
  },
  {
    id: "ranjangaon",
    type: "Manufacturing Unit v5",
    city: "Ranjangaon (Pune)",
    state: "Maharashtra",
    address: "C-9 & C-10, Ranjangaon MIDC, Shirur, Maharashtra 412220",
    icon: Factory,
    coords: { top: "58%", left: "40%" },
    labelDirection: "right"
  },
  {
    id: "jigani",
    type: "Manufacturing Unit v6",
    city: "Jigani (Bengaluru)",
    state: "Karnataka",
    address: "Jigani Hobli, Bommandahalli, Bengaluru, Karnataka 560106",
    icon: Factory,
    coords: { top: "72%", left: "48%" },
    labelDirection: "right"
  }
];

export function AboutPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < locations.length && newIndex !== activeLocation) {
      setActiveLocation(newIndex);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20 md:py-28 bg-white dark:bg-charcoal overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(var(--color-charcoal) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />

      <div className="container-custom relative z-10">
        
        {/* Full-Width Section Header Above Map */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <Compass className="w-5 h-5 text-gold animate-spin-slow" />
            </div>
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">Pan-India Presence</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal dark:text-white leading-[1.1] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategically Located <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue via-gold to-gold dark:from-gold dark:to-white">
              Manufacturing Facilities
            </span>
          </motion.h2>

          <motion.p 
            className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            With 6 advanced manufacturing facilities across key industrial hubs in India, J Pan Tubular delivers high-volume precision components with zero-delay logistics to major global OEMs.
          </motion.p>
        </div>

        {/* 2-Column Split: 6 Locations List (Left) & Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* 6 Location Cards (Left Side): Single visible card at a time with horizontal snap scroll on mobile */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory py-4 lg:py-1 px-1.5 lg:px-1 gap-4 lg:space-y-3.5 lg:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {locations.map((loc, idx) => {
                const isActive = activeLocation === idx;
                return (
                  <motion.div
                    key={loc.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                    onMouseEnter={() => setActiveLocation(idx)}
                    onClick={() => setActiveLocation(idx)}
                    className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden w-full min-w-full lg:min-w-0 lg:w-full shrink-0 snap-center flex-1 flex flex-col justify-center ${
                      isActive 
                        ? "bg-gold/[0.06] border-gold shadow-lg shadow-gold/10 lg:-translate-y-0.5" 
                        : "bg-silver/5 dark:bg-white/[0.03] border-border/50 hover:border-gold/40 hover:bg-silver/10"
                    }`}
                  >
                    {/* Active Indicator Left Bar */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gold transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`} 
                    />

                    <div className="flex gap-4 items-center pl-1">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isActive ? "bg-gold text-charcoal border-gold shadow-md" : "bg-white dark:bg-charcoal text-deepblue dark:text-gold border-border/60"
                      }`}>
                        <loc.icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">{loc.type}</span>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{loc.state}</span>
                        </div>
                        <div className="text-base sm:text-lg font-heading font-bold text-charcoal dark:text-white leading-snug">{loc.city}</div>
                        <p className="text-xs text-muted-foreground font-medium leading-normal">{loc.address}</p>
                      </div>

                      <div className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "opacity-40 group-hover:opacity-100"}`}>
                        <ArrowRight className={`w-4 h-4 ${isActive ? "text-gold" : "text-muted-foreground"}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-3 z-10">
              {locations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveLocation(i);
                    if (cardsRef.current && cardsRef.current.children[i]) {
                      cardsRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeLocation === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                  }`}
                  aria-label={`Go to location ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Interactive Map Container (Right Side) */}
          <motion.div 
            className="lg:col-span-7 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-auto min-h-[580px] lg:h-full rounded-3xl overflow-hidden border border-border/60 shadow-2xl bg-[#08101a] group"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Background Map Graphic */}
            <div className="absolute inset-0 bg-[#08101a]">
              <Image
                src="/industrial_map.png"
                alt="J Pan Tubular Manufacturing Facilities Map"
                fill
                className="object-cover opacity-50 contrast-125 transition-transform duration-1000 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08101a] via-transparent to-[#08101a]/60" />
            </div>

            {/* Map Top Title Overlay Header */}
            <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="px-4 py-2 bg-charcoal/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                <Globe className="w-4 h-4 text-gold animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">India Manufacturing Network</span>
              </div>
              <div className="px-3 py-1.5 bg-gold/20 backdrop-blur-md rounded-full border border-gold/40 text-[10px] font-extrabold text-gold uppercase tracking-wider">
                6 Active Plants
              </div>
            </div>

            {/* Non-Overlapping Interactive HUD Pins */}
            <div className="absolute inset-0 pointer-events-none">
              {locations.map((loc, idx) => {
                const isActive = activeLocation === idx;
                const isLeft = loc.labelDirection === "left";

                return (
                  <div
                    key={loc.id}
                    className={`absolute transition-all duration-500 ${isActive ? "z-40" : "z-20"}`}
                    style={{ top: loc.coords.top, left: loc.coords.left }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulsing Aura */}
                      <div className={`absolute -inset-3 rounded-full transition-all duration-500 ${
                        isActive ? "bg-gold/40 animate-ping" : "bg-gold/15"
                      }`} />
                      
                      {/* Core Pin Dot */}
                      <button
                        type="button"
                        onClick={() => setActiveLocation(idx)}
                        onMouseEnter={() => setActiveLocation(idx)}
                        className={`pointer-events-auto relative w-5 h-5 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-transform duration-300 ${
                          isActive ? "bg-gold scale-125 shadow-gold/50" : "bg-[#0d2440] hover:scale-110"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-charcoal" : "bg-gold"}`} />
                      </button>

                      {/* Badge Label */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
                          isLeft ? "right-7 text-right" : "left-7 text-left"
                        } ${isActive ? "scale-105 z-50 opacity-100" : "opacity-90 hover:opacity-100"}`}
                      >
                        <div
                          className={`px-3 py-1.5 rounded-xl bg-charcoal/90 backdrop-blur-md border shadow-xl transition-all w-max max-w-[200px] ${
                            isActive
                              ? "border-gold shadow-gold/20 ring-1 ring-gold/40"
                              : "border-white/15 hover:border-gold/50"
                          }`}
                        >
                          <div className="text-[9px] font-extrabold text-gold uppercase tracking-wider leading-tight">
                            {loc.city}
                          </div>
                          <div className="text-[10px] font-bold text-white leading-tight">
                            {loc.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact Non-Obstructive Floating Badges at Bottom Corners */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3.5 py-2 bg-charcoal/80 backdrop-blur-md rounded-xl border border-white/10 text-[10px] font-bold text-gold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Quality Inspected</span>
            </div>

            <div className="absolute bottom-6 right-6 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3.5 py-2 bg-charcoal/80 backdrop-blur-md rounded-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-gold" />
              <span>Centralized Logistics</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
