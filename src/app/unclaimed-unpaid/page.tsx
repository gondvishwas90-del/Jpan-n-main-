"use client";

import React from "react";
import { 
  GenericInvestorHero, 
  GenericInvestorFilter 
} from "@/components/GenericInvestorComponents";
import { UnclaimedIntro } from "@/components/UnclaimedIntro";
import { UnclaimedTable } from "@/components/UnclaimedTable";
import { UnclaimedRecovery } from "@/components/UnclaimedRecovery";
import { UnclaimedCompliance } from "@/components/UnclaimedCompliance";
import { UnclaimedCTA } from "@/components/UnclaimedCTA";

export default function UnclaimedUnpaidPage() {
  return (
    <main className="overflow-hidden">
      <GenericInvestorHero title="Unclaimed & Unpaid Amounts" />
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <UnclaimedIntro />
      </div>

      <GenericInvestorFilter />

      <UnclaimedTable />

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <UnclaimedRecovery />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <UnclaimedCompliance />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <UnclaimedCTA />
      </div>
    </main>
  );
}



