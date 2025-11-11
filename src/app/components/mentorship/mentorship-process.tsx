'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInConfig } from '@/app/components/shared/fade-in'

const steps = [
  {
    title: '01 • Match & Diagnose',
    description:
      'Share your goals, schedule, and learning patterns. We pair you with a mentor whose strengths complement your needs.',
  },
  {
    title: '02 • Blueprint Sprint',
    description:
      'In the first two sessions, you co-create a preparation architecture complete with milestones, rituals, and escalation triggers.',
  },
  {
    title: '03 • Weekly Operating Rhythm',
    description:
      'Execute. Your mentor reviews data, refines tactics, and keeps you accountable with compassionate candor.',
  },
  {
    title: '04 • Review & Elevate',
    description:
      'Monthly deep-dives assess progress, adjust strategy for upcoming phases, and capture learnings for future cohorts.',
  },
]

export default function MentorshipProcess() {
  return (
    <section className='relative w-full overflow-hidden bg-gradient-to-b from-white via-white/80 to-[#fff6d8] py-20 dark:from-dark_black dark:via-[#1c1c1d] dark:to-[#242323] md:py-24'>
      <div className='pointer-events-none absolute inset-0 -z-[1] opacity-60 mix-blend-screen dark:opacity-40'>
        <div className='mx-auto h-full w-full max-w-4xl bg-[radial-gradient(circle_farthest-side_at_top,rgba(247,181,0,0.12),transparent_65%)] dark:bg-[radial-gradient(circle_farthest-side_at_top,rgba(247,181,0,0.22),transparent_65%)]' />
      </div>

      <div className='container mx-auto px-6 lg:px-8'>
        <motion.div
          {...fadeInConfig()}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <span className='inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.32em] text-primary dark:bg-primary/15'>
            Guided Progression
          </span>
          <h2 className='brockmann-font mt-6 text-3xl font-bold text-dark_black dark:text-white md:text-4xl'>
            The Mentorship Flow
          </h2>
          <p className='mt-4 text-lg text-dark_black/80 dark:text-white/70'>
            Structured, transparent, and adaptive—so you always know what happens next.
          </p>
        </motion.div>

        <div className='relative mx-auto max-w-4xl'>
          <div className='absolute inset-y-6 hidden w-px -translate-x-1/2 transform md:block' style={{ left: '50%' }}>
            <div className='absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,rgba(247,181,0,0),rgba(247,181,0,0.85)_18%,rgba(247,181,0,0.85)_82%,rgba(247,181,0,0))] dark:hidden' />
            <div className='absolute inset-0 hidden rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.6)_18%,rgba(255,255,255,0.6)_82%,rgba(255,255,255,0))] dark:block' />
          </div>
          <div className='space-y-12'>
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              const renderStepCard = (viewport: 'mobile' | 'desktop') => (
                <motion.article
                  key={`${step.title}-${viewport}`}
                  {...fadeInConfig(index * 0.08, true, 0.2)}
                  className='group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-white/90 to-primary/5 px-6 py-6 shadow-[0_20px_60px_rgba(8,15,52,0.08)] ring-1 ring-white/40 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(8,15,52,0.14)] dark:border-white/10 dark:from-dark_black dark:via-[#1f1f20] dark:to-primary/10 dark:ring-white/5 dark:shadow-[0_20px_60px_rgba(8,15,52,0.35)] dark:hover:shadow-[0_36px_90px_rgba(8,15,52,0.5)] sm:px-8 sm:py-8'
                >
                  <div className='absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_top_right,rgba(247,181,0,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(247,181,0,0.28),transparent_55%)]' />
                  <span className='inline-flex items-center justify-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary/90 dark:bg-primary/20 dark:text-primary'>
                    Step {`${index + 1}`.padStart(2, '0')}
                  </span>
                  <div className='mt-4 space-y-3'>
                    <h3 className='text-lg font-semibold text-dark_black dark:text-white md:text-xl'>
                      {step.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-dark_black/75 dark:text-white/65 md:text-base'>
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              )

              return (
                <div
                  key={step.title}
                  className='relative grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center'
                >
                  {isEven ? (
                    <>
                      <div className='hidden md:block md:justify-self-end md:px-4'>{renderStepCard('desktop')}</div>
                      <div className='hidden md:flex md:flex-col md:items-center md:gap-4'>
                        <span className='relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white shadow-[0_0_0_10px_rgba(247,181,0,0.12)] dark:border-primary/80 dark:bg-dark_black dark:shadow-[0_0_0_10px_rgba(247,181,0,0.18)]'>
                          <span className='h-2 w-2 rounded-full bg-primary dark:bg-primary/90' />
                        </span>
                        {index !== steps.length - 1 && (
                          <span className='relative h-20 w-px'>
                            <span className='absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,rgba(247,181,0,0),rgba(247,181,0,0.85)_35%,rgba(247,181,0,0.85)_65%,rgba(247,181,0,0))] dark:hidden' />
                            <span className='absolute inset-0 hidden rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.55)_35%,rgba(255,255,255,0.55)_65%,rgba(255,255,255,0))] dark:block' />
                          </span>
                        )}
                      </div>
                      <div className='hidden md:block' />
                    </>
                  ) : (
                    <>
                      <div className='hidden md:block' />
                      <div className='hidden md:flex md:flex-col md:items-center md:gap-4'>
                        <span className='relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white shadow-[0_0_0_10px_rgba(247,181,0,0.12)] dark:border-primary/80 dark:bg-dark_black dark:shadow-[0_0_0_10px_rgba(247,181,0,0.18)]'>
                          <span className='h-2 w-2 rounded-full bg-primary dark:bg-primary/90' />
                        </span>
                        {index !== steps.length - 1 && (
                          <span className='relative h-20 w-px'>
                            <span className='absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,rgba(247,181,0,0),rgba(247,181,0,0.85)_35%,rgba(247,181,0,0.85)_65%,rgba(247,181,0,0))] dark:hidden' />
                            <span className='absolute inset-0 hidden rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.55)_35%,rgba(255,255,255,0.55)_65%,rgba(255,255,255,0))] dark:block' />
                          </span>
                        )}
                      </div>
                      <div className='hidden md:block md:justify-self-start md:px-4'>{renderStepCard('desktop')}</div>
                    </>
                  )}

                  <div className='md:hidden'>{renderStepCard('mobile')}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}