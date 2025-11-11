'use client'
import React from 'react'
import { motion } from 'framer-motion'

const solutionLayers = [
  {
    label: '01',
    title: 'Learning Command Center',
    description:
      'A unified dashboard consolidating progress, mastery levels, question heatmaps, and revision prompts. Built to deliver clarity at a glance.',
    highlights: ['Adaptive schedule orchestration', 'Exam-mode simulations with insights', 'AI-generated revision prompts'],
  },
  {
    label: '02',
    title: 'Performance Diagnostics',
    description:
      'Deep analytics that reveal behavior patterns, retention leaks, and efficiency metrics. Because awareness precedes improvement.',
    highlights: ['Chapter retention fingerprinting', 'Cognitive load tracking', 'Personalized score forecasting'],
  },
  {
    label: '03',
    title: 'Intervention Engine',
    description:
      'Mentor + machine intelligence that suggests exact next steps: who should intervene, what to focus on, and when to rest.',
    highlights: ['Mentor nudges linked to real-time data', 'Stress and recovery recommendations', 'Escalation workflows for critical dips'],
  },
]

export default function PlatformSolutions() {
  return (
    <section className='w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Built as a System, Not a Feature List
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Each layer strengthens the others. Together they create predictable, compounding progress for every aspirant on the platform.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
          {solutionLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden group'
            >
              <span className='absolute top-6 right-6 text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors'>
                {layer.label}
              </span>
              <h3 className='text-2xl font-semibold mb-4 dark:text-white'>{layer.title}</h3>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                {layer.description}
              </p>
              <ul className='space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300'>
                {layer.highlights.map((highlight) => (
                  <li key={highlight} className='flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>{highlight}</span>
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
