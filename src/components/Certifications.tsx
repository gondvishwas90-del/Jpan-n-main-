"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Star, 
  Medal, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Building2, 
  Globe, 
  Cpu, 
  Leaf 
} from "lucide-react";

const certs = [
  { 
    name: "On Time Delivery Award", 
    icon: Clock, 
    desc: "Danfoss | 2024" 
  },
  { 
    name: "Best Quality Award", 
    icon: Trophy, 
    desc: "Haier | 2025" 
  },
  { 
    name: "Appreciation for EHS Activities", 
    icon: ShieldCheck, 
    desc: "Samsung" 
  },
  { 
    name: "Best Quality Award", 
    icon: Award, 
    desc: "Haier | 2024" 
  },
  { 
    name: "Excellence Award", 
    icon: Star, 
    desc: "Haier | 2022" 
  },
  { 
    name: "Valued Member Award", 
    icon: Building2, 
    desc: "Indian Industries Association" 
  },
  { 
    name: "ACREX Participation", 
    icon: Globe, 
    desc: "ACREX India | New Delhi 2024" 
  },
  { 
    name: "Quality Contract Appreciation", 
    icon: FileCheck, 
    desc: "Haier | 2024" 
  },
  { 
    name: "Best Supplier Award", 
    icon: Star, 
    desc: "Bluestar | 2022" 
  },
  { 
    name: "Best Quality Award", 
    icon: Medal, 
    desc: "Haier | 2022" 
  },
  { 
    name: "Synchronized Production System Level 4", 
    icon: Cpu, 
    desc: "LG | 2012" 
  },
  { 
    name: "GreenCo Bronze Rating", 
    icon: Leaf, 
    desc: "GreenCo | 2026" 
  },
  { 
    name: "Supplier Excellence Award", 
    icon: Trophy, 
    desc: "Wabtec Corporation | 2018" 
  },
];

const CertCard = ({ cert }: { cert: (typeof certs)[number] }) => {
  return (
    <div className="flex-shrink-0 w-[260px] lg:w-[300px] group px-3 lg:px-4">
      <div className="relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden min-h-[190px] lg:min-h-[230px] flex flex-col justify-center">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-silver/5 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-500">
            <cert.icon className="w-5 h-5 text-silver group-hover:text-charcoal transition-colors duration-500" />
          </div>
          
          <h4 className="text-xs lg:text-sm font-bold text-white uppercase tracking-wider mb-2 group-hover:text-gold transition-colors leading-snug whitespace-normal">
            {cert.name}
          </h4>
          
          <p className="text-[9px] text-silver/40 uppercase font-bold tracking-widest leading-relaxed whitespace-normal">
            {cert.desc}
          </p>
        </div>
        
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-6 h-6 lg:w-8 lg:h-8 border-t border-r border-white/10 group-hover:border-gold/40 rounded-tr-2xl transition-colors" />
      </div>
    </div>
  );
};

export function Certifications() {
  const containerRef = useRef(null);

  // For the infinite marquee effect, we duplicate the array
  const duplicatedCerts = [...certs, ...certs, ...certs];

  return (
    <section 
      ref={containerRef}
      className="py-12 bg-[#050505] overflow-hidden border-y border-white/5"
    >
      <div className="container-custom relative z-10 mb-8 lg:mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="max-w-md text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-2 justify-center md:justify-start"
            >
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Awards & Achievements</span>
            </motion.div>
            
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight">
              Industry Recognition. <span className="text-silver/40">Global Excellence.</span>
            </h2>
          </div>
          
          <div className="hidden md:block">
            <p className="text-white text-[9px] font-bold uppercase tracking-widest text-right max-w-[200px]">
              Honored by global councils, trade bodies, and OEM partners worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden py-2">
        <motion.div 
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ 
            duration: 55, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedCerts.map((cert, idx) => (
            <CertCard key={idx} cert={cert} />
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
      </div>
      
    </section>
  );
}
