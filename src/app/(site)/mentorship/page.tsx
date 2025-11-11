import { Metadata } from "next";
import MentorshipHero from "@/app/components/mentorship/mentorship-hero";
import MentorshipImpact from "@/app/components/mentorship/mentorship-impact";
import MentorshipOfferings from "@/app/components/mentorship/mentorship-offerings";
import MentorshipNetwork from "@/app/components/mentorship/mentorship-network";
import MentorshipProcess from "@/app/components/mentorship/mentorship-process";
import MentorshipCTA from "@/app/components/mentorship/mentorship-cta";

export const metadata: Metadata = {
    title: "Mentorship | Gestalty",
    description: "Connect with verified NEET & UPSC achievers for personalized, data-driven mentorship. Expert guidance, study plan development, answer writing practice, and interview preparation for competitive exam success.",
    keywords: [
        "NEET mentorship",
        "UPSC mentorship",
        "NEET mentors",
        "UPSC mentors",
        "exam mentorship",
        "competitive exam guidance",
        "NEET expert guidance",
        "UPSC expert guidance",
        "personalized exam coaching",
        "NEET UPSC mentors"
    ],
    openGraph: {
        title: "Mentorship | Gestalty - Expert NEET & UPSC Mentors",
        description: "Connect with verified NEET & UPSC achievers for personalized, data-driven mentorship. Expert guidance and study plan development for exam success.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mentorship | Gestalty",
        description: "Connect with verified NEET & UPSC achievers for personalized, data-driven mentorship. Expert guidance and study plan development for exam success.",
    },
};

export default function Mentorship() {
  return (
    <main className="min-h-screen pt-20">
      <MentorshipHero />
      <MentorshipImpact />
      <MentorshipOfferings />
      <MentorshipNetwork />
      <MentorshipProcess />
      <MentorshipCTA />
    </main>
  );
}

