import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentorship | Gestalty",
    description: "Connect with expert mentors and accelerate your competitive exam preparation journey.",
};

export default function Mentorship() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            Expert <span className="text-primary">Mentorship</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the best. Our mentors are top performers who have successfully cleared NEET and UPSC exams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">One-on-One Sessions</h3>
            <p className="text-gray-600">
              Personalized mentoring sessions tailored to your specific needs and learning goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Group Study</h3>
            <p className="text-gray-600">
              Collaborative learning sessions with peers and mentors for enhanced understanding.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Exam Strategy</h3>
            <p className="text-gray-600">
              Proven strategies and techniques from successful candidates to maximize your performance.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 brockmann-font">Why Choose Our Mentorship?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Our mentors have consistently helped students achieve top ranks in competitive exams.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
              <p className="text-gray-600">
                Every mentoring session is customized based on your current level and target goals.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Find Your Mentor
          </button>
        </div>
      </div>
    </main>
  );
}
