import { Metadata } from "next";
import HowHero from "@/app/components/how-it-works/how-hero";
import HowSteps from "@/app/components/how-it-works/how-steps";
import HowLoop from "@/app/components/how-it-works/how-loop";
import HowInsights from "@/app/components/how-it-works/how-insights";
import HowCTA from "@/app/components/how-it-works/how-cta";

export const metadata: Metadata = {
    title: "How It Works | Gestalty",
    description: "Learn how Gestalty's 4-step science-driven process transforms NEET & UPSC exam preparation. From assessment to success with personalized plans, expert mentorship, and cognitive analytics.",
    keywords: [
        "how NEET preparation works",
        "how UPSC preparation works",
        "exam preparation process",
        "NEET coaching methodology",
        "UPSC coaching methodology",
        "competitive exam strategy",
        "NEET study process",
        "UPSC study process",
        "exam preparation steps",
        "cognitive learning approach"
    ],
    openGraph: {
        title: "How It Works | Gestalty - NEET & UPSC Preparation Process",
        description: "Learn how Gestalty's 4-step science-driven process transforms NEET & UPSC exam preparation with personalized plans and expert mentorship.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "How It Works | Gestalty",
        description: "Learn how Gestalty's 4-step science-driven process transforms NEET & UPSC exam preparation with personalized plans and expert mentorship.",
    },
};

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-20">
      <HowHero />
      <HowSteps />
      <HowLoop />
      <HowInsights />
      <HowCTA />
    </main>
  );
}

