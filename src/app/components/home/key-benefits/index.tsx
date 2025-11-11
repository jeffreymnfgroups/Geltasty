'use client'

import { cn } from "@/lib/utils";
import { FadeIn } from "@/app/components/shared/fade-in";

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-700/[0.2] dark:text-yellow-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

// SVG Icon Components
const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DollarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const KEY_BENEFITS = [
  {
    text: "Personalized learning path optimized for each student",
    icon: TargetIcon,
  },
  {
    text: "Helps improve academic performance and test scores",
    icon: TrendingUpIcon,
  },
  {
    text: "Makes studying more engaging and interactive",
    icon: SparklesIcon,
  },
  {
    text: "Convenient access anytime, anywhere",
    icon: ClockIcon,
  },
  {
    text: "Cost-effective alternative to private tutoring",
    icon: DollarIcon,
  },
  {
    text: "Relief for stressed parents and students",
    icon: HeartIcon,
  },
  {
    text: "Data-driven insight into student's strengths and improvement areas",
    icon: BarChartIcon,
  },
];

export default function KeyBenefits() {
  return (
    <section className="section-spacing bg-white dark:bg-dark_black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="max-w-4xl text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 brockmann-font">
                  The key benefits of{' '}
                  <span className="instrument-font italic font-normal dark:text-white/70">
                    Gestalty
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Transform your competitive exam preparation with science-driven learning tools that track your progress, provide expert mentorship, and deliver data-driven insights for strategic success.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Benefits List */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KEY_BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <FadeIn key={index} delay={0.1 + index * 0.05}>
                    <div
                      className={cn(
                        "group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300",
                        "hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/10"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon />
                        </div>
                        
                        {/* Text */}
                        <p className="text-base font-medium text-gray-700 dark:text-gray-300 leading-relaxed flex-1 pt-1">
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Highlighted Text Section */}
            <FadeIn delay={0.5}>
              <div className="mt-12 p-6 md:p-8 rounded-xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/50">
                <p className="text-lg md:text-xl text-center text-gray-800 dark:text-gray-200 leading-relaxed">
                  By identifying <Highlight>weak areas through updated beliefs</Highlight>, students can allocate study time more effectively, enhancing overall exam readiness.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
