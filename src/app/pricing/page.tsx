import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | Gestalty",
    description: "Choose the perfect plan for your competitive exam preparation journey with Gestalty.",
};

export default function Pricing() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to meet your learning needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹999</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Access to core study materials
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic analytics dashboard
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Community support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Mobile app access
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹1999</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Everything in Basic
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced analytics & insights
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Expert mentorship (2 sessions/month)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Practice test series
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority support
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Elite</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹3999</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Everything in Premium
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited mentorship sessions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Personalized study plans
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Mock interview preparation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated success manager
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 brockmann-font">Special Offers</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Annual Subscription</h3>
              <p className="text-gray-600 mb-4">Save 20% when you pay annually</p>
              <span className="text-2xl font-bold text-primary">2 months free!</span>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Student Discount</h3>
              <p className="text-gray-600 mb-4">Special pricing for students</p>
              <span className="text-2xl font-bold text-primary">Up to 30% off!</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
