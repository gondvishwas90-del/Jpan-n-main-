"use client";

import React, { useState } from "react";
import { EventsHero } from "@/components/EventsHero";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { PastEvents } from "@/components/PastEvents";
import { ExhibitionHighlights } from "@/components/ExhibitionHighlights";
import { EventPhotos } from "@/components/EventPhotos";
import { CorporateActivities } from "@/components/CorporateActivities";
import { EventAwards } from "@/components/EventAwards";
import { EventsCTA } from "@/components/EventsCTA";
import { EventDetailModal } from "@/components/EventDetailModal";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <main className="overflow-hidden">
      <div className="animate-in fade-in duration-1000">
        <EventsHero />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <UpcomingEvents />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <PastEvents onViewDetails={setSelectedEvent} />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <ExhibitionHighlights />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <EventPhotos />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <CorporateActivities />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <EventAwards />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
        <EventsCTA />
      </div>
      
      <EventDetailModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </main>
  );
}
