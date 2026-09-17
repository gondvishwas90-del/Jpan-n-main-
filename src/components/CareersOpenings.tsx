"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, ChevronRight, Filter, Building2, ArrowRight } from "lucide-react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const jobs = [
  {
    id: 1,
    title: "Senior Production Engineer",
    slug: "senior-production-engineer",
    department: "Manufacturing",
    location: "Sarkhej, Ahmedabad",
    experience: "5-8 Years",
    type: "Full-Time"
  },
  {
    id: 2,
    title: "Quality Assurance Specialist",
    slug: "quality-assurance-specialist",
    department: "Engineering",
    location: "Sarkhej, Ahmedabad",
    experience: "3-5 Years",
    type: "Full-Time"
  },
  {
    id: 3,
    title: "Operations Manager",
    slug: "operations-manager",
    department: "Operations",
    location: "Corporate Office",
    experience: "8-12 Years",
    type: "Full-Time"
  },
  {
    id: 4,
    title: "HR Generalist",
    slug: "hr-generalist",
    department: "HR / Admin",
    location: "Corporate Office",
    experience: "2-4 Years",
    type: "Full-Time"
  },
  {
    id: 5,
    title: "Maintenance Technician",
    slug: "maintenance-technician",
    department: "Manufacturing",
    location: "Sarkhej, Ahmedabad",
    experience: "2-5 Years",
    type: "Full-Time"
  },
  {
    id: 6,
    title: "Structural Design Lead",
    slug: "structural-design-lead",
    department: "Engineering",
    location: "Corporate Office",
    experience: "10+ Years",
    type: "Full-Time"
  }
];

const departments = ["All", "Manufacturing", "Engineering", "Operations", "HR / Admin"];

export function CareersOpenings() {
  const [activeDept, setActiveDept] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll and activeIndex when activeDept changes
  useEffect(() => {
    setActiveIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeDept]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  const filteredJobs = activeDept === "All" 
    ? jobs 
    : jobs.filter(job => job.department === activeDept);

  const filterVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="openings"
      ref={containerRef}
      className="py-12 md:py-32 bg-silver/5 dark:bg-black/10 border-b border-border relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gold/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Opportunity Engine</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1]">
              Open <br />
              <span className="text-gold italic font-light">Positions</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap items-center gap-2"
          >
             {departments.map((dept, idx) => (
                <motion.button
                  key={dept}
                  variants={filterVariants}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveDept(dept)}
                  className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 ${
                    activeDept === dept 
                    ? "bg-gold text-charcoal shadow-lg shadow-gold/20 border border-gold" 
                    : "bg-white/50 dark:bg-charcoal/50 backdrop-blur-md border border-border/60 text-muted-foreground hover:bg-white dark:hover:bg-charcoal hover:border-gold/30 hover:text-charcoal dark:hover:text-white"
                  }`}
                >
                  {dept}
                </motion.button>
             ))}
          </motion.div>
        </div>

        {/* Job Grid */}
        <motion.div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          layout
          className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 min-h-[400px] no-scrollbar pb-6 md:pb-0"
        >
           <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div 
                  layout
                  key={job.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -5 }}
                  className="group relative bg-white dark:bg-charcoal border border-border/60 p-6 lg:p-8 rounded-sm hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 flex flex-col overflow-hidden w-full shrink-0 snap-center md:w-auto md:shrink"
                >
                  {/* Internal Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-gold/10 -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-bl-2xl pointer-events-none" />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between mb-8">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-silver/5 dark:bg-black/20 flex items-center justify-center rounded-sm border border-border group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                           <Building2 className="w-3.5 h-3.5 text-charcoal/50 dark:text-white/50 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-charcoal dark:group-hover:text-white transition-colors duration-300">
                           {job.department}
                        </span>
                     </div>
                     <span className="px-3 py-1.5 rounded-sm text-[8px] font-bold uppercase tracking-widest border border-gold/30 text-gold bg-gold/5">
                        {job.type}
                     </span>
                  </div>

                  <h3 className="relative z-10 text-xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300 mb-6 line-clamp-2 min-h-[56px]">
                     {job.title}
                  </h3>

                  <div className="relative z-10 space-y-3 mb-10 flex-grow">
                     <div className="flex items-center gap-4 text-muted-foreground group-hover:text-charcoal/70 dark:group-hover:text-white/70 transition-colors duration-300">
                        <MapPin className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
                        <span className="text-xs font-light tracking-wide">{job.location}</span>
                     </div>
                     <div className="flex items-center gap-4 text-muted-foreground group-hover:text-charcoal/70 dark:group-hover:text-white/70 transition-colors duration-300">
                        <Briefcase className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
                        <span className="text-xs font-light tracking-wide">Experience: {job.experience}</span>
                     </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-6 border-t border-border/50">
                     <Link 
                       href={`/careers/${job.slug}`}
                       className="w-full flex items-center justify-center md:justify-between gap-2 md:gap-0 py-3.5 px-6 bg-charcoal dark:bg-white/5 text-white rounded-sm border border-transparent dark:hover:border-gold transition-all duration-300 group/apply overflow-hidden relative btn-slide-gold group"
                     >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover/apply:translate-x-1 transition-transform duration-300 relative z-10" />
                     </Link>
                  </div>
                </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>

        {/* Dot Indicators for Mobile Scroll */}
        {filteredJobs.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {filteredJobs.map((_, index) => (
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


        {/* General Inquiry */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-24 text-center"
        >
           <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.4em] mb-6">
              Don't see a role that fits?
           </p>
           <button className="inline-flex items-center gap-6 text-[11px] font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300 group/general">
             Submit General Application
             <ChevronRight className="w-4 h-4 group-hover/general:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
           </button>
        </motion.div>
      </div>
    </section>
  );
}
