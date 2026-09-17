"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Calendar, Filter } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const years = ["All Reports", "2024-25", "2023-24", "2022-23", "2021-22", "2020-21", "2019-20"];

export function AnnualReportsFilter(props: any) {
  return (
    <React.Suspense fallback={<div className="py-12 text-center text-charcoal/50">Loading...</div>}>
      <AnnualReportsFilterInner {...props} />
    </React.Suspense>
  );
}

function AnnualReportsFilterInner() {
  const [activeYear, setActiveYear] = useState("All Reports");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "desc";
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

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
                className="w-full bg-silver/5 border border-border rounded-sm py-2.5 px-10 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
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
