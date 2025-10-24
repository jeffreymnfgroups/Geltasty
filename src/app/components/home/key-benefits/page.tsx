import { Metadata } from "next";
import { CardStack } from "../../ui/card-stack";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Key Benefits | Geltasty",
  description: "Discover the key benefits of Geltasty - Track progress, get expert guidance, and gain data-driven insights for your learning journey.",
};

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
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
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
    name: "Progress Tracking",
    designation: "Smart Analytics System",
    content: (
      <p>
        Track <Highlight>stage-wise learning progress</Highlight> with real-time analytics that show exactly where you are in your learning journey.
      </p>
    ),
  },
  {
    id: 1,
    name: "Learning Analytics",
    designation: "Real-time Insights",
    content: (
      <p>
        Our <Highlight>smart progress tracking</Highlight> system visualizes your learning milestones with detailed analytics and personalized recommendations.
      </p>
    ),
  },
];

const GUIDANCE_CARDS = [
  {
    id: 0,
    name: "Expert Guidance",
    designation: "AI-Powered Mentorship",
    content: (
      <p>
        Get <Highlight>expert mentor guidance</Highlight> tailored to your cognitive style, providing personalized guidance that adapts to how you learn best.
      </p>
    ),
  },
  {
    id: 1,
    name: "AI Mentorship",
    designation: "Personalized Learning",
    content: (
      <p>
        Our <Highlight>AI-powered mentorship</Highlight> system delivers personalized learning paths and expert recommendations tailored to your unique style.
      </p>
    ),
  },
];

const INSIGHTS_CARDS = [
  {
    id: 0,
    name: "Performance Insights",
    designation: "Scientific Precision Analytics",
    content: (
      <p>
        Access <Highlight>data-driven performance insights</Highlight> that eliminate guesswork and provide precise analytics on your learning performance.
      </p>
    ),
  },
  {
    id: 1,
    name: "Scientific Analysis",
    designation: "Evidence-Based Learning",
    content: (
      <p>
        Optimize your study strategy with <Highlight>scientific precision</Highlight> through comprehensive analytics and evidence-based learning optimization.
      </p>
    ),
  },
];

export default function KeyBenefits() {
  return (
    <section className="2xl:py-20 py-11">
      <div className="container">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 brockmann-font">
                The key benefits of{' '}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  Geltasty
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Unlock the Potential of Innovation, Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.
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

