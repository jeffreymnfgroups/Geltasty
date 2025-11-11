'use client'

import { FadeIn } from "@/app/components/shared/fade-in";
import { CTAButton } from "@/app/components/shared/cta-button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Handshake,
  Map,
  Lightbulb,
  Layout,
  Puzzle,
  Target,
  RotateCw,
  UserCheck,
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
      "Effort Quality Index measures depth of understanding, application ability, and retention strength—not just time spent.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Mentor Community",
    description:
      "1:1 strategic sessions with progress sync, customized study plans, answer-writing evaluation, and mock interview prep.",
    icon: <Handshake className="w-8 h-8" />,
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
    title: "Metacognitive Skill Tools",
    description:
      "Develop planning, self-monitoring, and reflection skills—learn how to learn more effectively.",
    icon: <Puzzle className="w-8 h-8" />,
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
      "Peer-matching system with regular check-ins and peer momentum sync to maintain consistency.",
    icon: <UserCheck className="w-8 h-8" />,
  },
  {
    number: 8,
    title: "SMART Goal Planning Framework",
    description:
      "Structure your preparation with Specific, Measurable, Achievable, Relevant, Time-bound objectives.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    number: 9,
    title: "Revision & Retention Engine",
    description:
      "Spaced repetition system with AI-powered reminders based on cognitive forgetting curves to maximize retention.",
    icon: <RotateCw className="w-8 h-8" />,
  },
  {
    number: 10,
    title: "Psychology-Integrated Feedback",
    description:
      "Cognitive bias detection and feedback backed by proven cognitive science research—not random features, but validated interventions.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
];

export function PlatformFeatures() {
  return (
    <section className="section-spacing bg-white dark:bg-dark_black">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn as="div" className="text-center mb-16 md:mb-20">
          <h2 className="text-display-xl brockmann-font mb-4">
            10 Science-Driven Tools for
            <br />
            <span className="instrument-font italic font-normal dark:text-white/70">
              Exam Mastery
            </span>
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            From overwhelm to mastery: evidence-driven, personalized, accountable learning
          </p>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
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
          <FadeIn>
            <CTAButton
              href="/contact"
              className="w-full max-w-xs sm:w-auto"
              labelClassName="text-center"
            >
              Explore All Features
            </CTAButton>
          </FadeIn>
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
    <FadeIn
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary/50 dark:border-gray-800 dark:bg-gray-900/50 md:p-7",
        "hover:shadow-lg dark:hover:shadow-primary/20"
      )}
      delay={index * 0.05}
    >
      {/* Background gradient on hover */}
      {isTopRow && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 dark:from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      {!isTopRow && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 dark:from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Animated border accent on hover */}
      {/* <div className="absolute left-0 inset-y-0 h-1 w-1 rounded-r-full bg-purple_blue opacity-0 group-hover:opacity-100 group-hover:h-8 transition-all duration-300 origin-top" /> */}

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 text-primary dark:text-primary/80 group-hover:text-primary transition-colors duration-300">
          {feature.icon}
        </div>

        {/* Number indicator */}
        <div className="absolute top-6 right-6 text-lg font-bold text-gray-200 dark:text-gray-700 group-hover:text-primary/20 transition-colors duration-300">
          {String(feature.number).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3 className="text-title-md mb-3 pr-6 transition-colors duration-300 group-hover:text-primary">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-body-sm">
          {feature.description}
        </p>
      </div>

      {/* Hover indicator line */}
      {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple_blue group-hover:w-full transition-all duration-300" /> */}
    </FadeIn>
  );
};
