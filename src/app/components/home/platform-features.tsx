'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  BarChart3,
  Brain,
  Users,
  Map,
  Lightbulb,
  Layout,
  Users2,
  Target,
  RotateCw,
  Zap,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: number;
}

const features: Feature[] = [
  {
    number: 1,
    title: "Learning Analytics",
    description:
      "Track Reading, Learning, Revision, and Practice stages in real-time with visual progress indicators.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "Quantified Learning Quality",
    description:
      "Measure depth of understanding, application ability, and retention strength—not just time spent.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Mentor Community",
    description:
      "1:1 strategic sessions, customized study plans, answer-writing evaluation, and mock interview prep.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: 4,
    title: "Challenge Map",
    description:
      "Interactive roadmap identifying weak spots with step-by-step leveling system to build mastery progressively.",
    icon: <Map className="w-8 h-8" />,
  },
  {
    number: 5,
    title: "Metacognitive Tools",
    description:
      "Develop planning, self-monitoring, and reflection skills—learn how to learn more effectively.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    number: 6,
    title: "Multi-Layer Dashboards",
    description:
      "Separate dashboards for students, mentors, and parents showing real-time progress and intervention needs.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    number: 7,
    title: "Accountability Partnerships",
    description:
      "Peer-matching system with regular check-ins and momentum tracking to maintain consistency.",
    icon: <Users2 className="w-8 h-8" />,
  },
  {
    number: 8,
    title: "SMART Goal Framework",
    description:
      "Structure your preparation with Specific, Measurable, Achievable, Relevant, Time-bound objectives.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    number: 9,
    title: "Retention & Revision System",
    description:
      "AI-powered reminders based on spaced repetition and cognitive forgetting curves to maximize retention.",
    icon: <RotateCw className="w-8 h-8" />,
  },
  {
    number: 10,
    title: "Psychology Integration",
    description:
      "Every tool backed by proven cognitive science research—not random features, but validated interventions.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
];

export function PlatformFeatures() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-dark_black">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold brockmann-font mb-4 dark:text-white">
            10 Science-Driven Tools for
            <br />
            <span className="instrument-font italic font-normal dark:text-white/70">
              Exam Mastery
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From overwhelm to mastery: evidence-driven, personalized, accountable learning
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full py-8 flex justify-center">
          <Link
            href='/contact'
            className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-4 rounded-full md:max-w-64 w-full sm:w-auto border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue dark:hover:text-purple_blue'
          >
            <span className='flex-1 text-center transform transition-transform duration-200 ease-in-out group-hover:scale-95'>
              Explore All Features
            </span>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='flex-shrink-0 transform transition-transform duration-200 ease-in-out group-hover:scale-90 group-hover:rotate-45'
            >
              <rect
                width='40'
                height='40'
                rx='20'
                className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
              />
              <path
                d='M15.832 15.3334H24.1654V23.6667'
                className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15.832 23.6667L24.1654 15.3334'
                className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const isTopRow = index < 5;

  return (
    <div
      className={cn(
        "group relative p-6 md:p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 transition-all duration-300 hover:border-purple_blue/50 overflow-hidden",
        "hover:shadow-lg dark:hover:shadow-purple_blue/20"
      )}
    >
      {/* Background gradient on hover */}
      {isTopRow && (
        <div className="absolute inset-0 bg-gradient-to-b from-purple_blue/10 dark:from-purple_blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      {!isTopRow && (
        <div className="absolute inset-0 bg-gradient-to-t from-purple_blue/10 dark:from-purple_blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Animated border accent on hover */}
      {/* <div className="absolute left-0 inset-y-0 h-1 w-1 rounded-r-full bg-purple_blue opacity-0 group-hover:opacity-100 group-hover:h-8 transition-all duration-300 origin-top" /> */}

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 text-purple_blue dark:text-purple_blue/80 group-hover:text-purple_blue transition-colors duration-300">
          {feature.icon}
        </div>

        {/* Number indicator */}
        <div className="absolute top-6 right-6 text-lg font-bold text-gray-200 dark:text-gray-700 group-hover:text-purple_blue/20 transition-colors duration-300">
          {String(feature.number).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 text-dark_black dark:text-white group-hover:text-purple_blue transition-colors duration-300 pr-6">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Hover indicator line */}
      {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple_blue group-hover:w-full transition-all duration-300" /> */}
    </div>
  );
};
