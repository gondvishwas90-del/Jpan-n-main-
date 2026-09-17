"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Maximize2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  { id: 1, category: "Manufacturing", title: "Automated Brazing Line", image: "/images/about-manufacturing.png" },
  { id: 2, category: "Machinery", title: "Precision CNC Bender", image: "/images/custom-engineering.png" },
  { id: 3, category: "Products", title: "Copper Manifold Assembly", image: "/images/copper_component.png" },
  { id: 4, category: "Facilities", title: "Quality Control Lab", image: "/images/quality-hero.png" },
  { id: 5, category: "Manufacturing", title: "Hydro-Testing Station", image: "/images/steel_component.png" },
  { id: 6, category: "Products", title: "Automotive Fuel Lines", image: "/images/industry-auto.png" },
  { id: 7, category: "Machinery", title: "Multi-Axis Bending", image: "/images/industry-hvac.png" },
  { id: 8, category: "Facilities", title: "Raw Material Storage", image: "/images/infrastructure.png" },
  { id: 9, category: "Manufacturing", title: "Tube Cutting Center", image: "/images/industrial_industry_bg.png" },
];

interface GalleryGridProps {
  selectedCategory: string;
}

export function GalleryGrid({ selectedCategory }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll and activeIndex when category filter changes
  useEffect(() => {
    setActiveIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [selectedCategory]);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 bg-silver/5 dark:bg-black/10">
      <div className="container-custom">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 no-scrollbar pb-4 md:pb-0"
        >
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-square w-full md:w-auto shrink-0 md:shrink snap-center bg-white dark:bg-charcoal border border-border rounded-sm overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-full mb-4 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Search className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-white font-heading font-bold text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {item.title}
                </h3>
                <p className="text-gold font-bold text-[10px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators for Mobile Scroll */}
        {filteredItems.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {filteredItems.map((_, index) => (
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] animate-in zoom-in-95 duration-500">
            <Image
              src={selectedImage}
              alt="Full view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
