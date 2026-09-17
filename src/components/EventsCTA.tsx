"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Calendar, Globe } from "lucide-react";

export function EventsCTA() {
  return (
    <section className="py-16 lg:py-20 bg-deepblue relative overflow-hidden">
      {/* HUD Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        {/* Floating Technical Markers */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 flex flex-col gap-2 items-end"
        >
          <div className="w-12 h-[1px] bg-gold/50" />
          <span className="text-[8px] font-mono text-gold/50 tracking-tighter uppercase font-bold">LAT: 19.0760° N</span>
          <span className="text-[8px] font-mono text-gold/50 tracking-tighter uppercase font-bold">LON: 72.8777° E</span>
        </motion.div>

        {/* Subtle Light Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-white/5 rounded-full blur-[100px] translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden group"
        >
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-3xl -z-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Side: Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Industry Engagements</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight tracking-tight">
                Connect With Our Experts <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/60">At Future Events</span>
              </h2>
              
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Planning to visit an upcoming industry fair? Schedule an exclusive 
                consultation with our engineering team to explore bespoke solutions.
              </p>
            </div>

            {/* Right Side: Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link
                href="/contact#enquiry-form"
                className="group/btn px-8 py-4 bg-white text-charcoal font-black text-xs uppercase tracking-widest rounded-full flex items-center gap-3 transition-all duration-500 shadow-xl shadow-white/10 hover:scale-105"
              >
                Schedule Session
                <div className="w-6 h-6 rounded-full bg-charcoal/10 flex items-center justify-center group-hover/btn:bg-charcoal/20 group-hover/btn:rotate-45 transition-all">
                  <ArrowRight className="w-3 h-3 text-charcoal" />
                </div>
              </Link>
              
              <Link
                href="/gallery"
                className="px-8 py-4 bg-white text-charcoal font-black text-xs uppercase tracking-widest rounded-full transition-all duration-500 shadow-xl shadow-white/10 hover:scale-105"
              >
                View Facilities
              </Link>
            </div>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 p-4 opacity-10">
             <Globe className="w-32 h-32 text-white rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
