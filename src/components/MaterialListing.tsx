"use client";

import React, { useRef, useState } from "react";
import { Search, FileText, Download, Eye, ChevronRight, Calendar, Bookmark } from "lucide-react";
import { MaterialDetailModal } from "./MaterialDetailModal";
import { cn } from "@/lib/utils";

const materialDocs = [
  {
    id: 1,
    title: "Joint Venture Agreement – Precision Parts Div.",
    type: "Agreement",
    date: "Jan 10, 2025",
    ref: "JP_JV_2025_01",
    fiscal: "FY 2024-25"
  },
  {
    id: 2,
    title: "Raw Material Supply Contract – European Partners",
    type: "Contract",
    date: "Dec 15, 2024",
    ref: "JP_CON_2024_12",
    fiscal: "FY 2024-25"
  },
  {
    id: 3,
    title: "Lease Agreement – Unit 4 Expansion Site",
    type: "Agreement",
    date: "Oct 22, 2024",
    ref: "JP_LSE_2024_10",
    fiscal: "FY 2024-25"
  },
  {
    id: 4,
    title: "Technical Collaboration Agreement",
    type: "Agreement",
    date: "Aug 05, 2024",
    ref: "JP_TEC_2024_08",
    fiscal: "FY 2024-25"
  },
  {
    id: 5,
    title: "Material Loan Contract – Institutional Credit",
    type: "Contract",
    date: "May 12, 2024",
    ref: "JP_CRD_2024_05",
    fiscal: "FY 2024-25"
  },
  {
    id: 6,
    title: "Share Purchase Agreement – Q4 Transaction",
    type: "Agreement",
    date: "Feb 28, 2024",
    ref: "JP_SPA_2024_02",
    fiscal: "FY 2023-24"
  }
];

export function MaterialListing() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < filteredDocs.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const filteredDocs = React.useMemo(() => {
    return materialDocs.filter(doc => {
      let matchesFilter = true;
      if (activeFilter !== "All") {
        if (activeFilter === "Contracts") matchesFilter = doc.type === "Contract";
        else if (activeFilter === "Agreements") matchesFilter = doc.type === "Agreement";
        else if (activeFilter === "Others") matchesFilter = doc.type !== "Contract" && doc.type !== "Agreement";
      }
      
      const matchesSearch = 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        doc.ref.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10">
      <div className="container-custom">
        {/* Filter & Search Bar */}
        <div className="relative z-20 mb-12 md:mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
           <div className="bg-white dark:bg-charcoal border border-border p-4 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center gap-6">
              <div className="flex overflow-x-auto no-scrollbar items-center gap-2 flex-grow w-full min-w-0 pb-2 lg:pb-0">
                 {["All", "Contracts", "Agreements", "Others"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-6 py-2.5 text-[9px] font-bold uppercase tracking-widest rounded-xl transition-all shrink-0 whitespace-nowrap ${
                        activeFilter === filter 
                        ? "bg-gold text-charcoal shadow-lg" 
                        : "bg-silver/5 text-muted-foreground hover:bg-silver/10"
                      }`}
                    >
                      {filter}
                    </button>
                 ))}
              </div>
              <div className="w-px h-8 bg-border hidden lg:block" />
              <div className="relative w-full lg:w-80 group shrink-0">
                 <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search material archive..."
                  className="w-full bg-silver/5 border border-border rounded-xl py-3 px-10 text-xs focus:outline-none focus:border-gold transition-all"
                 />
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-gold" />
              </div>
           </div>
        </div>

        {/* Document Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        {filteredDocs.length > 0 ? (
          <div className="flex flex-col justify-between w-full">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
               {filteredDocs.map((doc) => (
                  <div 
                    key={doc.id}
                    className="group relative bg-white dark:bg-charcoal border border-border p-6 sm:p-8 rounded-2xl hover:border-gold transition-all duration-500 hover:shadow-2xl flex flex-col w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
                  >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-silver/5 flex items-center justify-center rounded-xl border border-border group-hover:bg-gold group-hover:border-transparent transition-all shrink-0">
                         <FileText className="w-4 h-4 text-gold group-hover:text-charcoal transition-colors" />
                      </div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                         Ref: {doc.ref}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border border-gold/30 text-gold bg-gold/5">
                      {doc.fiscal}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors mb-4 line-clamp-2 min-h-[56px] sm:min-h-[64px]">
                    {doc.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-muted-foreground/60">
                     <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{doc.date}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{doc.type}</span>
                     </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border space-y-3">
                     <a 
                      href="/sample-report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between py-3.5 px-6 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-xl hover:bg-gold hover:text-charcoal transition-all group/read"
                     >
                        <div className="flex items-center gap-3">
                           <Eye className="w-4 h-4" />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Read Document</span>
                        </div>
                        <ChevronRight className="w-4 h-4 group-hover/read:translate-x-2 transition-transform" />
                     </a>
                     <a 
                      href="/sample-report.pdf"
                      download
                      className="w-full flex items-center justify-center gap-3 py-3 bg-silver/10 dark:bg-white/5 hover:bg-silver/20 rounded-xl text-[9px] font-bold uppercase tracking-widest text-muted-foreground transition-all"
                     >
                        <Download className="w-3.5 h-3.5" />
                        Download PDF Disclosure
                     </a>
                  </div>
                </div>
             ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            {filteredDocs.length > 1 && (
              <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
                {filteredDocs.map((_, i) => (
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
                    aria-label={`Go to contract card ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-border rounded-2xl bg-white/5">
            <p className="text-sm text-muted-foreground">No documents found matching your criteria.</p>
            <button 
              onClick={() => { setActiveFilter("All"); setSearchQuery(""); }} 
              className="mt-6 px-6 py-2 bg-charcoal dark:bg-white text-white dark:text-charcoal text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-gold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Multi-Year Access */}
        <div className="mt-16 md:mt-20 text-center animate-in fade-in duration-1000 delay-500">
           <button className="inline-flex items-center gap-4 sm:gap-6 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] hover:text-gold transition-colors group">
             Access Historical Material Archive (2018-2023)
             <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>

      <MaterialDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        documentData={selectedDoc} 
      />
    </section>
  );
}
