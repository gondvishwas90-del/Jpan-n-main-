"use client";

import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export function BlogCTA() {
  return (
    <section className="py-16 bg-deepblue relative overflow-hidden text-white">
      {/* Decorative Texture Backdrop */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/blueprint.png')] bg-repeat opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-sm text-center max-w-5xl mx-auto backdrop-blur-sm">
          <div className="w-14 h-14 bg-gold flex items-center justify-center rounded-full mx-auto mb-6 shadow-2xl">
            <BookOpen className="w-7 h-7 text-charcoal" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Knowledge is <span className="text-gold">Power</span>
          </h2>
          
          <p className="text-silver/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Stay ahead of industrial trends. Subscribe to our monthly technical 
            digest for expert insights on precision engineering and manufacturing innovation.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your professional email"
              className="flex-grow bg-white/5 border border-white/10 rounded-sm px-6 py-3.5 text-white placeholder:text-silver/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button 
              type="submit"
              className="px-8 py-3.5 bg-gold text-charcoal font-bold rounded-sm flex items-center justify-center gap-3 transition-all whitespace-nowrap shadow-xl text-sm btn-slide-white group"
            >
              Join the Digest
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          
          <p className="mt-6 text-[10px] text-silver/40 uppercase tracking-[0.2em]">
            Curated monthly updates. No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
