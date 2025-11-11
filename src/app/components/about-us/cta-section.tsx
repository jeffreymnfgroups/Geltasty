'use client'

import { CTAButton } from '@/app/components/shared/cta-button'
import { FadeIn } from '@/app/components/shared/fade-in'

export default function CTASection() {
  return (
    <section className="section-spacing relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-dark_black">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 w-full h-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient/30 before:via-transparent before:to-yellow_gradient/30 before:rounded-full before:top-1/2 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient/20 dark:before:via-transparent dark:before:to-dark_yellow_gradient/20 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10" />
      
      <div className="container relative z-10 px-6 lg:px-8 mx-auto">
        <FadeIn as="div" className="mx-auto max-w-3xl text-center">
          <h2 className="brockmann-font text-display-lg mb-6">
            Ready to Join the Cognitive Revolution?
          </h2>
          <p className="text-body-lg mb-10">
            Let's redefine what it means to study smart
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              href="/contact"
              className="w-full sm:w-auto"
              labelClassName="whitespace-nowrap"
            >
              Start Your Journey
            </CTAButton>

            <CTAButton
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
              labelClassName="whitespace-nowrap"
            >
              Become a Mentor
            </CTAButton>

            <CTAButton
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
              labelClassName="whitespace-nowrap"
            >
              Contact Us
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
