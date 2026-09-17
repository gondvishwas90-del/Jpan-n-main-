"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = useMemo(() => [
    { label: "Precision Rate", value: "99.98%", icon: Cpu },
    { label: "Global Reach", value: "10+ Countries", icon: Zap },
    { label: "Certification", value: "ISO 9001", icon: ShieldCheck },
  ], []);

  return (
    <section className="relative min-h-[70vh] pt-32 pb-20 lg:pt-40 lg:pb-24 flex items-center bg-[#0D2440] overflow-hidden">
      {/* Visual Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Precision Engineering Excellence"
          fill
          priority
          className="object-cover object-center brightness-[0.85] md:brightness-[0.95]"
        />
        {/* Soft elegant tint across the entire image */}
        <div className="absolute inset-0 bg-[#0D2440]/5 mix-blend-multiply" />
        
        {/* Text readability gradients - smooth and natural */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2440]/50 via-[#0D2440]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/50 via-transparent to-transparent opacity-40" />
        
        {/* Cinematic Grain Effect */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className={cn(
              "inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold/90">
                Institutional Precision since 1998
              </span>
            </div>

            <h1 className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-tight md:leading-[1.15] tracking-tight mb-6 transition-all duration-1000 delay-300 max-w-3xl xl:max-w-4xl",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              Precision Engineered Copper, Brass & Aluminum Components for <br className="hidden lg:block" />
              <span className="text-gold italic font-light block lg:inline mt-2 lg:mt-0">
                Global HVAC Leaders
              </span>
            </h1>
            
            <p className={cn(
              "text-sm md:text-base text-silver/70 mb-10 leading-relaxed max-w-xl xl:max-w-2xl transition-all duration-1000 delay-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Delivering high-performance tubular and machined solutions. Backed by advanced manufacturing, strict quality control, and unparalleled supply chain reliability.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all duration-1000 delay-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Link
                href="/contact#digital-inquiry"
                className="group relative px-8 py-4 bg-charcoal border border-transparent overflow-hidden rounded-sm transition-all duration-500 shadow-[0_0_30px_-5px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_-5px_rgba(0,0,0,0.6)] active:scale-95 hover:scale-[1.02] flex items-center justify-center w-full sm:w-auto btn-slide-gold group"
              >
                <div className="relative z-10 flex items-center gap-3 text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-black">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
                </div>
                
              </Link>
              
              <Link
                href="/products"
                className="group relative px-8 py-4 border border-silver/40 hover:border-white/60 hover:bg-silver/10 overflow-hidden rounded-sm transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto active:scale-95 hover:scale-[1.02]"
              >
                <div className="relative z-10 flex items-center gap-3 text-silver group-hover:text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 hidden sm:block group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 absolute -right-6 group-hover:relative group-hover:right-0" />
                </div>
                
              </Link>
            </div>

            <div className={cn(
              "mt-8 flex items-center gap-4 transition-all duration-1000 delay-1000",
              isLoaded ? "opacity-100" : "opacity-0"
            )}>
              <ShieldCheck className="w-5 h-5 text-gold" />
              <p className="text-xs text-white/80 font-medium tracking-widest uppercase">
                Trusted by <span className="text-white font-bold">Daikin, LG & Haier</span>
              </p>
            </div>
          </div>

          {/* Floating Stats / Side Element */}
          <div className="lg:col-span-5 xl:col-span-4 hidden lg:block relative mt-12 lg:mt-0">
            <div 
              className={cn(
                "p-10 bg-[#0D2440]/40 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl transition-all duration-1000 delay-1000",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{
                transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px)`,
              }}
            >
              <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-cover pointer-events-none rounded-2xl" />
              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-gold font-bold text-[10px] uppercase tracking-[0.3em]">Technical Metrics</h4>
                  <div className="flex items-center gap-2">
                     <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-[9px] font-bold text-silver/40 uppercase tracking-[0.2em]">Active</span>
                  </div>
                </div>
                
                <div className="grid gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="group/stat">
                      <div className="flex items-center gap-3 mb-2">
                        <stat.icon className="w-4 h-4 text-silver/40 group-hover/stat:text-gold transition-colors" />
                        <span className="text-[10px] font-bold text-silver/50 uppercase tracking-[0.2em]">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-heading font-bold text-white tracking-tight">{stat.value}</div>
                      <div className="w-full h-[1px] bg-white/10 mt-4 group-hover/stat:bg-gold/30 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
