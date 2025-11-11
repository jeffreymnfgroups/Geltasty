'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problemData = [
  {
    problem: 'Lack of Focus & Consistency',
    impact: 'Inconsistent study patterns lead to knowledge gaps and reduced retention rates.',
    solution: 'Progress Tracking: Data-stage-wise learning progress with real-time analytics that show exactly where you are in your learning journey.',
  },
  {
    problem: 'Inadequate Study Planning',
    impact: 'Inadequate planning leads to rushed syllabus coverage and last-minute cramming.',
    solution: 'Split Syllabus Engine: Break down massive syllabi into custom daily/weekly chunks.',
  },
  {
    problem: 'Weak Study Techniques & Retention',
    impact: 'Weak study methods result in surface-level understanding and weak problem-solving skills.',
    solution: 'Strategic Revision Reminder System: Based on Ebbinghaus\' Forgetting Curve – set auto-reminders at 1, 3, 6 days.',
  },
  {
    problem: 'Mental Health & Motivation Issues',
    impact: 'Mental health issues significantly impact study performance and exam outcomes.',
    solution: 'Cognitive Inertia Detector: Spot behavioral resistance using machine learning cues.',
  },
  {
    problem: 'Fragmented & Unsystematic Learning',
    impact: 'Fragmented switching of study methods creates confusion and prevents a structured learning approach.',
    solution: 'Consistency Mapping: Visualize your time, effort, and deviation patterns through charts and heatmaps.',
  },
  {
    problem: 'Misalignment Between Effort & Outcomes',
    impact: 'Inefficient study practices lead to wasted effort and disappointing results.',
    solution: 'AI-Based Feedback Loop: Using Bayesian statistical models (PyMC3) to calibrate subjective effort with actual progress.',
  },
]

function ProblemImpactSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className='2xl:py-20 py-11 bg-white dark:bg-dark_black'>
      <div className='container'>
        <div className='flex flex-col gap-12'>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='text-center'
          >
            <motion.h2 
              className='text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 brockmann-font text-dark_black dark:text-white'
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Most Aspirants <span className="instrument-font italic font-normal">Struggle</span> With:
            </motion.h2>
          </motion.div>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse bg-white dark:bg-dark_black rounded-2xl overflow-hidden shadow-lg'>
              <thead>
                <tr className='bg-dark_black/5 dark:bg-white/5'>
                  <th className='text-left py-4 px-6 font-semibold text-lg border-b border-dark_black/10 dark:border-white/10 text-dark_black dark:text-white'>Problem</th>
                  <th className='text-left py-4 px-6 font-semibold text-lg border-b border-dark_black/10 dark:border-white/10 text-dark_black dark:text-white'>Impact</th>
                  <th className='text-left py-4 px-6 font-semibold text-lg border-b border-dark_black/10 dark:border-white/10 text-dark_black dark:text-white'>Gestalty Solution</th>
                </tr>
              </thead>
              <tbody>
                {problemData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='border-b border-dark_black/10 dark:border-white/10 hover:bg-dark_black/5 dark:hover:bg-white/5 transition-colors'
                  >
                    <td className='py-4 px-6 font-semibold text-dark_black dark:text-white'>
                      {item.problem}
                    </td>
                    <td className='py-4 px-6 text-dark_black/70 dark:text-white/70'>
                      {item.impact}
                    </td>
                    <td className='py-4 px-6 text-primary font-medium'>
                      {item.solution}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemImpactSolution

