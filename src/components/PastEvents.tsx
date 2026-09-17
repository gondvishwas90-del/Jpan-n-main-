"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Camera, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pastEvents = [
  {
    title: "Chillventa 2024",
    date: "October 2024",
    location: "Nuremberg, Germany",
    desc: "Showcasing advanced manifold solutions for the European refrigeration market.",
    image: "/images/about-manufacturing.png"
  },
  {
    title: "IREE 2023",
    date: "November 2023",
    location: "New Delhi, India",
    desc: "Presenting precision tubular components for the high-growth rail transportation sector.",
    image: "/images/industry-auto.png"
  },
  {
    title: "AHR Expo 2023",
    date: "February 2023",
    location: "Atlanta, USA",
    desc: "A successful showcase of custom-engineered copper assemblies for global HVAC OEMs.",
    image: "/images/industry-hvac.png"
  },
  {
    title: "MCE 2022",
    date: "June 2022",
    location: "Milan, Italy",
    desc: "Connecting with European cooling specialists and showcasing our fabrication excellence.",
    image: "/images/advanced_manufacturing_facility_1778250027919.png"
  }
];

interface PastEventsProps {
  onViewDetails: (event: any) => void;
}

export function PastEvents({ onViewDetails }: PastEventsProps) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < pastEvents.length && newIndex !== activeIndex) {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.1 } }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-charcoal relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-silver/10 dark:bg-black/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 lg:mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Our Legacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white tracking-tight leading-tight">
              Past <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue to-deepblue/60 dark:from-gold dark:to-gold/60 italic font-medium">Participation</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg lg:max-w-sm font-light leading-relaxed border-l border-border pl-6"
          >
            A track record of excellence across the world's leading industrial 
            and technical exhibitions.
          </motion.p>
        </div>

        {/* Past Event Cards: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= lg) */}
        <div className="flex flex-col justify-between w-full">
          <motion.div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-4 md:py-6 px-1.5 md:px-1 gap-4 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {pastEvents.map((event, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="group flex flex-col bg-white dark:bg-charcoal/40 border border-border/50 hover:border-gold/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gold/5 transition-all duration-700 h-full relative w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-[0.85] group-hover:brightness-100"
                  />
                  
                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-deepblue/10 dark:bg-black/30 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Archive Badge */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-xl flex items-center gap-2 group-hover:bg-gold/20 transition-colors duration-500">
                    <Camera className="w-3 h-3 text-gold" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">Archive</span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col relative bg-white dark:bg-transparent">
                  {/* Hover line effect */}
                  <div className="absolute top-0 left-8 w-12 h-[2px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">{event.date}</span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors duration-500">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-gold/60 transition-colors shrink-0" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{event.location}</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                    {event.desc}
                  </p>
                  
                  <button 
                    onClick={() => onViewDetails({
                      ...event,
                      highlights: [
                        "Successful booth with 500+ visitors",
                        "Showcased new copper bend range",
                        "Networking with key OEM partners"
                      ],
                      gallery: [
                        event.image,
                        "/images/about-manufacturing.png",
                        "/images/industry-hvac.png",
                        "/images/quality-hero.png"
                      ]
                    })}
                    className="mt-auto group/btn flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal dark:text-white hover:text-gold transition-colors duration-300 self-start"
                  >
                    <span className="border-b border-gold/30 group-hover/btn:border-gold pb-1 transition-colors">View Gallery</span>
                    <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 text-gold" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {pastEvents.map((_, i) => (
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
                aria-label={`Go to past event card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
