"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { Linkedin } from "./BrandIcons";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Mr. Jignesh Panchal",
    role: "Managing Director",
    image: "/leader_1.png",
    bio: "Guiding the strategic vision and overall operations to drive J Pan Tubular Components Limited's continued global growth.",
    social: { linkedin: "#", email: "mailto:jignesh@jpan.com" }
  },
  {
    name: "Mr. Jugal Jignesh Panchal",
    role: "Whole-time Director",
    image: "/leader_2.png",
    bio: "Focusing on operational excellence and ensuring our facilities maintain the highest standards of manufacturing.",
    social: { linkedin: "#", email: "mailto:jugal@jpan.com" }
  },
  {
    name: "Mrs. Dina Panchal",
    role: "Whole-time Director",
    image: "/leader_3.png",
    bio: "Driving organizational culture and leading key administrative initiatives to support our institutional expansion.",
    social: { linkedin: "#", email: "mailto:dina@jpan.com" }
  },
  {
    name: "Mr. Navneet Bhardwaj",
    role: "Whole-time Director",
    image: "/leader_1.png",
    bio: "Spearheading new developments and strengthening our market presence across various precision engineering sectors.",
    social: { linkedin: "#", email: "mailto:navneet@jpan.com" }
  }
];

export function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < team.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-12 md:py-32 bg-white dark:bg-charcoal transition-colors duration-500 overflow-hidden"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-10 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Our Leadership</span>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Visionaries <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue to-gold dark:from-gold dark:to-white/80">
                Guiding Our Precision
              </span>
            </motion.h2>
          </div>
          <motion.p 
            className="text-muted-foreground text-base sm:text-xl max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A collective of seasoned industry experts dedicated to redefining manufacturing excellence.
          </motion.p>
        </div>

        {/* Team Grid: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-4 md:py-6 px-1.5 md:px-1 gap-4 md:gap-8 lg:gap-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {team.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                className="group flex flex-col items-center md:items-start text-center md:text-left w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center"
              >
                {/* Leader Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-silver/10 dark:bg-white/5 border border-border/50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Social links appearing on hover */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={leader.social.linkedin}
                      className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-colors shadow-lg"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={leader.social.email}
                      className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-colors shadow-lg"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                {/* Leader Info */}
                <div className="px-2 w-full">
                  <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                    {leader.role}
                  </span>
                  <h3 className="text-xl lg:text-[1.35rem] font-heading font-bold text-charcoal dark:text-white mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {team.map((_, i) => (
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
                aria-label={`Go to leader ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action or Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-24 p-8 md:p-12 rounded-3xl bg-silver/5 dark:bg-white/5 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10"
        >
          <div className="max-w-xl">
            <h4 className="text-2xl font-heading font-bold text-charcoal dark:text-white mb-4">
              Building a Legacy of Reliability
            </h4>
            <p className="text-muted-foreground">
              Our leadership team brings together decades of global experience to ensure that 
              J Pan Tubular Components Limited remains at the forefront of the industrial precision revolution.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-full font-bold dark: transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-gold/20 btn-slide-gold group">
            Join Our Team
          </button>
        </motion.div>

      </div>
    </section>
  );
}
