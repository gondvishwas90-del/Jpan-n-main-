"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-white dark:bg-charcoal overflow-hidden transition-colors duration-500"
    >
      {/* Background Text / Decorative */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]) }}
          className="absolute -top-24 right-10 md:right-32 text-[20rem] md:text-[30rem] font-serif leading-none text-charcoal/[0.02] dark:text-white/[0.02] select-none"
        >
          &rdquo;
        </motion.div>
        {/* Subtle Gradient Glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 group bg-charcoal/5"
            >
              <div className="absolute inset-0 bg-gold/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div 
                className="absolute w-full h-[120%] -top-[10%] left-0"
                style={{ y: imageY }}
              >
                <Image
                  src="/images/jignesh-panchal.png"
                  alt="Jignesh Panchal"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
              </motion.div>
              
              {/* Image Frame/Border Overlay */}
              <div className="absolute inset-6 border border-white/40 dark:border-white/20 rounded-3xl z-20 pointer-events-none transition-transform duration-700 group-hover:scale-95" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 right-4 md:-right-8 bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-xl z-30"
            >
              <div className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-1">Experience</div>
              <div className="text-3xl md:text-4xl font-heading font-black text-charcoal dark:text-white">
                26+ <span className="text-base md:text-lg font-medium text-muted-foreground">Years</span>
              </div>
            </motion.div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-7 relative z-20 pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-gold" />
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Leadership Vision</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-charcoal dark:text-white mb-4 tracking-tight leading-[1.1]">
                Jignesh Panchal
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif italic mb-12">Founder & Managing Director</p>

              <div className="space-y-6 relative">
                {/* Custom Quote Icon inside text area */}
                <div className="absolute left-0 -top-6 text-7xl text-gold/20 font-serif leading-none select-none">
                  &ldquo;
                </div>
                
                <p className="text-charcoal/80 dark:text-white/80 text-lg md:text-xl leading-relaxed font-light relative z-10 pl-6 border-l-2 border-gold/50">
                  The evolution of consumer expectations in the new millennium has reshaped the business landscape, 
                  demanding companies to prioritize customer satisfaction like never before. At J Pan Tubular Components Limited Components, 
                  we firmly believe that every business process must begin and end with the customer.
                </p>

                <p className="text-charcoal/80 dark:text-white/80 text-lg md:text-xl leading-relaxed font-light relative z-10 pl-6 border-l-2 border-transparent">
                  Our quality policy is built on the commitment to not just meeting expectations, but consistently exceeding them. 
                  Backed by 26 years of experience, we have transformed a greenfield manufacturing startup into a 
                  network of six plants.
                </p>

                <p className="text-charcoal/80 dark:text-white/80 text-lg md:text-xl leading-relaxed font-light relative z-10 pl-6 border-l-2 border-transparent">
                  With rigorous experience in multinational giants like Hitachi and LG India, we bring deep expertise in strategic 
                  direction, product innovation, and manufacturing process development. Our leadership is further strengthened by 
                  a postgraduate degree from South Korea, ensuring a global perspective in driving excellence and growth.
                </p>
              </div>

              {/* Decorative signature / conclusion */}
              <div className="mt-16 pt-8 border-t border-border">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-[0.1em]">
                  M.Tech Industrial Engineering
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
