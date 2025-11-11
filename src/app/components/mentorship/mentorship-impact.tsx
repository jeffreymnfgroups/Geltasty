'use client'
import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '3.2x', label: 'Higher selection odds with mentor-guided plans' },
  { value: '+24%', label: 'Average improvement in mock scores across 8 weeks' },
  { value: '87%', label: 'Interview conversions after structured coaching' },
  { value: '41%', label: 'Rise in answer-writing quality within 6 weeks' },
]

export default function MentorshipImpact() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Impact You Can Measure
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Mentors use your platform data to intervene early, direct focus, and keep confidence intact. The numbers stay consistent cohort after cohort.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center shadow-lg'
            >
              <div className='text-3xl md:text-4xl font-bold text-primary mb-3'>{stat.value}</div>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
