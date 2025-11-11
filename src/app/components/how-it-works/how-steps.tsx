'use client'
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Profile & Diagnostic',
    description: 'Baseline assessments, learning behavior intake, and constraint mapping to understand exactly where you stand.',
    tags: ['Learning DNA scan', 'Cognitive preference profiling', 'Strength & gap visibility'],
  },
  {
    number: '02',
    title: 'Mentor Match & Blueprint',
    description: 'Pairing with a verified achiever who co-designs your preparation architecture with milestones and rituals.',
    tags: ['Goal alignment', 'Accountability structures', 'Weekly milestone design'],
  },
  {
    number: '03',
    title: 'Execution & Intelligence',
    description: 'Platform automations and mentor interventions keep your day-to-day on track, optimized by real-time analytics.',
    tags: ['Adaptive scheduling', 'Momentum scoring', 'Revision automation'],
  },
  {
    number: '04',
    title: 'Review & Elevate',
    description: 'Cycle reviews, reflection prompts, and plan upgrades ensure each week performs better than the last.',
    tags: ['Weekly retrospectives', 'Insight summaries', 'Risk alerts & recovery plans'],
  },
]

export default function HowSteps() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='grid md:grid-cols-2 gap-10 lg:gap-12'>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 shadow-lg flex flex-col gap-5'
            >
              <div className='flex items-center gap-4'>
                <span className='text-3xl font-semibold text-primary'>{step.number}</span>
                <h3 className='text-xl md:text-2xl font-semibold dark:text-white'>{step.title}</h3>
              </div>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>{step.description}</p>
              <div className='flex flex-wrap gap-2'>
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
