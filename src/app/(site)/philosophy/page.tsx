import { Metadata } from "next";
import PhilosophyHero from "@/app/components/philosophy/philosophy-hero";
import PhilosophyPrinciples from "@/app/components/philosophy/philosophy-principles";
import PhilosophyMethodology from "@/app/components/philosophy/philosophy-methodology";
import PhilosophyScience from "@/app/components/philosophy/philosophy-science";
import PhilosophyCTA from "@/app/components/philosophy/philosophy-cta";

export const metadata: Metadata = {
    title: "Philosophy | Gestalty",
    description: "Understand the learning philosophy behind Gestalty. Systems thinking, cognitive science, and data-driven mentorship combined to deliver predictable NEET & UPSC success.",
    keywords: [
        "Gestalty philosophy",
        "learning philosophy",
        "NEET study philosophy",
        "UPSC learning philosophy",
        "cognitive learning systems",
        "exam preparation methodology"
    ],
    openGraph: {
        title: "Philosophy | Gestalty - Intentional Learning Systems",
        description: "Explore the principles and science guiding Gestalty's approach to NEET & UPSC preparation.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Philosophy | Gestalty",
        description: "Explore the principles and science guiding Gestalty's approach to NEET & UPSC preparation.",
    },
};

export default function Philosophy() {
  return (
    <main className="min-h-screen pt-20">
      <PhilosophyHero />
      <PhilosophyPrinciples />
      <PhilosophyMethodology />
      <PhilosophyScience />
      <PhilosophyCTA />
    </main>
  );
}
