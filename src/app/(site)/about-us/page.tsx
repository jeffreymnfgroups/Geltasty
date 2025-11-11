import { Metadata } from "next";
import AboutHero from "@/app/components/about-us/about-hero";
import ProblemSection from "@/app/components/about-us/problem-section";
import SolutionSection from "@/app/components/about-us/solution-section";
import VisionMissionSection from "@/app/components/about-us/vision-mission-section";
import CommitmentSection from "@/app/components/about-us/commitment-section";
import CTASection from "@/app/components/about-us/cta-section";

export const metadata: Metadata = {
    title: "About Us | Gestalty",
    description: "Learn about Gestalty's mission to transform NEET & UPSC exam preparation through cognitive science, data analytics, and precision-engineered learning systems. Built by learners, backed by science.",
    keywords: [
        "Gestalty about",
        "NEET coaching platform",
        "UPSC coaching platform",
        "competitive exam preparation",
        "cognitive learning science",
        "exam preparation methodology",
        "NEET study platform",
        "UPSC study platform",
        "learning analytics",
        "educational technology"
    ],
    openGraph: {
        title: "About Us | Gestalty - Built by Learners, Backed by Science",
        description: "Learn about Gestalty's mission to transform NEET & UPSC exam preparation through cognitive science, data analytics, and precision-engineered learning systems.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Gestalty",
        description: "Learn about Gestalty's mission to transform NEET & UPSC exam preparation through cognitive science, data analytics, and precision-engineered learning systems.",
    },
};

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-20">
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <VisionMissionSection />
      <CommitmentSection />
      <CTASection />
    </main>
  );
}

