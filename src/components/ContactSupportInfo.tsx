"use client";

import React, { useRef, useState } from "react";
import { Clock, Calendar, ShieldCheck, Mail } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const supportMetrics = [
  {
    icon: Mail,
    label: "Digital Inquiry",
    value: "24/7 Access",
    detail: "Primary channel for formal queries"
  },
  {
    icon: Clock,
    label: "Response Window",
    value: "24-48 Hours",
    detail: "Standard institutional turnaround"
  },
  {
    icon: Calendar,
    label: "Support Hours",
    value: "Mon - Sat",
    detail: "8:30 AM – 5:30 PM IST"
  },
  {
    icon: ShieldCheck,
    label: "Authorized",
    value: "100% Nodal",
    detail: "Verified compliance channels"
  }
];

export function ContactSupportInfo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} className="pb-12 md:pb-32 bg-white dark:bg-black relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 no-scrollbar pb-6 md:pb-0"
        >
          {supportMetrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-white dark:bg-charcoal border border-border p-8 md:p-10 rounded-sm relative overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-xl hover:-translate-y-1 w-full shrink-0 snap-center md:w-auto md:shrink"
            >
               {/* Inner Glow Hover Effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative z-10">
                 <div className="flex items-center justify-between mb-10">
                    <div className="w-12 h-12 bg-silver/5 dark:bg-black/20 flex items-center justify-center rounded-sm border border-border group-hover:bg-gold group-hover:border-transparent transition-colors duration-500">
                       <metric.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="h-px w-8 bg-border group-hover:bg-gold transition-colors duration-500" />
                 </div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">{metric.label}</p>
                 <h4 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors duration-500">
                    {metric.value}
                 </h4>
                 <p className="text-[11px] font-light text-muted-foreground/80 leading-relaxed">{metric.detail}</p>
               </div>
               
               {/* Corner Accent */}
               <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Dot Indicators for Mobile Scroll */}
        {supportMetrics.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {supportMetrics.map((_, index) => (
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
