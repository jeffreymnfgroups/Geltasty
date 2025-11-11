'use client'
import React from 'react'
import { motion } from 'framer-motion'

const scienceStack = [
  {
    heading: 'Cognitive Psychology',
    points: ['Spacing & Interleaving schedules tuned per subject', 'Dual-coding content templates for retention', 'Memory reconsolidation prompts post-tests'],
  },
  {
    heading: 'Behavioral Analytics',
    points: ['Micro-habit tracking using progressive check-ins', 'Momentum scoring to detect dips early', 'Nudge architecture built on choice psychology'],
  },
  {
    heading: 'Performance Science',
    points: ['Stress-recovery balance using HR-like signals', 'Energy budgeting and sleep scheduling guidance', 'Scenario planning for exam-week execution'],
  },
]

export default function PhilosophyScience() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Science Stack We Stand On
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Gestalty is built by researchers, toppers, and coaches who test everything against lived outcomes. Here is the science translated into product decisions.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {scienceStack.map((layer, index) => (
            <motion.div
              key={layer.heading}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 p-7 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:-translate-y-1 transition-transform duration-300'
            >
              <h3 className='text-xl font-semibold mb-4 dark:text-white'>{layer.heading}</h3>
              <ul className='space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300'>
                {layer.points.map((point) => (
                  <li key={point} className='flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
