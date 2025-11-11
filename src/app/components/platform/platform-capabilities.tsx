'use client'
import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  {
    stage: 'Onboarding Week',
    headline: 'Clarity from Day Zero',
    details: [
      'Adaptive diagnostic to map strengths, gaps, and learning behaviors',
      'Instant study blueprint with recommended mentor pairings',
      'Habits and constraints intake to personalize scheduling engine',
    ],
  },
  {
    stage: 'Execution Rhythm',
    headline: 'Structure without Rigidity',
    details: [
      'Daily focus cards generated from performance data',
      'Integrated content, practice, and revision queues',
      'Automated reminders that adapt to pace shifts and missed sessions',
    ],
  },
  {
    stage: 'Optimization Loop',
    headline: 'Every Cycle Improves Outcomes',
    details: [
      'Weekly retrospectives summarised for mentors and parents',
      'Stress & energy tracking prompts to prevent burnout',
      'Escalation playbooks when progress drops below thresholds',
    ],
  },
]

export default function PlatformCapabilities() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-16 items-start'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
              Capabilities Across the Entire Journey
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
              Gestalty is not a content repository. It is a preparation operating system that aligns your study actions with proven strategic milestones.
            </p>
            <div className='bg-primary/10 dark:bg-primary/20 border border-primary/30 dark:border-primary/30 rounded-2xl p-6 text-sm md:text-base text-gray-700 dark:text-gray-200'>
              <p className='font-medium mb-2 text-primary'>Platform insight</p>
              <p>
                78% of aspirants on Gestalty achieve consistent weekly improvement within their first 30 days. The system keeps momentum by combining data, human insight, and behavioral nudges.
              </p>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute left-[22px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-primary/5 dark:from-primary/60 dark:via-primary/25 dark:to-primary/10 pointer-events-none' aria-hidden='true' />
            <div className='space-y-10'>
              {milestones.map((milestone, index) => (
                <motion.article
                  key={milestone.stage}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='relative pl-20 sm:pl-28'
                >
                  <span className='absolute left-[22px] top-3 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 bg-white/90 dark:bg-dark_black/90 shadow-[0_12px_32px_rgba(247,181,0,0.18)]'>
                    <span className='h-3 w-3 rounded-full bg-primary' />
                  </span>
                  <div className='rounded-2xl border border-primary/15 bg-white/80 dark:bg-dark_black/80 shadow-[0_18px_36px_rgba(247,181,0,0.08)] dark:shadow-[0_18px_36px_rgba(247,181,0,0.12)] backdrop-blur-sm px-6 py-7 transition-colors'>
                    <p className='text-xs font-semibold uppercase tracking-[0.32em] text-primary/90 dark:text-primary mb-3'>
                      {milestone.stage}
                    </p>
                    <h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                      {milestone.headline}
                    </h3>
                    <ul className='space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300'>
                      {milestone.details.map((detail) => (
                        <li key={detail} className='flex items-start gap-3'>
                          <span className='mt-1 h-2.5 w-2.5 rounded-full bg-primary/80 dark:bg-primary' />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
