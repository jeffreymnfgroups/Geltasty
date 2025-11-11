'use client'
import React from 'react'
import { motion } from 'framer-motion'

const principles = [
  {
    title: 'Clarity before Action',
    description:
      'Students should always know why they are doing something, how it connects to the plan, and what success looks like. We build interfaces and rituals that surface this clarity.',
  },
  {
    title: 'Systems over Motivation',
    description:
      'Motivation fluctuates; systems endure. We obsess over routines, feedback loops, and default settings that keep aspirants moving even on average days.',
  },
  {
    title: 'Evidence over Opinions',
    description:
      'Every decision—from study plans to mentor nudges—is backed by research, data, or lived experience from high performers. Gut feeling is validated, not worshipped.',
  },
  {
    title: 'Humans + Machines',
    description:
      'Software accelerates insights, mentors provide context, and students apply judgement. Gestalty aligns all three so each does what it does best.',
  },
]

export default function PhilosophyPrinciples() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='grid lg:grid-cols-[0.9fr,1.1fr] gap-12 lg:gap-16 items-start'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
              Core Beliefs Guiding Every Build
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              These principles guide product, mentorship, and support decisions. They are the guardrails that ensure we stay authentic to our mission.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-6'>
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-transform duration-300'
              >
                <h3 className='text-xl font-semibold mb-3 dark:text-white'>{principle.title}</h3>
                <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
