'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, LineChart, Workflow, Laptop } from 'lucide-react'

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Cognitive Science Core',
    description:
      'Powered by proven learning science principles—spacing, interleaving, dual coding—to build long-term mastery instead of short-term recall.',
  },
  {
    icon: LineChart,
    title: 'Data-Rich Intelligence',
    description:
      'Every click, attempt, and revision feeds a live analytics engine that identifies friction points and recommends precise next actions.',
  },
  {
    icon: Workflow,
    title: 'Integrated Workflows',
    description:
      'Plan, practice, revise, and reflect in one place. No tab chaos—just cohesive workflows that keep momentum and context intact.',
  },
  {
    icon: Laptop,
    title: 'Omnichannel Delivery',
    description:
      'Consistent experience across desktop, tablet, and mobile. Continue sessions seamlessly whether you are at your desk or commuting.',
  },
]

export default function PlatformPillars() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <motion.div
          {...fadeInUp}
          className='text-center max-w-4xl mx-auto mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            Platform Pillars
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Four interconnected foundations power every Gestalty experience. Together, they convert scattered study into a deliberate operating system.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group bg-white dark:bg-gray-900 p-7 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors'>
                  <Icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-3 dark:text-white'>{pillar.title}</h3>
                <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
