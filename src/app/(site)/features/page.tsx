import { Metadata } from "next";
import { PlatformFeatures } from "@/app/components/home/platform-features";
import AdvancedAnalytics from "@/app/components/home/advanced-analytics";
import FeaturesHero from "@/app/components/features/features-hero";
import FeaturesOverview from "@/app/components/features/features-overview";
import FeaturesCTA from "@/app/components/features/features-cta";

export const metadata: Metadata = {
    title: "Features | Gestalty",
    description: "Explore Gestalty's 10 science-driven features for NEET & UPSC preparation. Cognitive analytics, personalized study plans, expert mentorship, and learning tools that transform exam preparation into measurable success.",
    keywords: [
        "NEET preparation features",
        "UPSC preparation features",
        "exam preparation tools",
        "learning analytics",
        "cognitive learning tools",
        "NEET study features",
        "UPSC study features",
        "personalized study plans",
        "exam preparation platform features",
        "competitive exam tools"
    ],
    openGraph: {
        title: "Features | Gestalty - Science-Driven NEET & UPSC Preparation Tools",
        description: "Explore Gestalty's 10 science-driven features for NEET & UPSC preparation. Cognitive analytics, personalized study plans, and expert mentorship tools.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Features | Gestalty",
        description: "Explore Gestalty's 10 science-driven features for NEET & UPSC preparation. Cognitive analytics, personalized study plans, and expert mentorship tools.",
    },
};

export default function Features() {
  return (
    <main className="min-h-screen pt-20">
      <FeaturesHero />
      <FeaturesOverview />
      <PlatformFeatures />
      <AdvancedAnalytics />
      <FeaturesCTA />
    </main>
  );
}

