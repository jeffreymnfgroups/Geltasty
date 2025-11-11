'use client'
import React from 'react'
import { CTAButton } from '@/app/components/shared/cta-button'
import { FadeIn } from '@/app/components/shared/fade-in'

export default function MentorshipCTA() {
  return (
    <section className='section-spacing relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-dark_black'>
      <div className='absolute inset-0 w-full h-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient/30 before:via-transparent before:to-yellow_gradient/30 before:rounded-full before:top-1/2 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient/20 dark:before:via-transparent dark:before:to-dark_yellow_gradient/20 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10' />

      <div className='container relative z-10 px-6 lg:px-8 mx-auto'>
        <FadeIn as='div' className='mx-auto max-w-3xl text-center'>
          <h2 className='brockmann-font text-display-lg mb-6'>
            Find Your Mentor Match
          </h2>
          <p className='text-body-lg mb-10'>
            Share your context, get paired within 48 hours, and begin your first strategy sprint.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <CTAButton
              href='/contact'
              className='w-full sm:w-auto'
              labelClassName='whitespace-nowrap'
              arrowSize={32}
            >
              Book Mentor Discovery Call
            </CTAButton>

            <CTAButton
              href='/how-it-works'
              variant='secondary'
              className='w-full sm:w-auto'
              labelClassName='whitespace-nowrap'
              arrowSize={32}
            >
              View Preparation Playbook
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
