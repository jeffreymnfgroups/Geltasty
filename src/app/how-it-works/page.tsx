import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works | Gestalty",
    description: "Learn how Gestalty's science-driven approach transforms your competitive exam preparation.",
};

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            How It <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process designed to maximize your learning efficiency and exam success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Assessment</h3>
            <p className="text-gray-600">
              Comprehensive evaluation of your current knowledge level and learning style.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Plan</h3>
            <p className="text-gray-600">
              AI-generated study plan tailored to your strengths, weaknesses, and timeline.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Guided Learning</h3>
            <p className="text-gray-600">
              Structured learning with expert mentorship and adaptive content delivery.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              4
            </div>
            <h3 className="text-xl font-semibold mb-4">Success</h3>
            <p className="text-gray-600">
              Continuous monitoring and optimization to ensure exam success.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">The Science Behind Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Cognitive Analytics</h3>
              <p className="text-gray-600">
                Advanced algorithms analyze your learning patterns to optimize study schedules and content delivery.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Spaced Repetition</h3>
              <p className="text-gray-600">
                Scientifically-proven technique to enhance long-term retention and memory consolidation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Adaptive Learning</h3>
              <p className="text-gray-600">
                Content difficulty and pace automatically adjust based on your performance and progress.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </main>
  );
}
