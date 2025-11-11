'use client'
import React from 'react'
import { motion } from 'framer-motion'

const mentorHighlights = [
  {
    title: 'Diverse Backgrounds',
    description: 'NEET doctors, UPSC officers, subject specialists, and interview panelists—carefully assembled to cover every stage.',
  },
  {
    title: 'Recent Achievers',
    description: 'Mentors have cleared their exams in the past 3-5 years, ensuring strategies are relevant to today’s patterns.',
  },
  {
    title: 'Rigorous Vetting',
    description: 'Identity, rank proof, teaching aptitude, and empathy are verified before they meet learners.',
  },
  {
    title: 'Continuous Training',
    description: 'Monthly learning circles keep mentors updated on exam changes, pedagogy, and mental health first-aid.',
  },
]

export default function MentorshipNetwork() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-start'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
              A Mentor Network You Can Trust
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
              Mentorship works when the person guiding you understands the exam and understands you. We handpick mentors who excel at both.
            </p>
            <div className='bg-primary/10 dark:bg-primary/20 border border-primary/30 dark:border-primary/30 rounded-2xl p-6 text-sm md:text-base text-gray-700 dark:text-gray-200'>
              <p className='font-medium mb-2 text-primary'>Quality guarantee</p>
              <p>All mentors maintain a minimum 4.7/5 learner satisfaction score to stay active on Gestalty.</p>
            </div>
          </div>

          <div className='space-y-6'>
            {mentorHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg'
              >
                <h3 className='text-xl font-semibold mb-3 dark:text-white'>{highlight.title}</h3>
                <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
