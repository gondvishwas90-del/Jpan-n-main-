"use client";

import React, { useState } from "react";
import { Search, Filter, Bookmark, Briefcase, Gavel, SearchCheck } from "lucide-react";

const categories = [
  { id: "all", name: "All Policies", icon: Bookmark },
  { id: "governance", name: "Governance", icon: Gavel },
  { id: "hr", name: "HR Policies", icon: Briefcase },
  { id: "compliance", name: "Compliance", icon: SearchCheck },
];

export function PoliciesFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="relative z-20 bg-white/50 dark:bg-charcoal/50 border-b border-border animate-in fade-in zoom-in-95 duration-700">
      <div className="container-custom py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Category Tabs Wrapper */}
          <div className="flex items-center gap-2 lg:gap-4 w-full lg:w-auto">
            {/* Fixed Label */}
            <div className="flex items-center gap-3 text-gold shrink-0">
              <Filter className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Filter By</span>
            </div>
            
            {/* Scrollable Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 flex items-center gap-3 px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                      activeCategory === cat.id
                        ? "bg-charcoal dark:bg-white text-white dark:text-charcoal border-transparent shadow-lg"
                        : "bg-silver/5 text-muted-foreground border-transparent hover:border-border hover:bg-silver/10"
                    } ${index === categories.length - 1 ? 'mr-4' : ''}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${activeCategory === cat.id ? "text-gold" : "text-muted-foreground"}`} />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 group">
            <input
              type="text"
              placeholder="Search Policy Repository..."
              className="w-full bg-silver/5 border border-border rounded-sm py-3 px-12 text-xs focus:outline-none focus:border-gold transition-all group-hover:border-gold/50"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
               <span className="text-[9px] font-bold text-muted-foreground/30 uppercase tracking-widest hidden sm:block">Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
