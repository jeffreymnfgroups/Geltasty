import { Metadata } from "next";
import { CTAButton } from "@/app/components/shared/cta-button";

export const metadata: Metadata = {
    title: "Launch Your Transformation | Gestalty",
    description: "Ready to build your brain the right way? Start your high-order learning journey with Gestalty. Join the cognitive revolution with cognitive clarity, strategic discipline, and a system that respects your mind as much as your syllabus.",
    keywords: [
        "cognitive learning",
        "high-order learning",
        "study smart",
        "NEET preparation",
        "UPSC preparation",
        "learning transformation",
        "cognitive clarity",
        "strategic learning",
        "exam preparation"
    ],
    openGraph: {
        title: "Launch Your Transformation | Gestalty",
        description: "Ready to build your brain the right way? Start your high-order learning journey with Gestalty. Join the cognitive revolution.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Launch Your Transformation | Gestalty",
        description: "Ready to build your brain the right way? Start your high-order learning journey with Gestalty. Join the cognitive revolution.",
    },
};

export default function Launch() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-8">
            {/* Hero Content */}
            <div className="relative flex flex-col text-center items-center gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold w-full leading-tight brockmann-font">
                Ready to Build Your Brain{' '}
                <span className="instrument-font italic font-normal">
                  – The Right Way?
                </span>
              </h1>
              <p className="max-w-4xl text-lg md:text-xl text-dark_black/80 dark:text-white/80 font-medium leading-relaxed">
                This kit isn't about doing more. It's about doing what works. Start your high-order learning journey now. Let's redefine what it means to study smart. Join us in empowering the next generation with cognitive clarity, strategic discipline, and a system that respects your mind as much as your syllabus.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center justify-center gap-4">
              <CTAButton
                href="/contact"
                className="w-full max-w-80 md:py-4"
                labelClassName="text-center text-lg"
                arrowSize={40}
              >
                Ready to Join the Cognitive Revolution?
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

