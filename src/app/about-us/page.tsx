import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Gestalty",
    description: "Learn about Gestalty's mission to transform competitive exam preparation through science-driven learning.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 brockmann-font">
            About <span className="text-primary">Gestalty</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming NEET and UPSC preparation through cognitive analytics, expert mentorship, and evidence-based learning systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 brockmann-font">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To democratize access to quality education by providing science-driven learning solutions that help students achieve their dreams of clearing competitive exams.
            </p>
            <p className="text-gray-600">
              We believe that every student has the potential to succeed, and with the right guidance, tools, and methodology, they can overcome any challenge.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 brockmann-font">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To become the leading platform for competitive exam preparation by combining cutting-edge technology with proven educational methodologies.
            </p>
            <p className="text-gray-600">
              We envision a future where every aspirant has access to personalized, effective, and engaging learning experiences.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 brockmann-font">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving our platform with the latest educational technology and research.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality learning experience and outcomes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Making quality education accessible to students from all backgrounds and regions.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 brockmann-font">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of a community of successful learners who have transformed their exam preparation journey with Gestalty.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </main>
  );
}
