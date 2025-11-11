'use client'
import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Dynamic Dashboard',
    description: 'See live momentum scores, overdue actions, and ranked priorities the moment you log in.',
  },
  {
    title: 'Mentor Connect',
    description: 'Message your mentor, review feedback, and schedule sessions without leaving the workspace.',
  },
  {
    title: 'Content Hub',
    description: 'Access curated resources, revision decks, and mock libraries tailored to your roadmap.',
  },
  {
    title: 'Security First',
    description: 'Encrypted sessions, 2FA-ready architecture, and device history keep your prep data protected.',
  },
]

export default function LoginBenefits() {
  return (
    <section className='w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white whitespace-nowrap'>
            Everything You Need the Moment You Log In
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Gestalty keeps the essentials up front so action feels effortless.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg'
            >
              <h3 className='text-xl font-semibold mb-3 dark:text-white'>{benefit.title}</h3>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
