'use client'
import { FadeIn } from '@/app/components/shared/fade-in'

export default function ProblemSection() {
  return (
    <section className="section-spacing w-full bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-6 lg:px-8 mx-auto">
        <FadeIn as="div" className="mx-auto max-w-4xl text-center">
          <h2 className="brockmann-font text-display-lg mb-6">
            The Hidden Crisis in Exam Preparation
          </h2>
          <p className="text-body-lg">
            Competitive exam aspirants struggle with fragmented study habits, psychological barriers, poor retention, and lack of structured strategies—creating inefficiency, low confidence, and reduced success rates.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
