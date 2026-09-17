"use client";

import React, { useRef, useState } from "react";
import { Camera, Users, Zap, Heart } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const cultureImages = [
  { 
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", 
    alt: "Precision Engineering", 
    span: "lg:col-span-2 lg:row-span-2" 
  },
  { 
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", 
    alt: "Collaborative Workspace", 
    span: "lg:col-span-1 lg:row-span-1" 
  },
  { 
    src: "https://images.unsplash.com/photo-1565439390118-2831b14249bf?q=80&w=2070&auto=format&fit=crop", 
    alt: "Advanced Manufacturing", 
    span: "lg:col-span-1 lg:row-span-1" 
  },
  { 
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", 
    alt: "Team Synergy", 
    span: "lg:col-span-2 lg:row-span-1" 
  }
];

export function CareersCulture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  const galleryVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-white dark:bg-black overflow-hidden relative border-b border-border"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Culture Pulse</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] mb-8">
              Life at <br />
              <span className="text-gold italic font-light">J Pan Tubular Components Limited</span>
            </h2>
            
            <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-xl">
              We foster an environment where precision meets passion. Explore 
              our vibrant workplace culture through the eyes of those who 
              build the legacy every day.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-10 lg:gap-14"
          >
             <div className="flex flex-col items-center group cursor-pointer">
                <Users className="w-6 h-6 text-charcoal/30 dark:text-white/30 mb-3 transition-all duration-300 group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125" strokeWidth={1.5} />
                <span className="text-[10px] font-bold text-charcoal/50 dark:text-white/50 uppercase tracking-[0.2em] group-hover:text-gold transition-colors duration-300">Collaborative</span>
             </div>
             <div className="flex flex-col items-center group cursor-pointer">
                <Zap className="w-6 h-6 text-charcoal/30 dark:text-white/30 mb-3 transition-all duration-300 group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125" strokeWidth={1.5} />
                <span className="text-[10px] font-bold text-charcoal/50 dark:text-white/50 uppercase tracking-[0.2em] group-hover:text-gold transition-colors duration-300">Innovative</span>
             </div>
             <div className="flex flex-col items-center group cursor-pointer">
                <Heart className="w-6 h-6 text-charcoal/30 dark:text-white/30 mb-3 transition-all duration-300 group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125" strokeWidth={1.5} />
                <span className="text-[10px] font-bold text-charcoal/50 dark:text-white/50 uppercase tracking-[0.2em] group-hover:text-gold transition-colors duration-300">Inclusive</span>
             </div>
          </motion.div>
        </div>

        {/* Masonry Gallery */}
        <motion.div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          variants={galleryVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-[300px_300px] lg:grid-rows-[400px_400px] gap-6 no-scrollbar pb-6 md:pb-0 h-[350px] md:h-auto"
        >
           {cultureImages.map((img, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={cn("relative group overflow-hidden rounded-sm bg-charcoal shadow-2xl transition-all duration-700 w-full shrink-0 snap-center h-full md:shrink", img.span)}
              >
                {/* Image Component */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] grayscale-[0.5] group-hover:grayscale-0 brightness-[0.7] group-hover:brightness-100"
                />
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* Meta Data Box */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-sm border border-white/20 flex items-center justify-center">
                        <Camera className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      </div>
                      <span className="text-white font-medium text-sm tracking-widest">{img.alt}</span>
                   </div>
                </div>

                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-colors duration-700 pointer-events-none rounded-sm" />
              </motion.div>
           ))}
        </motion.div>

        {/* Dot Indicators for Mobile Scroll */}
        {cultureImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {cultureImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-gold w-6" : "bg-charcoal/20 dark:bg-silver/20"
                )}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollContainerRef.current.clientWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
