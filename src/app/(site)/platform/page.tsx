import { Metadata } from "next";
import PlatformHero from "@/app/components/platform/platform-hero";
import PlatformPillars from "@/app/components/platform/platform-pillars";
import PlatformSolutions from "@/app/components/platform/platform-solutions";
import PlatformCapabilities from "@/app/components/platform/platform-capabilities";
import PlatformCTA from "@/app/components/platform/platform-cta";

export const metadata: Metadata = {
    title: "Platform | Gestalty",
    description: "Discover Gestalty's comprehensive learning platform for NEET & UPSC success. Advanced analytics, expert mentorship, mobile app, and science-driven methodologies for competitive exam mastery.",
    keywords: [
        "NEET learning platform",
        "UPSC learning platform",
        "competitive exam platform",
        "NEET online platform",
        "UPSC online platform",
        "exam preparation software",
        "learning management system",
        "NEET study platform",
        "UPSC study platform",
        "educational technology platform"
    ],
    openGraph: {
        title: "Platform | Gestalty - Comprehensive NEET & UPSC Learning Platform",
        description: "Discover Gestalty's comprehensive learning platform for NEET & UPSC success. Advanced analytics, expert mentorship, and mobile app access.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Platform | Gestalty",
        description: "Discover Gestalty's comprehensive learning platform for NEET & UPSC success. Advanced analytics, expert mentorship, and mobile app access.",
    },
};

export default function Platform() {
  return (
    <main className="min-h-screen pt-20">
      <PlatformHero />
      <PlatformPillars />
      <PlatformSolutions />
      <PlatformCapabilities />
      <PlatformCTA />
    </main>
  );
}

