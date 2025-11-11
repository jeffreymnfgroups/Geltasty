'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { GaugeCircle, Target, Brain, BarChart3 } from 'lucide-react'

const highlights = [
  {
    icon: Target,
    title: 'Strategic Alignment',
    detail: 'Every feature feeds your roadmap—no isolated widgets. Plans shift automatically when your reality changes.',
  },
  {
    icon: GaugeCircle,
    title: 'Velocity & Momentum',
    detail: 'Daily momentum scores quantify consistency. Gestalty spots dips early and triggers recovery playbooks.',
  },
  {
    icon: Brain,
    title: 'Cognitive Precision',
    detail: 'Spacing, retrieval, elaboration: encoded into practice formats so scientifically sound prep happens by default.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    detail: 'Insights are decision-ready: what to double down on, what to fix, and what to skip entirely.',
  },
]

export default function FeaturesOverview() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Why the Feature Suite Matters
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Each capability solves a real bottleneck we witnessed while mentoring thousands of aspirants. These highlights capture the essence of what changes for you.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 shadow-lg hover:-translate-y-1 transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors'>
                  <Icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-3 dark:text-white'>{highlight.title}</h3>
                <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {highlight.detail}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
