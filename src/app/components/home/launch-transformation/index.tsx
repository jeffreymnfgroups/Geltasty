'use client'
import { CTAButton } from '@/app/components/shared/cta-button'

function LaunchTransformation() {
  return (
    <section className="w-full pt-16 md:pt-24 pb-12 md:pb-16 bg-white dark:bg-dark_black">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Hero Content */}
          <div className="relative flex flex-col text-center items-center gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold w-full leading-tight brockmann-font text-dark_black dark:text-white">
              Ready to Build Your Brain{' '}
              <span className="instrument-font italic font-normal">
                – The Right Way?
              </span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl text-dark_black/80 dark:text-white/80 font-medium leading-relaxed">
              This kit isn't about doing more. It's about doing what works. Start your high-order learning journey now. Let's redefine what it means to study smart. Join us in empowering the next generation with cognitive clarity, strategic discipline, and a system that respects your mind as much as your syllabus.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4">
            <CTAButton
              href="/contact"
              className="w-full max-w-80 md:py-4"
              labelClassName="text-center text-lg"
              arrowSize={40}
            >
              Ready to Join the Cognitive Revolution?
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LaunchTransformation

