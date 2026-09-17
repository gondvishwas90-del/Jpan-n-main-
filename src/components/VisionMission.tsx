"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function VisionMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-32 bg-white dark:bg-charcoal transition-colors duration-500 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-border/50 lg:h-[700px] items-stretch"
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Left Panel - Vision */}
          <div 
            className={`relative p-8 md:p-12 lg:p-16 group border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden flex flex-col transition-all duration-700 ease-[0.16,1,0.3,1] shrink-0 ${
              hoveredSide === 'left' ? 'lg:w-[60%]' : hoveredSide === 'right' ? 'lg:w-[40%]' : 'lg:w-[50%]'
            } w-full`}
            onMouseEnter={() => setHoveredSide("left")}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/industrial_vision_mission_1778827812060.png"
                alt="Vision Background"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/80 to-charcoal/60" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col min-w-0">
              {/* Top Row: Icon + Tag */}
              <div className="flex justify-between items-start mb-16">
                <div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:border-gold/50 shrink-0">
                  <Eye className="w-5 h-5 text-gold" />
                </div>
                <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-[0.2em] shrink-0 whitespace-nowrap">
                  ASPIRATION
                </div>
              </div>
              
              <div className="overflow-hidden">
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 whitespace-nowrap">OUR VISION</h3>
                <p className={`text-white/80 text-sm md:text-base leading-relaxed mb-10 transition-opacity duration-500 ${hoveredSide === 'right' ? 'lg:opacity-0' : 'opacity-100'}`}>
                  To be the most admired and preferred Tubular & Allied Component manufacturer in HVAC/Transportation industry of India and overseas markets.
                </p>
                
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 transition-opacity duration-500 ${hoveredSide === 'right' ? 'lg:opacity-0' : 'opacity-100'}`}>
                  {[
                    "Industry Leadership", 
                    "Global Presence", 
                    "Performance Excellence", 
                    "Sustainable Future"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/90 text-sm font-medium whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              

            </div>
          </div>

          {/* Right Panel - Mission */}
          <div 
            className={`relative p-8 md:p-12 lg:p-16 group overflow-hidden flex flex-col transition-all duration-700 ease-[0.16,1,0.3,1] shrink-0 ${
              hoveredSide === 'right' ? 'lg:w-[60%]' : hoveredSide === 'left' ? 'lg:w-[40%]' : 'lg:w-[50%]'
            } w-full`}
            onMouseEnter={() => setHoveredSide("right")}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/engineering_precision_facility_1778657209621.png"
                alt="Mission Background"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deepblue/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/80 to-charcoal/60" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col min-w-0">
              {/* Top Row: Icon + Tag */}
              <div className="flex justify-between items-start mb-16">
                <div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:border-gold/50 shrink-0">
                  <Rocket className="w-5 h-5 text-gold" />
                </div>
                <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-[0.2em] shrink-0 whitespace-nowrap">
                  PURPOSE
                </div>
              </div>
              
              <div className="overflow-hidden">
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 whitespace-nowrap">OUR MISSION</h3>
                <div className={`text-white/80 text-sm md:text-base leading-relaxed mb-10 transition-opacity duration-500 ${hoveredSide === 'left' ? 'lg:opacity-0' : 'opacity-100'} space-y-4`}>
                  <p>
                    We shall be competitive in cost, quality, delivery and highly responsive to customers in HVAC/Transportation industry for Tubular & Allied Components by:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-white/70">
                    <li>Usage of innovative processes in manufacturing</li>
                    <li>Harnessing and constantly rewarding the human potential of every individual in the organization</li>
                  </ul>
                  <p>
                    We shall constantly endeavor to provide adequate return to all the stakeholders and be an environment friendly, socially responsible & ethical organization.
                  </p>
                </div>
                
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 transition-opacity duration-500 ${hoveredSide === 'left' ? 'lg:opacity-0' : 'opacity-100'}`}>
                  {[
                    "Innovative Processes", 
                    "Human Potential", 
                    "Social Responsibility", 
                    "Ethical Organization"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/90 text-sm font-medium whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
