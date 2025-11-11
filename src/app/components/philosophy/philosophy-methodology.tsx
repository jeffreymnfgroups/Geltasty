'use client'
import React from 'react'
import { motion } from 'framer-motion'

const methodology = [
  {
    phase: 'Diagnose',
    summary: 'Uncover the reality of where you stand by combining diagnostics, behavior data, and reflective interviews.',
    details: ['Skills, mindset, and lifestyle audit', 'Question-level performance mapping', 'Cognitive preference profiling'],
  },
  {
    phase: 'Design',
    summary: 'Build a living roadmap that links goals, habits, and accountability loops. Adjust the environment, not just the timetable.',
    details: ['Milestone-based study architecture', 'Mentor orchestration and escalation protocols', 'Environment and resource calibration'],
  },
  {
    phase: 'Deliberate',
    summary: 'Execute with intention. Feedback loops and automation ensure momentum, while mentors add judgement and nuance.',
    details: ['Daily focus cards + reflection prompts', 'Adaptive revision sequencing', 'Mentor feedback tied to measurable signals'],
  },
  {
    phase: 'Distill',
    summary: 'Convert experience into insight. Analyze what worked, refine the playbook, and elevate decision making.',
    details: ['Weekly retrospectives with insight summaries', 'Playbook updates for future cycles', 'Celebration rituals to lock in confidence'],
  },
]

export default function PhilosophyMethodology() {
  return (
    <section className='w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Our Operating Methodology
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            We iterate on a deliberate cycle that keeps you honest, focused, and adaptive. This rhythm ensures you always know the next best move.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {methodology.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-7 shadow-lg flex flex-col gap-4'
            >
              <div>
                <span className='uppercase tracking-[0.3em] text-xs text-primary/80'>{item.phase}</span>
                <h3 className='text-xl font-semibold mt-3 dark:text-white'>{item.summary}</h3>
              </div>
              <ul className='space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300'>
                {item.details.map((detail) => (
                  <li key={detail} className='flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>{detail}</span>
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
