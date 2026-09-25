"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Cog, Box } from "lucide-react";

interface ProductCapability {
  id: string;
  name: string;
  eyebrowCategory: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  metricLabel: string;
  metricValue: string;
  metricSub: string;
}

const capabilities: ProductCapability[] = [
  {
    id: "copper",
    name: "COPPER COMPONENTS",
    eyebrowCategory: "HVAC & REFRIGERATION",
    title: "High-efficiency thermal transfer & precision CNC bending.",
    description:
      "Custom-bent, end-formed, and brazed copper tubular assemblies engineered for zero-leak thermal loops, HVAC circuits, and refrigeration systems.",
    image: "/product_copper.png",
    icon: ShieldCheck,
    metricLabel: "HELIUM LEAK TESTED",
    metricValue: "< 10⁻⁸",
    metricSub: "mbar·l/s",
  },
  {
    id: "brass",
    name: "BRASS PRECISION PARTS",
    eyebrowCategory: "FLUID & PRESSURE CONTROL",
    title: "Micron-tolerance connectors, flare nuts & manifolds.",
    description:
      "High-precision CNC-machined brass connectors, flare nuts, and sockets engineered for leak-free, high-durability fittings across extreme fluid pressures.",
    image: "/product_brass.png",
    icon: Cog,
    metricLabel: "CNC YIELD",
    metricValue: "99.98%",
    metricSub: "tolerance",
  },
  {
    id: "steel",
    name: "STAINLESS STEEL TUBING",
    eyebrowCategory: "AUTOMOTIVE & INDUSTRIAL",
    title: "Extreme pressure endurance & high-corrosion resilience.",
    description:
      "Durable stainless-steel tubular assemblies engineered for automotive fuel lines, critical hydraulic circuits, and severe industrial operating environments.",
    image: "/product_steel.png",
    icon: Box,
    metricLabel: "ANNUAL CAPACITY",
    metricValue: "65,000",
    metricSub: "MT",
  },
];

export function ProductShowcase() {
  const [activeId, setActiveId] = useState<string>(capabilities[0].id);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-id");
          if (id) {
            setActiveId(id);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (id: string) => {
    const el = document.getElementById(`capability-card-${id}`);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="capabilities" className="relative bg-white dark:bg-[#071321] text-[#0D2440] dark:text-white py-20 md:py-28 transition-colors duration-300">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN: Sticky Narrative & In-Page Tabs */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            {/* Technical Eyebrow Badge */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#2E5E99] dark:bg-[#7BA4D0] inline-block" />
                <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#2E5E99] dark:text-[#7BA4D0] uppercase">
                  CAPABILITIES
                </span>
              </div>

              {/* Display Headline matching Axiom structure */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#0D2440] dark:text-white leading-[1.08] mb-5">
                Precision tubular. <br />
                <span className="font-normal text-[#2E5E99] dark:text-[#7BA4D0]">Engineered solutions.</span>
              </h2>

              {/* Narrative Subtitle */}
              <p className="text-[#0D2440]/75 dark:text-white/75 text-sm sm:text-base leading-relaxed max-w-md">
                We engineer custom solutions designed for the most demanding environments: three critical metallurgy domains, one accountable manufacturer.
              </p>
            </div>

            {/* In-Page Navigation List with Hairline Dividers */}
            <div className="border-t border-[#7BA4D0]/30 dark:border-white/15 w-full">
              {capabilities.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToCard(item.id)}
                    className="w-full text-left py-4 border-b border-[#7BA4D0]/30 dark:border-white/15 flex items-center transition-colors duration-200 group focus:outline-none cursor-pointer"
                    aria-label={`Jump to ${item.name}`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive ? (
                        <span className="w-1.5 h-1.5 bg-[#2E5E99] dark:bg-[#7BA4D0] inline-block" />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-transparent inline-block" />
                      )}
                      <span
                        className={`font-mono text-xs sm:text-sm tracking-[0.16em] uppercase transition-colors ${isActive
                          ? "text-[#0D2440] dark:text-white font-bold"
                          : "text-[#0D2440]/45 dark:text-white/45 group-hover:text-[#0D2440]/80 dark:group-hover:text-white/80 font-medium"
                          }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Stack of 3 Distinct Full Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10">
            {capabilities.map((item, idx) => (
              <div
                key={item.id}
                id={`capability-card-${item.id}`}
                data-id={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[540px] rounded-3xl overflow-hidden border border-[#7BA4D0]/30 dark:border-white/15 bg-[#0D2440] flex flex-col justify-between p-7 sm:p-9 md:p-10 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Background Image with Cinematic Dark Gradient Scrim */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                  {/* Subtle darkening overlays for crisp contrast matching Axiom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440] via-[#0D2440]/65 to-[#0D2440]/35" />
                </div>

                {/* CARD TOP ROW: Icon Box + Category Label */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Category Pill / Label */}
                  <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-white/70 uppercase font-medium">
                    {item.eyebrowCategory}
                  </span>
                </div>

                {/* CARD BOTTOM CONTENT: Clean Typography directly on the card */}
                <div className="relative z-10 max-w-xl pt-16">
                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl md:text-[32px] font-heading font-bold text-white tracking-tight leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Metric Readout */}
                  <div className="font-mono text-xs tracking-[0.18em] uppercase text-white/60 flex items-baseline gap-2">
                    <span>{item.metricLabel}</span>
                    <span className="text-white font-bold text-base sm:text-lg font-heading">
                      {item.metricValue} {item.metricSub}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

