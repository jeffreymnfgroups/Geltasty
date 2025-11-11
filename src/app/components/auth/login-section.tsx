'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CTAButton } from '@/app/components/shared/cta-button'

export default function LoginSection() {
  const textAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  }

  const cardAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
  }

  return (
    <section className='w-full py-28 md:py-36 relative overflow-hidden'>
      <div className='absolute inset-0 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10' />

      <div className='container relative z-10 px-6 lg:px-8 mx-auto'>
        <div className='max-w-6xl mx-auto grid lg:grid-cols-[1.05fr,0.95fr] gap-12 xl:gap-20 items-center'>
          <motion.div
            {...textAnimation}
            className='text-center lg:text-left flex flex-col gap-6'>
            <p className='uppercase tracking-[0.4em] text-primary/70 text-xs md:text-sm'>Account</p>
            <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold brockmann-font dark:text-white leading-tight'>
              Login Access is Rolling Out
              <br />
              <span className='instrument-font italic font-normal dark:text-white/90 text-primary'>
                Very Soon
              </span>
            </h1>
            <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl'>
              We’re putting the final touches on your preparation command center. Secure login, progress dashboards, and mentor sync will be available shortly.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'>
              <CTAButton
                href='/contact'
                className='w-full sm:w-auto'
                labelClassName='whitespace-nowrap'
                arrowSize={32}
              >
                Join the Early Access List
              </CTAButton>
              <CTAButton
                href='/platform'
                variant='secondary'
                className='w-full sm:w-auto'
                labelClassName='whitespace-nowrap'
                arrowSize={32}
              >
                Explore the Platform
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            {...cardAnimation}
            className='bg-white/95 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 xl:p-12 shadow-xl flex flex-col gap-6'>
            <div className='flex flex-col gap-3 text-center lg:text-left'>
              <span className='text-xs uppercase tracking-[0.4em] text-primary/70'>Coming Soon</span>
              <h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>Your Unified Prep Workspace</h2>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                Account login will unlock your personalised dashboards, mentor messaging hub, and revision engines. We’re stress-testing the final pieces before opening the gates.
              </p>
            </div>

            <div className='grid gap-4 text-left text-sm md:text-base text-gray-600 dark:text-gray-300'>
              <div className='flex gap-3 items-start'>
                <span className='mt-1 inline-flex h-2 w-2 rounded-full bg-primary' />
                <p>Track live momentum scores, retention cues, and daily focus cards in a single dashboard.</p>
              </div>
              <div className='flex gap-3 items-start'>
                <span className='mt-1 inline-flex h-2 w-2 rounded-full bg-primary' />
                <p>Message mentors, review feedback, and schedule strategy huddles without leaving the workspace.</p>
              </div>
              <div className='flex gap-3 items-start'>
                <span className='mt-1 inline-flex h-2 w-2 rounded-full bg-primary' />
                <p>Access curated content libraries, revision decks, and simulation tools tailored to your roadmap.</p>
              </div>
            </div>

            <div className='rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-5 py-4 text-xs md:text-sm text-gray-600 dark:text-gray-300 flex flex-col gap-2'>
              <p className='font-medium text-primary'>Status update</p>
              <p>Testing is in progress with our pilot cohort. Early access invites will start shipping soon—add your name to the list above.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
