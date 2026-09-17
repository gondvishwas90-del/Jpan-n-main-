"use client";

import React, { useRef, useState } from "react";
import { Download, FileDown, FileText, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const reports = [
  {
    id: 1,
    date: "2025-2026",
    particulars: "J Pan- Annual Report",
    link: "/sample-report.pdf"
  },
  {
    id: 2,
    date: "2024-2025",
    particulars: "J Pan- Annual Report",
    link: "/sample-report.pdf"
  },
  {
    id: 3,
    date: "2023-2024",
    particulars: "J Pan- Annual Report",
    link: "/sample-report.pdf"
  },
  {
    id: 4,
    date: "2022-2023",
    particulars: "J Pan- Annual Report",
    link: "/sample-report.pdf"
  },
  {
    id: 5,
    date: "2021-2022",
    particulars: "J Pan- Annual Report",
    link: "/sample-report.pdf"
  },
  {
    id: 6,
    date: "2020-2021",
    particulars: "J Pan- Annual Report",
    link: "/sample-report.pdf"
  }
];

export function AnnualReportsGrid(props: any) {
  return (
    <React.Suspense fallback={<div className="py-12 text-center text-charcoal/50">Loading...</div>}>
      <AnnualReportsGridInner {...props} />
    </React.Suspense>
  );
}

function AnnualReportsGridInner() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "desc";
  const query = (searchParams.get("q") || "").toLowerCase();
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedReports = React.useMemo(() => {
    let filtered = [...reports];
    if (query) {
      filtered = filtered.filter(
        (r) => 
          r.particulars.toLowerCase().includes(query) || 
          r.date.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => {
      if (sort === "asc") {
        return a.date.localeCompare(b.date);
      }
      return b.date.localeCompare(a.date);
    });
  }, [sort, query]);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < sortedReports.length && newIndex !== activeIndex) {
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
            Showing {sortedReports.length} Results for FY 2024-25
          </div>
        </div>

        {/* Reports Cards: Single visible card at a time with horizontal scroll on mobile (< md), vertical stack on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:space-y-6 md:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {sortedReports.map((report, idx) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-charcoal border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:shadow-2xl hover:shadow-deepblue/5 transition-all duration-500 hover:border-gold/30 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 bg-silver/5 dark:bg-white/5 border border-border rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <FileText className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2 text-center md:text-left w-full md:w-auto">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-charcoal/70 dark:text-silver/90">
                    <span>{report.date}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-primary">Annual Report</span>
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
                      href={report.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-silver/10 transition-all active:scale-95 text-charcoal dark:text-white"
                    >
                      <ExternalLink className="w-4 h-4 opacity-60" /> View
                    </a>
                    <a 
                      href={report.link}
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
          {sortedReports.length > 1 && (
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {sortedReports.map((_, i) => (
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
                  aria-label={`Go to annual report ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
