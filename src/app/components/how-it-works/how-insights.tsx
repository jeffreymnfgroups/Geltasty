'use client'
import React from 'react'
import { motion } from 'framer-motion'

const insights = [
  {
    title: 'Live Momentum Score',
    description: 'Combines effort, outcomes, and cognitive freshness to tell you if you are on track without waiting for the next mock test.',
  },
  {
    title: 'Focus Drift Alerts',
    description: 'When your actions deviate from the blueprint, mentors receive context-aware alerts to intervene quickly.',
  },
  {
    title: 'Outcome Forecasting',
    description: 'Predictive analytics show your projected scores based on current behavior—adjust before it is too late.',
  },
]

export default function HowInsights() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
              Decisions Backed by Data
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
              Gestalty’s intelligence layer reveals the story behind your numbers. No more guessing whether you are improving or plateauing.
            </p>
            <div className='bg-primary/10 dark:bg-primary/20 border border-primary/30 dark:border-primary/30 rounded-2xl p-6 text-sm md:text-base text-gray-700 dark:text-gray-200'>
              <p className='font-medium mb-2 text-primary'>Insight snapshot</p>
              <p>Students receive a Sunday Insights digest summarizing the week, complete with recommended adjustments for the next cycle.</p>
            </div>
          </div>

          <div className='space-y-6'>
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg'
              >
                <h3 className='text-xl font-semibold mb-3 dark:text-white'>{insight.title}</h3>
                <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
