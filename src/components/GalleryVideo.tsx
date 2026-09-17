"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
  {
    id: 1,
    title: "Facility Walkthrough",
    duration: "2:45",
    thumbnail: "/images/advanced_manufacturing_facility_1778250027919.png",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 2,
    title: "CNC Bending Process",
    duration: "1:30",
    thumbnail: "/images/industry-hvac.png",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
  }
];

export function GalleryVideo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-charcoal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Motion Showcase</span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-charcoal dark:text-white mb-6">
            In <span className="text-deepblue dark:text-gold">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience our manufacturing precision through immersive video 
            walkthroughs and process showcases.
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 gap-12 no-scrollbar pb-4 md:pb-0"
        >
          {videos.map((v) => (
            <div 
              key={v.id}
              className="group relative aspect-video w-full md:w-auto shrink-0 md:shrink snap-center bg-silver/10 dark:bg-white/5 rounded-sm overflow-hidden cursor-pointer shadow-xl"
              onClick={() => setActiveVideo(v.url)}
            >
              <Image
                src={v.thumbnail}
                alt={v.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-charcoal/80 to-transparent">
                <h3 className="text-white font-heading font-bold text-xl mb-1">{v.title}</h3>
                <span className="text-gold font-bold text-xs uppercase tracking-widest">{v.duration} Minutes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators for Mobile Scroll */}
        {videos.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {videos.map((_, index) => (
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

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[110]"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl animate-in zoom-in-95 duration-500 overflow-hidden rounded-sm">
            <iframe
              src={activeVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
