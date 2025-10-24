import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Platform | Gestalty",
    description: "Discover our comprehensive learning platform designed for NEET and UPSC preparation success.",
};

export default function Platform() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            Our <span className="text-primary">Platform</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive learning ecosystem designed to transform your competitive exam preparation through science-driven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Learning Analytics</h3>
            <p className="text-gray-600">
              Advanced analytics to track your progress, identify strengths and weaknesses, and optimize your study strategy.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Expert Mentorship</h3>
            <p className="text-gray-600">
              Connect with experienced mentors who have successfully cleared NEET and UPSC exams.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Mobile App</h3>
            <p className="text-gray-600">
              Study on-the-go with our feature-rich mobile application available on iOS and Android.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </main>
  );
}
