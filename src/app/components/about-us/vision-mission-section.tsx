'use client'
import { FadeIn } from '@/app/components/shared/fade-in'

const visionPoints = [
  'Success comes from strategic systems, not just hard work',
  'Data replaces guesswork in preparation planning',
  'Expert guidance is accessible to all, not just the privileged',
  'Lifelong learning skills develop alongside exam success',
]

const missionPoints = [
  'Quantifying subjective behaviors into trackable metrics',
  'Blending psychology with pedagogy for intelligent interventions',
  'Providing expert mentorship informed by personal data',
  'Building systems that respect cognitive science, not just preferences',
]

export default function VisionMissionSection() {
  return (
    <section className="section-spacing w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-dark_black">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision */}
          <FadeIn
            as="div"
            className="card-surface p-8 md:p-10"
          >
            <h2 className="brockmann-font text-title-md md:text-display-lg mb-6">
              Vision: Creating Equitable Excellence
            </h2>
            <p className="text-body-md mb-8">
              To build a learning ecosystem where every aspirant—regardless of geographic location, economic background, or prior educational access—can access personalized, research-validated preparation tools that ensure equitable opportunity, measurable excellence, and cognitive mastery.
            </p>
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <FadeIn
                  key={index}
                  delay={index * 0.06}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-body-sm">
                    {point}
                  </p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Mission */}
          <FadeIn
            as="div"
            delay={0.1}
            className="card-surface p-8 md:p-10"
          >
            <h2 className="brockmann-font text-title-md md:text-display-lg mb-6">
              Mission: From Fragmentation to Integration
            </h2>
            <p className="text-body-md mb-8">
              To transform fragmented learning behaviors into strategic metrics that foster cohesive, outcome-driven study experiences—consolidating acquired knowledge into clear, actionable direction at every stage of the learning journey.
            </p>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <FadeIn
                  key={index}
                  delay={0.1 + index * 0.06}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-body-sm">
                    {point}
                  </p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
