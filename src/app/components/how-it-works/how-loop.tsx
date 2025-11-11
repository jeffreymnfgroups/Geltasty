'use client'
import React from 'react'
import { motion } from 'framer-motion'

const loop = [
  {
    day: 'Monday',
    focus: 'Strategic Kickoff',
    detail: 'Mentor sync + focus card release + energy planning for the week.',
  },
  {
    day: 'Wednesday',
    focus: 'Execution Pulse',
    detail: 'Mid-week review of progress vs goals with nudges if momentum dips.',
  },
  {
    day: 'Friday',
    focus: 'Assessment & Reflection',
    detail: 'Mocks, practice sets, and reflective journaling auto-compiled for review.',
  },
  {
    day: 'Sunday',
    focus: 'Upgrade the Plan',
    detail: 'Weekly retrospective, lesson extraction, and blueprint adjustments.',
  },
]

export default function HowLoop() {
  return (
    <section className='w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Weekly Operating Loop
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Momentum thrives on rhythm. This loop keeps clarity high and decision fatigue low.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {loop.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg text-left'
            >
              <p className='uppercase tracking-[0.3em] text-xs text-primary/80 mb-2'>{item.day}</p>
              <h3 className='text-xl font-semibold mb-2 dark:text-white'>{item.focus}</h3>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
