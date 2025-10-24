import { Metadata } from "next";
import { PlatformFeatures } from "@/app/components/home/platform-features";

export const metadata: Metadata = {
    title: "Features | Gestalty",
    description: "Explore the powerful features that make Gestalty the leading platform for competitive exam preparation.",
};

export default function Features() {
  return (
    <main className="min-h-screen pt-20">
      <PlatformFeatures />
    </main>
  );
}
