import { Metadata } from "next";
import Link from "next/link";
import { Users, Target, BookOpen, MessageCircle, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "Mentorship | Gestalty",
    description: "Connect with verified NEET/UPSC achievers for personalized, data-driven guidance throughout your exam journey.",
};

export default function Mentorship() {
  return (
    <main className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold brockmann-font mb-4 dark:text-white">
              Expert Mentorship: Learn from Those Who
              <br />
              <span className="instrument-font italic font-normal dark:text-white/70">
                Succeeded
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with verified NEET/UPSC achievers for personalized, data-driven guidance throughout your exam journey
            </p>
          </div>
        </div>
      </section>

      {/* Why Mentorship Matters */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              The Power of Expert Guidance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Having someone who's walked the path makes the difference between struggling alone and strategic success. Our mentors don't just motivate—they use your data to provide precise interventions at the right time.
            </p>
          </div>

          {/* Statistics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3.2x</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Higher Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+24%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mock Score Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+41%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Answer Quality Enhancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Interview Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Mentorship Includes */}
      <section className="w-full py-16 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              What Mentorship Includes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">One-on-One Strategic Guidance</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Individual Attention for Every Aspirant</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Weekly 1:1 video/call sessions</li>
                <li>• Personalized attention to your unique challenges</li>
                <li>• Strategic planning based on your learning data</li>
                <li>• Honest feedback and course correction</li>
                <li>• Continuous availability via platform messaging</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Comprehensive Study Plan Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Custom Roadmap Tailored to You</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Customized syllabus coverage strategy</li>
                <li>• Prioritized subject sequencing based on exam weightage</li>
                <li>• Daily, weekly, and monthly accountability milestones</li>
                <li>• Realistic timelines considering your constraints</li>
                <li>• Flexibility to adapt as you progress</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Answer Writing & Mock Interview Prep</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Exam-Specific Skill Building</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Answer-writing practice and detailed evaluation</li>
                <li>• Mains-specific strategy development</li>
                <li>• Mock interview preparation and feedback</li>
                <li>• Current affairs integration guidance</li>
                <li>• Problem-solving strategy optimization</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Progress Monitoring & Data Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Insights You Can't See Alone</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Weekly performance evaluation using platform data</li>
                <li>• Trend analysis—are you improving or plateauing?</li>
                <li>• Early warning signs of burnout or inefficiency</li>
                <li>• Data-driven recommendations for strategy adjustment</li>
                <li>• Celebration of wins and milestones</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Motivational Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Emotional Resilience for Long Preparation Journeys</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Encouragement during difficult phases</li>
                <li>• Perspective from someone who's been there</li>
                <li>• Mental health check-ins and stress management</li>
                <li>• Realistic expectation-setting to prevent overwhelm</li>
                <li>• Community connection with other aspirants</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Mentor Qualifications</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Verified, Trained, Committed</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Documented proof of exam success (rank card, admit card)</li>
                <li>• Recent exam experience (within last 3-5 years)</li>
                <li>• Subject-specific expertise verification</li>
                <li>• Completed Gestalty mentor training program</li>
                <li>• Background verification completed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentor Network */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              Our Mentor Network
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Verified, Trained, Committed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Verified Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">NEET & UPSC</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mentor Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-white dark:bg-dark_black">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold brockmann-font mb-4 dark:text-white">
              Ready to Connect with Your Mentor?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Join 4,000+ aspirants who've accelerated their success with personalized expert mentorship
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-primary text-white font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  Find Your Mentor
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
                  Schedule Intro Call
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
                href="/mentors"
                className="group bg-transparent text-primary font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
                  View All Mentors
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
