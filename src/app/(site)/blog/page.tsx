import { Metadata } from "next";
import BlogHero from "@/app/components/blog/blog-hero";
import BlogFeatured from "@/app/components/blog/blog-featured";
import BlogArticles from "@/app/components/blog/blog-articles";
import BlogCTA from "@/app/components/blog/blog-cta";

export const metadata: Metadata = {
    title: "Blog | Gestalty",
    description: "Explore Gestalty insights on NEET & UPSC preparation. Learning science, mentorship strategies, productivity guides, and examination playbooks.",
    keywords: [
        "Gestalty blog",
        "NEET study tips",
        "UPSC preparation insights",
        "learning science blog",
        "exam mentorship stories",
        "competitive exam blog"
    ],
    openGraph: {
        title: "Blog | Gestalty - Insights for Competitive Excellence",
        description: "Learning science, mentor stories, and preparation playbooks from the Gestalty team.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Gestalty",
        description: "Learning science, mentor stories, and preparation playbooks from the Gestalty team.",
    },
};

export default function Blog() {
  return (
    <main className="min-h-screen pt-20">
      <BlogHero />
      <BlogFeatured />
      <BlogArticles />
      <BlogCTA />
    </main>
  );
}
