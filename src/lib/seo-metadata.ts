import { Metadata } from "next";

const siteName = "Gestalty";
const tagline = "A Precision Engineered Learning Platform for Competitive Exam Mastery";
const description = "Master NEET & UPSC exams with Gestalty's science-driven learning platform. Personalized mentorship, cognitive analytics, and precision-engineered study tools for aspirants, parents, and mentors.";
const siteUrl = "https://gestalty.org";
const keywords = [
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
  "exam success",
  "NEET study materials",
  "UPSC study materials",
  "competitive exam strategies"
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - ${tagline}`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: `${siteName} - ${tagline}`,
    description,
    images: [
      {
        url: `${siteUrl}/images/logo/logo.svg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - ${tagline}`,
    description,
    images: [`${siteUrl}/images/logo/logo.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "",
  keywords?: string[]
): Metadata {
  const url = `${siteUrl}${path}`;
  
  return {
    title,
    description,
    keywords: keywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | ${siteName}`,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | ${siteName}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

