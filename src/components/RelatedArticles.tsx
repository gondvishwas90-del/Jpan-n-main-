"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const related = [
  {
    title: "Understanding CNC Bending Tolerances",
    time: "7 Min",
    date: "Sept 12, 2025",
    category: "Engineering",
    image: "/images/about-hero.png",
    content: [
      "An expert guide to achieving +/- 0.5mm precision in complex multi-plane bends.",
      "Complex HVAC branching, headers, and evaporator tubing require strict multi-axis CNC bending tolerances to prevent springback and wall thinning.",
      "Using multi-stack electric CNC bending machines with mandrel support, J Pan Tubular achieves zero ovality at tight bend radii while preserving wall thickness integrity."
    ]
  },
  {
    title: "The Impact of Solar Integration on Factory Floor",
    time: "4 Min",
    date: "Sept 30, 2025",
    category: "Sustainability",
    image: "/images/about-manufacturing.png",
    content: [
      "Detailing our recent solar integration and waste reduction strategies across the floor.",
      "Our A2 manufacturing plant features a dedicated rooftop solar installation, cutting industrial carbon emissions and powering clean energy production.",
      "In addition, our closed-loop water treatment and 100% scrap metal recycling ensure environmental compliance with global ISO 14001 green standards."
    ]
  },
  {
    title: "HVAC Market Trends for 2026",
    time: "7 Min",
    date: "Oct 28, 2025",
    category: "Market Outlook",
    image: "/images/industry-hvac.png",
    content: [
      "Exploring upcoming global refrigerant regulations (R32 & R454B) and their impact on OEM copper distributor and header designs.",
      "As high-efficiency VRF systems dominate commercial real estate, multi-port refnet joints and sub-cooled condenser loops are seeing unprecedented demand.",
      "J Pan Tubular is scaling production across 6 plants to meet 2026 thermal efficiency benchmarks."
    ]
  }
];

interface RelatedArticlesProps {
  onReadMore?: (article: any) => void;
}

export function RelatedArticles({ onReadMore }: RelatedArticlesProps) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < related.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 bg-gold" />
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white uppercase tracking-widest">
              You May Also <span className="text-deepblue dark:text-gold">Like</span>
            </h2>
          </div>
          <Link href="/blog" className="text-xs sm:text-sm font-bold text-gold uppercase tracking-widest hover:text-deepblue dark:hover:text-gold transition-colors">
            View All Insights
          </Link>
        </div>

        {/* Related Article Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {related.map((art, idx) => (
              <div 
                key={idx} 
                onClick={() => onReadMore && onReadMore({
                  title: art.title,
                  date: art.date,
                  time: art.time,
                  category: art.category,
                  author: "Engineering Division",
                  image: art.image,
                  content: art.content
                })}
                className="group relative bg-white dark:bg-charcoal border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden shrink-0">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {art.time} Read
                    </div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-charcoal dark:text-white mb-4 sm:mb-6 group-hover:text-gold transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-deepblue dark:text-gold group-hover:translate-x-2 transition-transform">
                    Read Story <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {related.map((_, i) => (
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
                aria-label={`Go to related article card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
