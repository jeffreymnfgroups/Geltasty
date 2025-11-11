import { Metadata } from "next";
// import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
// import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import HowItWorks from "./components/home/how-it-works";
import KeyBenefits from "./components/home/key-benefits";
// import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
// import Innovation from "./components/home/innovation";
// import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import Pricing from "./components/home/pricing";
// import Subscription from "./components/home/subscription";
import WebResult from "./components/home/web-result";
import GestaltyDifference from "./components/home/gestalty-difference";
// import { PlatformFeatures } from "./components/home/platform-features";
// import { GestaltyUnique } from "./components/home/gestalty-unique";
import ProblemImpactSolution from "./components/home/problem-impact-solution";
import { GestaltyUnique } from "./components/home/gestalty-unique";
import LaunchTransformation from "./components/home/launch-transformation";

export const metadata: Metadata = {
    title: "Home | Gestalty",
    description: "Master NEET & UPSC exams with Gestalty - A precision engineered learning platform for competitive exam mastery. Science-driven study tools, expert mentorship, and cognitive analytics for aspirants, parents, and mentors.",
    keywords: [
        "NEET preparation",
        "UPSC preparation",
        "competitive exam coaching",
        "NEET online coaching",
        "UPSC online coaching",
        "exam preparation platform",
        "NEET aspirants",
        "UPSC aspirants",
        "competitive exam mastery",
        "learning platform",
        "exam coaching",
        "NEET mentors",
        "UPSC mentors",
        "cognitive learning",
        "personalized study plans",
        "exam success"
    ],
    openGraph: {
        title: "Home | Gestalty - A Precision Engineered Learning Platform for Competitive Exam Mastery",
        description: "Master NEET & UPSC exams with Gestalty's science-driven learning platform. Personalized mentorship, cognitive analytics, and precision-engineered study tools.",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Home | Gestalty - A Precision Engineered Learning Platform for Competitive Exam Mastery",
        description: "Master NEET & UPSC exams with Gestalty's science-driven learning platform. Personalized mentorship, cognitive analytics, and precision-engineered study tools.",
    },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Gestalty",
    "description": "A Precision Engineered Learning Platform for Competitive Exam Mastery",
    "url": "https://gestalty.org",
    "logo": "https://gestalty.org/images/logo/logo.svg",
    "sameAs": [
      "https://twitter.com/geltasty",
      "https://linkedin.com/company/geltasty",
      "https://instagram.com/geltasty"
    ],
    "educationalCredentialAwarded": "Competitive Exam Preparation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NEET & UPSC Exam Preparation Courses",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "NEET Preparation Program",
            "description": "Comprehensive NEET exam preparation with personalized mentorship and cognitive analytics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "UPSC Preparation Program",
            "description": "Complete UPSC exam preparation with expert guidance and science-driven study tools"
          }
        }
      ]
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": ["student", "aspirant", "parent", "mentor"]
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------About Us / Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------About Us / Customer Stories section Ends-----------------  */}
      <KeyBenefits />


      {/* ---------------------Platform section Starts-----------------  */}
      <Brand />
      {/* ---------------------Platform section Ends-----------------  */}
      <WebResult />

      <ProblemImpactSolution />

      <GestaltyDifference />


      {/* ---------------------Feature Overview section Starts-----------------  */}
      {/* <PlatformFeatures /> */}
      {/* ---------------------Feature Overview section Ends-----------------  */}

      {/* ---------------------Core Value Proposition section Starts-----------------  */}
      {/* ---------------------Core Value Proposition section Ends-----------------  */}

      {/* ---------------------Problem Grid section Starts-----------------  */}
      {/* ---------------------Problem Grid section Ends-----------------  */}

      {/* ---------------------Problem → Impact → Solution section Starts-----------------  */}
      {/* ---------------------Problem → Impact → Solution section Ends-----------------  */}

      {/* ---------------------Solution Ecosystem section Starts-----------------  */}
      {/* ---------------------Solution Ecosystem section Ends-----------------  */}

      {/* ---------------------Mentor & Support section Starts-----------------  */}
      <GestaltyUnique />
      {/* ---------------------Mentor & Support section Ends-----------------  */}

      {/* ---------------------How It Works section Starts-----------------  */}
      <HowItWorks />
      {/* ---------------------How It Works section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      {/* <Innovation /> */}
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      {/* <OnlinePresence /> */}
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      {/* <CreativeMind /> */}
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      {/* <Subscription /> */}
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      {/* <Faq /> */}
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      {/* <Achievements /> */}
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}

      {/* ---------------------Launch Transformation section Starts-----------------  */}
      <LaunchTransformation />
      {/* ---------------------Launch Transformation section Ends-----------------  */}

      {/* ---------------------Pricing section Starts-----------------  */}
      <Pricing />
      {/* ---------------------Pricing section Ends-----------------  */}
    </main>
  )
}
