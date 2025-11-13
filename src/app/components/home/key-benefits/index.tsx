import { CardStack } from "../../ui/card-stack";
import { cn } from "@/lib/utils";

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

const PROGRESS_CARDS = [
  {
    id: 0,
    name: "Personalized Learning",
    designation: "Optimized for Each Student",
    content: (
      <p>
        <Highlight>Personalized learning path</Highlight> optimized for each student, adapting to individual learning styles and pace.
      </p>
    ),
  },
  {
    id: 1,
    name: "Academic Performance",
    designation: "Improved Test Scores",
    content: (
      <p>
        Helps <Highlight>improve academic performance</Highlight> and test scores through targeted practice and adaptive learning strategies.
      </p>
    ),
  },
  {
    id: 2,
    name: "Engaging Learning",
    designation: "Interactive Experience",
    content: (
      <p>
        Makes studying more <Highlight>engaging and interactive</Highlight> with gamified elements and dynamic content delivery.
      </p>
    ),
  },
];

const GUIDANCE_CARDS = [
  {
    id: 0,
    name: "Convenient Access",
    designation: "Anytime, Anywhere",
    content: (
      <p>
        <Highlight>Convenient access</Highlight> anytime, anywhere - study on your schedule with mobile and web platforms.
      </p>
    ),
  },
  {
    id: 1,
    name: "Cost-Effective",
    designation: "Alternative to Tutoring",
    content: (
      <p>
        <Highlight>Cost-effective alternative</Highlight> to private tutoring, providing premium learning resources at a fraction of the cost.
      </p>
    ),
  },
];

const INSIGHTS_CARDS = [
  {
    id: 0,
    name: "Stress Relief",
    designation: "For Parents & Students",
    content: (
      <p>
        <Highlight>Relief for stressed parents</Highlight> and students with structured learning paths and clear progress tracking.
      </p>
    ),
  },
  {
    id: 1,
    name: "Data-Driven Insights",
    designation: "Strengths & Improvement Areas",
    content: (
      <p>
        <Highlight>Data-driven insight</Highlight> into student's strengths and improvement areas with detailed analytics and recommendations.
      </p>
    ),
  },
];

export default function KeyBenefits() {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="container">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="max-w-4xl text-center">
            <h2 className='brockmann-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-dark_black dark:text-white px-2'>
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

          {/* Three Separate CardStacks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {/* Left CardStack - Progress Tracking */}
            <div className="flex items-center justify-center">
              <CardStack items={PROGRESS_CARDS} />
            </div>
            
            {/* Middle CardStack - Expert Guidance */}
            <div className="flex items-center justify-center">
              <CardStack items={GUIDANCE_CARDS} />
            </div>
            
            {/* Right CardStack - Performance Insights */}
            <div className="flex items-center justify-center">
              <CardStack items={INSIGHTS_CARDS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
