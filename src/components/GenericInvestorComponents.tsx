"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileDown, FileText, Search, ChevronDown, Calendar, Filter, ArrowRight, ExternalLink, Newspaper, ShieldCheck, CheckCircle2, X } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function GenericInvestorHero({ 
  title, 
  subtitle = "Precision Disclosures & Corporate Transparency", 
  image = "/images/hero-bg.png",
  parent = "Investor Relations"
}: { 
  title: string; 
  subtitle?: string; 
  image?: string; 
  parent?: string;
}) {
  return (
    <section className="relative min-h-[460px] md:min-h-[500px] pt-32 pb-20 flex items-center overflow-hidden bg-[#070d14]">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image} 
          alt={title}
          fill
          priority
          className="object-cover object-center brightness-[0.22] contrast-125 scale-105"
        />
        {/* Multi-stage Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d14] via-[#070d14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d14] via-transparent to-[#070d14]/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-deepblue/20 to-transparent mix-blend-screen" />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-deepblue/30 rounded-full blur-[160px] pointer-events-none" />

        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)`,
            backgroundSize: '48px 48px' 
          }} 
        />
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Glassmorphic Breadcrumb Badge */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 shadow-lg"
            >
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="text-gold">/</span>
              <span className="hover:text-gold transition-colors">{parent}</span>
              <span className="text-gold">/</span>
              <span className="text-gold font-extrabold">{title}</span>
            </motion.nav>

            {/* Accent Category Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-gold to-gold/30" />
              <span className="text-gold font-extrabold uppercase tracking-[0.3em] text-xs">
                OFFICIAL CORPORATE DISCLOSURE
              </span>
            </motion.div>

            {/* Main H1 Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] tracking-tight"
            >
              {title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-gold italic font-medium">
                & Media Releases
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base sm:text-xl text-silver/80 leading-relaxed max-w-2xl font-normal border-l-2 border-gold/40 pl-6"
            >
              {subtitle}
            </motion.p>

            {/* Trust Markers Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Verified Corporate Statements</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>ISO 9001:2015 Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Decorative Floating Glass Card (Right Column) */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Spinning Geometric Rings */}
              <div className="absolute inset-0 border border-gold/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-6 border border-white/10 rounded-full animate-reverse-spin" />
              
              {/* Glassmorphic Central Badge */}
              <div className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-2xl text-center space-y-4 max-w-[270px] group hover:border-gold/40 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 shadow-lg">
                  <Newspaper className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-widest mb-1">Media & Press Desk</div>
                  <div className="text-[11px] text-silver/60 font-medium leading-relaxed">Official Communications & Investor Announcements</div>
                </div>
                <div className="pt-2 flex items-center justify-center gap-2 text-[10px] font-extrabold text-gold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Active Disclosures
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

interface TableProps {
  data: {
    id: number;
    date: string;
    particulars: string;
    link: string;
  }[];
}

export function GenericInvestorTable(props: TableProps) {
  return (
    <React.Suspense fallback={<div className="py-12 text-center text-charcoal/50">Loading...</div>}>
      <GenericInvestorTableInner {...props} />
    </React.Suspense>
  );
}

function GenericInvestorTableInner({ data }: TableProps) {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "desc";
  const query = (searchParams.get("q") || "").toLowerCase();
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedData = React.useMemo(() => {
    let filtered = [...data];
    if (query) {
      filtered = filtered.filter(
        (item) => 
          item.particulars.toLowerCase().includes(query) || 
          (item.date && item.date.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => {
      if (a.date && b.date) {
        if (sort === "asc") {
          return a.date.localeCompare(b.date);
        }
        return b.date.localeCompare(a.date);
      }
      return sort === "desc" ? -1 : 1;
    });
  }, [data, sort, query]);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < sortedData.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-12 h-1.5 md:w-1.5 md:h-10 bg-gold rounded-full" />
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <h2 className="text-xs font-bold text-gold uppercase tracking-[0.4em] mb-1 text-center md:text-left">Disclosure Archive</h2>
              <div className="h-[1px] w-full bg-border" />
            </div>
          </div>
          <div className="text-[10px] font-bold text-charcoal/70 dark:text-silver/90 uppercase tracking-widest text-center md:text-right">
            Showing {sortedData.length} Results for Recent Cycles
          </div>
        </div>

        {/* Table Cards: Single visible card at a time with horizontal scroll on mobile (< md), vertical stack on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:space-y-6 md:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {sortedData.map((report, idx) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-charcoal border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:shadow-2xl hover:shadow-deepblue/5 transition-all duration-500 hover:border-gold/30 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 bg-silver/5 dark:bg-white/5 border border-border rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                  <FileText className="w-8 h-8 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2 text-center md:text-left w-full md:w-auto">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-charcoal/70 dark:text-silver/90">
                    <span>{report.date}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-primary">Report Archive</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal dark:text-white group-hover:text-deepblue dark:group-hover:text-gold transition-colors">
                    {report.particulars}
                  </h3>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-8 shrink-0">
                  <div className="hidden lg:flex items-center gap-6 text-xs font-medium text-charcoal/70 dark:text-silver/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>Processed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-600 dark:text-green-400 font-bold uppercase tracking-widest text-[10px]">Published</span>
                    </div>
                  </div>

                  <div className="h-10 w-px bg-border hidden lg:block" />

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a 
                      href={report.link && report.link !== "#" ? report.link : "/sample-report.pdf"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-silver/10 transition-all active:scale-95 text-charcoal dark:text-white"
                    >
                      <ExternalLink className="w-4 h-4 opacity-60" /> View
                    </a>
                    <a 
                      href={report.link && report.link !== "#" ? report.link : "/sample-report.pdf"}
                      download
                      className="flex items-center gap-3 px-6 py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-deepblue dark:hover:bg-gold transition-all shadow-lg active:scale-95 group/btn"
                    >
                      <FileDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          {sortedData.length > 1 && (
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {sortedData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    if (cardsRef.current && cardsRef.current.children[i]) {
                      cardsRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                  )}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function GenericInvestorFilter() {
  return (
    <React.Suspense fallback={<div className="py-12 text-center text-charcoal/50">Loading...</div>}>
      <GenericInvestorFilterInner />
    </React.Suspense>
  );
}

function GenericInvestorFilterInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "desc";
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = React.useState(initialQuery);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchQuery) {
        params.set("q", searchQuery);
      } else {
        params.delete("q");
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, pathname, router, searchParams]);

  const toggleSort = () => {
    const newSort = sort === "desc" ? "asc" : "desc";
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="relative z-20 bg-white/50 dark:bg-charcoal/50 border-b border-border">
      <div className="container-custom py-6">
        <div className="flex flex-col lg:flex-row items-center justify-end gap-6">
          {/* Search & Sorting */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-grow lg:flex-grow-0 lg:w-72">
              <input
                type="text"
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-silver/5 border border-border rounded-sm py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-charcoal dark:hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button 
              onClick={toggleSort}
              className="flex items-center gap-3 bg-white dark:bg-charcoal border border-border rounded-sm py-2.5 px-6 text-xs font-bold text-charcoal dark:text-white hover:border-gold transition-all shrink-0 whitespace-nowrap min-w-[175px] justify-between btn-slide-gold group"
            >
              <Filter className="w-4 h-4 text-gold shrink-0" />
              <span className="flex-grow text-center">{sort === "desc" ? "Latest First" : "Oldest First"}</span>
              <ChevronDown className="w-4 h-4 text-gold shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ListingItem {
  id: number | string;
  title: string;
  date?: string;
  period?: string;
  type?: string;
  status?: string;
  downloadUrl?: string;
  viewUrl?: string;
}

interface GenericInvestorListingProps {
  items: ListingItem[];
  sectionTitle?: string;
  category?: string;
  resultsCount?: number;
  resultsPeriod?: string;
}

export function GenericInvestorListing(props: GenericInvestorListingProps) {
  return (
    <React.Suspense fallback={<div className="py-12 text-center text-charcoal/50">Loading...</div>}>
      <GenericInvestorListingInner {...props} />
    </React.Suspense>
  );
}

function GenericInvestorListingInner({ 
  items, 
  sectionTitle = "Disclosure Archive", 
  category = "Document",
  resultsCount,
  resultsPeriod = "FY 2024-25"
}: GenericInvestorListingProps) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "desc";
  const query = (searchParams.get("q") || "").toLowerCase();

  const sortedItems = React.useMemo(() => {
    let filtered = [...items];
    if (query) {
      filtered = filtered.filter(
        (item) => 
          item.title.toLowerCase().includes(query) || 
          (item.period && item.period.toLowerCase().includes(query)) || 
          (item.date && item.date.toLowerCase().includes(query)) || 
          (item.type && item.type.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => {
      if (a.date && b.date) {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (!isNaN(dateA) && !isNaN(dateB)) {
          return sort === "desc" ? dateB - dateA : dateA - dateB;
        }
      }
      return sort === "desc" ? -1 : 1;
    });
  }, [items, sort, query]);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < sortedItems.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-12 h-1.5 md:w-1.5 md:h-10 bg-gold rounded-full" />
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <h2 className="text-xs font-bold text-gold uppercase tracking-[0.4em] mb-1 text-center md:text-left">{sectionTitle}</h2>
              <div className="h-[1px] w-full bg-border" />
            </div>
          </div>
          <div className="text-[10px] font-bold text-charcoal/70 dark:text-silver/90 uppercase tracking-widest text-center md:text-right">
            Showing {sortedItems.length} Results for {resultsPeriod}
          </div>
        </div>

        {/* Listing Cards: Single visible card at a time with horizontal scroll on mobile (< md), vertical stack on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:space-y-6 md:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {sortedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-charcoal border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:shadow-2xl hover:shadow-deepblue/5 transition-all duration-500 hover:border-gold/30 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 bg-silver/5 dark:bg-white/5 border border-border rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                  <FileText className="w-8 h-8 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2 text-center md:text-left w-full md:w-auto">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-charcoal/70 dark:text-silver/90">
                    {item.period && <span>{item.period}</span>}
                    {item.date && (
                      <>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span>{item.date}</span>
                      </>
                    )}
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-primary">{item.type || category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal dark:text-white group-hover:text-deepblue dark:hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-8 shrink-0">
                  <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-charcoal/70 dark:text-silver/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>Processed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-600 dark:text-green-400">
                        {item.status || "Published"}
                      </span>
                    </div>
                  </div>

                  <div className="h-10 w-px bg-border hidden lg:block" />

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a 
                      href={item.viewUrl || item.downloadUrl || "/sample-report.pdf"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-silver/10 transition-all active:scale-95 text-charcoal dark:text-white"
                    >
                      <ExternalLink className="w-4 h-4 opacity-60" /> View
                    </a>
                    <a 
                      href={item.downloadUrl || item.viewUrl || "/sample-report.pdf"}
                      download
                      className="flex items-center gap-3 px-6 py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-deepblue dark:hover:bg-gold transition-all shadow-lg active:scale-95 group/btn"
                    >
                      <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          {sortedItems.length > 1 && (
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {sortedItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    if (cardsRef.current && cardsRef.current.children[i]) {
                      cardsRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                  )}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Load More Placeholder */}
        <div className="mt-16 text-center">
          <button className="text-[10px] font-bold text-charcoal/70 dark:text-silver/90 uppercase tracking-[0.3em] flex items-center gap-3 mx-auto hover:text-gold transition-colors group">
            Load Historical Archive 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
