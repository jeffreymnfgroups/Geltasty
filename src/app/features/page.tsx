import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | Gestalty",
    description: "Explore the powerful features that make Gestalty the leading platform for competitive exam preparation.",
};

export default function Features() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            Powerful <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive features designed to accelerate your learning and maximize your exam success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Cognitive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Advanced AI-powered analytics that understand your learning patterns and optimize your study schedule.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Personalized study recommendations</li>
              <li>Performance tracking and insights</li>
              <li>Weakness identification and improvement plans</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Expert Mentorship</h3>
            <p className="text-gray-600 mb-4">
              Connect with top-performing mentors who have successfully cleared competitive exams.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>One-on-one mentoring sessions</li>
              <li>Group study sessions</li>
              <li>Exam strategy guidance</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Adaptive Learning</h3>
            <p className="text-gray-600 mb-4">
              Content that adapts to your learning pace and style for maximum retention.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Spaced repetition algorithms</li>
              <li>Difficulty adjustment</li>
              <li>Multi-modal learning approaches</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Practice Tests</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive test series designed to simulate real exam conditions.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Mock exams with detailed analysis</li>
              <li>Previous year question papers</li>
              <li>Performance benchmarking</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Explore All Features
          </button>
        </div>
      </div>
    </main>
  );
}
