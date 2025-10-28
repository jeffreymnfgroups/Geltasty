import { Metadata } from "next";
import Link from "next/link";
import { Brain, Target, Users, Lightbulb, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Gestalty",
    description: "Built by learners, backed by science. Learn about Gestalty's mission to transform competitive exam preparation through cognitive science and data analytics.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold brockmann-font mb-4 dark:text-white">
              Built by Learners, Backed by
              <br />
              <span className="instrument-font italic font-normal dark:text-white/70">
                Science
              </span>
          </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Gestalty emerged from a simple recognition: competitive exam preparation deserves better than guesswork and generic advice
          </p>
          </div>
        </div>
      </section>

      {/* The Problem We Saw */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              The Hidden Crisis in Exam Preparation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Competitive exam aspirants struggle with fragmented study habits, psychological barriers, poor retention, and lack of structured strategies—creating inefficiency, low confidence, and reduced success rates.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution: The Gestalt Approach */}
      <section className="w-full py-16 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              "The Whole Is Greater Than the Sum of Its Parts"
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Gestalt psychology teaches that organized wholes are perceived as more than individual parts combined. We apply this to learning: isolated facts and random study sessions don't create exam readiness. Integration, pattern recognition, and holistic systems do.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              We transform fragmented study efforts—scattered notes, random revisions, disconnected practice—into unified mastery systems where every piece connects to create complete understanding.
            </p>
        </div>

          {/* Core Learning Frameworks */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Andragogy (Adult Learning)</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Structured, evidence-driven systems that foster self-motivation and respect adult learners' autonomy and experience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Constructivism</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Knowledge is actively constructed through connecting new information to prior understanding—creating meaningful, sticky, and transferable learning.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Metacognitive Regulation</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Planning, monitoring, and evaluating your own learning—thinking about thinking to optimize strategies through strategic adaptation and self-correction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white">
                Vision: Creating Equitable Excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To build a learning ecosystem where every aspirant—regardless of geographic location, economic background, or prior educational access—can access personalized, research-validated preparation tools that ensure equitable opportunity, measurable excellence, and cognitive mastery.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Success comes from strategic systems, not just hard work</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Data replaces guesswork in preparation planning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Expert guidance is accessible to all, not just the privileged</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lifelong learning skills develop alongside exam success</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white">
                Mission: From Fragmentation to Integration
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To transform fragmented learning behaviors into strategic metrics that foster cohesive, outcome-driven study experiences—consolidating acquired knowledge into clear, actionable direction at every stage of the learning journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Quantifying subjective behaviors into trackable metrics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Blending psychology with pedagogy for intelligent interventions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Providing expert mentorship informed by personal data</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Building systems that respect cognitive science, not just preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="w-full py-16 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-4">
                <Users className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">To Students</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• We never build features just because they're trendy</li>
                <li>• Every tool is grounded in research and validated through use</li>
                <li>• Your data belongs to you and serves only your success</li>
                <li>• We continuously improve based on your feedback</li>
                <li>• We celebrate your wins and support you through struggles</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-4">
                <Award className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">To Mentors</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• We provide the tools and training to deliver exceptional guidance</li>
                <li>• We compensate fairly for expertise and time</li>
                <li>• We protect you from administrative burden with automated systems</li>
                <li>• We foster a community of continuous professional development</li>
                <li>• We honor your commitment to aspirant success</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-4">
                <Heart className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">To Parents</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• We provide appropriate visibility without invasion of privacy</li>
                <li>• We translate metrics into understandable insights</li>
                <li>• We enable supportive presence without micromanagement</li>
                <li>• We respect family dynamics and constraints</li>
                <li>• We communicate openly about what works and what doesn't</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-4">
                <Lightbulb className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">To the Ecosystem</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• We share research findings openly</li>
                <li>• We welcome academic collaboration</li>
                <li>• We advocate for evidence-based educational reform</li>
                <li>• We measure our success by aspirant outcomes, not just revenue</li>
                <li>• We build for long-term impact, not short-term profits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              Ready to Join the Cognitive Revolution?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Let's redefine what it means to study smart
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-primary text-white font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  Start Your Journey (for aspirants)
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
                  Become a Mentor (for successful achievers)
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
                href="/contact"
                className="group bg-transparent text-primary font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  Contact Us (general inquiries)
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
