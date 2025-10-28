import { Metadata } from "next";
import { PlatformFeatures } from "@/app/components/home/platform-features";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Features | Gestalty",
    description: "Explore the 10 science-driven tools that transform abstract study efforts into quantifiable insights for strategic preparation optimization.",
};

export default function Features() {
  return (
    <main className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold brockmann-font mb-4 dark:text-white">
              Complete Feature Suite for
              <br />
              <span className="instrument-font italic font-normal dark:text-white/70">
                Exam Excellence
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              10 science-driven tools that transform abstract study efforts into quantifiable insights for strategic preparation optimization
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Each feature is backed by cognitive science research and validated through thousands of successful aspirants.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <PlatformFeatures />

      {/* CTA Section */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              Experience the Complete Feature Suite
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Start your free trial and see how science-driven tools transform your preparation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-primary text-white font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  Get Started
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-2 group-hover:rotate-45"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    className="fill-white transition-colors duration-200 ease-in-out group-hover:fill-primary"
                  />
                  <path
                    d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                    className="stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white"
                    strokeWidth="1.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="group bg-transparent text-primary font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  Schedule Feature Demo
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-2 group-hover:rotate-45"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    className="fill-primary transition-colors duration-200 ease-in-out group-hover:fill-white"
                  />
                  <path
                    d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                    className="stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-primary"
                    strokeWidth="1.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              
              <Link
                href="/pricing"
                className="group bg-transparent text-primary font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  View Pricing
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-2 group-hover:rotate-45"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    className="fill-primary transition-colors duration-200 ease-in-out group-hover:fill-white"
                  />
                  <path
                    d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                    className="stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-primary"
                    strokeWidth="1.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
