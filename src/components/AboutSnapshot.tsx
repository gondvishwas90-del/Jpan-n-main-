"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { ArrowUpRight, Award, Users, Factory, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Years of Experience",
    value: 28,
    suffix: "+",
    icon: Award,
    description: "Delivering engineering excellence since 1998."
  },
  {
    label: "CLIENTS SERVED",
    value: 120,
    suffix: "+",
    icon: Users,
    description: "Trusted by industry leaders."
  },
  {
    label: "Manufacturing Units",
    value: 6,
    suffix: "",
    icon: Factory,
    description: "State-of-the-art facilities with advanced machinery."
  },
  {
    label: "Annual Capacity",
    value: 65,
    suffix: "k",
    icon: Globe,
    description: "Metric tons of precision components processed."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export function AboutSnapshot() {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handleHorizontalScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardWidth = (firstChild?.offsetWidth || 280) + 16;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < stats.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-32 overflow-hidden bg-white dark:bg-charcoal"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-deepblue/[0.02] dark:bg-gold/[0.02] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full -z-10" />

      <div className="container-custom">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center mb-16 md:mb-32"
        >
          {/* Text Content */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">Since 1998</span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-[1.1]"
            >
              Engineering <br />
              <span className="relative">
                <span className="text-deepblue dark:text-gold italic">Precision</span>
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 300 20" 
                  fill="none"
                >
                  <motion.path
                    d="M5 15C50 5 150 5 295 15"
                    stroke="var(--color-gold)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </motion.svg>
              </span>
              <br /> Legacy
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md"
            >
              J Pan Tubular Components Limited defines the gold standard in HVAC and Refrigeration components. Through decades of innovation, we've mastered the art of precision manufacturing for the world's most demanding sectors.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/about#our-story"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal font-bold rounded-full overflow-hidden transition-all hover:pr-10 active:scale-95 btn-slide-gold group"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Our Full Story</span>
                <ArrowUpRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              variants={itemVariants}
              className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-border/50"
            >
              <div className="absolute inset-0">
                <Image
                  src="/engineering_precision_facility_1778657209621.png"
                  alt="Precision Facility"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl text-white max-w-[200px]"
              >
                <div className="text-gold font-bold text-xs uppercase tracking-widest mb-1">Standard</div>
                <div className="text-lg font-heading font-bold">ISO 9001:2015 Certified</div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-gold/30 -z-10 rounded-tr-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-deepblue/20 -z-10 rounded-bl-3xl" />
          </div>
        </motion.div>

        {/* Stats Grid: Horizontal Scroll on Mobile (< md), Grid on Desktop (>= md) */}
        <div 
          ref={scrollRef}
          onScroll={handleHorizontalScroll}
          className="flex overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 md:px-0 pt-4 pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="w-[82vw] sm:w-[300px] md:w-full shrink-0 snap-center relative p-8 md:p-10 bg-white dark:bg-white/[0.03] border border-border rounded-2xl group overflow-hidden transition-all hover:border-gold/50 focus:border-gold/50 shadow-sm hover:shadow-xl focus:shadow-xl focus:outline-none flex flex-col justify-between"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-deepblue/10 dark:bg-gold/10 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-gold group-focus:bg-gold transition-colors duration-500 shadow-inner">
                  <stat.icon className="w-6 h-6 text-deepblue dark:text-gold group-hover:text-charcoal group-focus:text-charcoal transition-colors duration-500" />
                </div>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold group-focus:text-gold transition-colors">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                
                <h3 className="text-xs font-bold text-charcoal/80 dark:text-white/80 uppercase tracking-[0.2em] mb-4">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed transition-opacity duration-500 group-hover:text-charcoal group-focus:text-charcoal dark:group-hover:text-white/90 dark:group-focus:text-white/90">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute -bottom-6 -right-6 text-8xl font-heading font-black text-charcoal/[0.05] dark:text-white/[0.03] select-none transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:text-gold/[0.15] group-focus:text-gold/[0.15] group-active:text-gold/[0.15] group-hover:-translate-x-10 group-focus:-translate-x-10 group-active:-translate-x-10 group-hover:-translate-y-10 group-focus:-translate-y-10 group-active:-translate-y-10 group-hover:scale-110 group-focus:scale-110 group-active:scale-110">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 relative z-10">
          {stats.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                if (scrollRef.current && scrollRef.current.children[i]) {
                  scrollRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
              )}
              aria-label={`Go to stat ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
