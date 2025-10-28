'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Beaker,
  AlertCircle,
  Network,
  Lightbulb,
} from "lucide-react";

interface Differentiator {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  span?: string;
}

const differentiators: Differentiator[] = [
  {
    id: 1,
    title: "We Turn Feelings into Facts",
    description:
      "Convert 'I feel prepared' into hard metrics that show exactly where you stand and what needs work.",
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    image: "/images/home/innovation/card1.webp",
    span: "col-span-1 lg:col-span-2",
  },
  {
    id: 2,
    title: "We Blend Multiple Sciences",
    description:
      "Statistics, cognitive psychology, and evidence-based pedagogy unite for genuine impact—not just features.",
    icon: <Beaker className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    image: "/images/home/innovation/card2.webp",
    span: "col-span-1 lg:col-span-2",
  },
  {
    id: 3,
    title: "We Intervene Before It's Too Late",
    description:
      "Intelligent alerts and interventions weeks before exams based on your data trends, not after failure.",
    icon: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    image: "/images/home/innovation/card3.webp",
    span: "col-span-1 lg:col-span-2",
  },
  {
    id: 4,
    title: "We Connect Your Support System",
    description:
      "Students, mentors, and parents in one closed-loop system with transparent, real-time visibility.",
    icon: <Network className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    image: "/images/home/innovation/card4.webp",
    span: "col-span-1 lg:col-span-2",
  },
  {
    id: 5,
    title: "We Build Lifelong Skills",
    description:
      "Develop metacognitive abilities and strategic learning approaches that serve beyond just one exam.",
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    image: "/images/home/innovation/card5.webp",
    span: "col-span-1 lg:col-span-2",
  },
];

export function GestaltyUnique() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-dark_black">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold brockmann-font mb-4 dark:text-white">
            Beyond Traditional Edtech:
            <br />
            <span className="instrument-font italic font-normal dark:text-white/70">
              The Gestalty Advantage
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Five core differentiators that make Gestalty fundamentally different
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {differentiators.map((diff) => (
            <DifferentiatorCard
              key={diff.id}
              differentiator={diff}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full py-8 flex justify-center">
          <Link
            href="/contact"
            className="group bg-primary text-white font-medium flex flex-row justify-between items-center py-2 px-4 rounded-full md:max-w-64 w-full sm:w-auto border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary dark:hover:text-primary"
          >
            <span className="flex-1 text-center transform transition-transform duration-200 ease-in-out group-hover:scale-95">
              Learn More
            </span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 transform transition-transform duration-200 ease-in-out group-hover:scale-90 group-hover:rotate-45"
            >
              <rect
                width="40"
                height="40"
                rx="20"
                className="fill-white transition-colors duration-200 ease-in-out group-hover:fill-primary"
              />
              <path
                d="M15.832 15.3334H24.1654V23.6667"
                className="stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.832 23.6667L24.1654 15.3334"
                className="stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface DifferentiatorCardProps {
  differentiator: Differentiator;
}

const DifferentiatorCard = ({
  differentiator,
}: DifferentiatorCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden transition-all duration-300 hover:border-primary/50",
        "hover:shadow-lg dark:hover:shadow-primary/20"
      )}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800">
        <Image
          src={differentiator.image}
          alt={differentiator.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900/80" />
      </div>

      {/* Content Section */}
      <div className="relative p-3 sm:p-4 md:p-6">
        {/* Icon */}
        <div className="mb-1 sm:mb-2 text-primary dark:text-primary/80 group-hover:text-primary transition-colors duration-300">
          {differentiator.icon}
        </div>

        {/* Number indicator */}
        <div className="absolute top-2 right-3 sm:top-4 sm:right-6 text-xs sm:text-sm font-bold text-gray-200 dark:text-gray-700 group-hover:text-primary/20 transition-colors duration-300">
          {String(differentiator.id).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm md:text-lg font-semibold mb-1 text-dark_black dark:text-white group-hover:text-primary transition-colors duration-300 pr-6">
          {differentiator.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
          {differentiator.description}
        </p>
      </div>

      {/* Hover accent */}
      {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple_blue to-transparent group-hover:w-full transition-all duration-300" /> */}
    </div>
  );
};
