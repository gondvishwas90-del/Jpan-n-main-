import React from "react";
import { Metadata } from "next";
import { ContactHero } from "@/components/ContactHero";
import { ContactIntro } from "@/components/ContactIntro";
import { ContactSupportInfo } from "@/components/ContactSupportInfo";
import { ContactBlocks } from "@/components/ContactBlocks";
import { ContactForm } from "@/components/ContactForm";
import { ContactMap } from "@/components/ContactMap";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Investor Contact | Shareholder Support | J Pan Tubular Components Limited",
  description: "Get in touch with J Pan Tubular Components Limited's Investor Relations team. Access direct communication channels for shareholding, dividends, and statutory disclosure queries.",
};

export default function InvestorContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactIntro />
      <ContactSupportInfo />
      <ContactBlocks />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </main>
  );
}


