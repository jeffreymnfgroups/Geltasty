'use client'
import React from 'react'
import { CTAButton } from '@/app/components/shared/cta-button'
import { FadeIn } from '@/app/components/shared/fade-in'

export default function FeaturesCTA() {
  return (
    <section className='section-spacing relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-dark_black'>
      <div className='absolute inset-0 h-full w-full before:absolute before:top-1/2 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-linear-to-r before:from-blue_gradient/30 before:via-transparent before:to-yellow_gradient/30 before:blur-3xl dark:before:from-dark_blue_gradient/20 dark:before:via-transparent dark:before:to-dark_yellow_gradient/20 dark:before:rounded-full dark:before:blur-3xl' />

      <div className='container relative z-10 mx-auto px-6 lg:px-8'>
        <FadeIn as='div' className='mx-auto max-w-3xl text-center'>
          <h2 className='brockmann-font text-display-lg mb-6'>
            Switch On the Complete Feature Suite
          </h2>
          <p className='text-body-lg mb-10'>
            Start a guided tour or invite your team to experience how Gestalty transforms preparation into measurable momentum.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <CTAButton
              href='/contact'
              className='w-full sm:w-auto'
              labelClassName='whitespace-nowrap'
            >
              Start Your Trial
            </CTAButton>

            <CTAButton
              href='/pricing'
              variant='secondary'
              className='w-full sm:w-auto'
              labelClassName='whitespace-nowrap'
            >
              Compare Plans
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
