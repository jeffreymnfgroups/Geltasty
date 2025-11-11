import { Documentation } from '@/app/components/documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | Gestalty',
  description: "Gestalty platform documentation and technical guides. Learn how to use our NEET & UPSC preparation tools, APIs, learning analytics, and integration resources for developers and educators.",
  keywords: [
    "Gestalty documentation",
    "NEET platform docs",
    "UPSC platform docs",
    "learning platform API",
    "exam preparation documentation",
    "educational technology docs"
  ],
  openGraph: {
    title: "Documentation | Gestalty - Platform Guides & API Reference",
    description: "Gestalty platform documentation and technical guides. Learn how to use our NEET & UPSC preparation tools and integration resources.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | Gestalty",
    description: "Gestalty platform documentation and technical guides. Learn how to use our NEET & UPSC preparation tools and integration resources.",
  },
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
