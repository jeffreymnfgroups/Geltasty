import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | Gestalty",
    description: "Affordable pricing plans for NEET & UPSC exam preparation. Choose from Basic, Premium, or Elite plans with expert mentorship, learning analytics, and personalized study tools. Special student discounts available.",
    keywords: [
        "NEET coaching price",
        "UPSC coaching price",
        "competitive exam pricing",
        "NEET online course fees",
        "UPSC online course fees",
        "exam preparation cost",
        "NEET study plan pricing",
        "UPSC study plan pricing",
        "affordable exam coaching",
        "student discount NEET UPSC"
    ],
    openGraph: {
        title: "Pricing | Gestalty - NEET & UPSC Exam Preparation",
        description: "Affordable pricing plans for NEET & UPSC exam preparation. Choose from Basic, Premium, or Elite plans with expert mentorship and personalized study tools.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing | Gestalty",
        description: "Affordable pricing plans for NEET & UPSC exam preparation. Choose from Basic, Premium, or Elite plans with expert mentorship and personalized study tools.",
    },
};

export default function Pricing() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            Invest in Precision
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Value scales with guidance and personalization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white dark:bg-dark_black p-8 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Explorer</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold dark:text-white">Free</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Best For: Beginners</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Basic tracking + reminders</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors rounded-full">
              Choose Your Plan
            </button>
          </div>
          
          <div className="bg-white dark:bg-dark_black p-8 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Strategist</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold dark:text-white">₹499</span>
              <span className="text-gray-600 dark:text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Best For: Independent learners</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Full analytics + parent dashboard</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors rounded-full">
              Choose Your Plan
            </button>
          </div>
          
          <div className="bg-white dark:bg-dark_black p-8 rounded-lg shadow-lg border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Mentor Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold dark:text-white">₹999</span>
              <span className="text-gray-600 dark:text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Best For: Students needing regular guidance</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Unlimited bookings + priority support</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors rounded-full">
              Choose Your Plan
            </button>
          </div>
          
          <div className="bg-white dark:bg-dark_black p-8 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Elite</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold dark:text-white">₹1,499</span>
              <span className="text-gray-600 dark:text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Best For: High-performers</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">AI-path planning + group mentoring</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors rounded-full">
              Choose Your Plan
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <span className="font-semibold">30-Day Money-Back Guarantee</span>
          </p>
        </div>
      </div>
    </main>
  );
}

