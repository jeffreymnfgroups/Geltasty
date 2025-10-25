'use client'
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

function GestaltyDifference() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const transformations = [
    {
      label: "PLANNING",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      before: "Random study hours",
      after: "Data-driven stages",
      beforeDetail: "I feel lost...",
      afterDetail: "I know exactly where I am",
      borderColor: "border-l-red-500",
      gradient: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
    },
    {
      label: "PROGRESS",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
      before: "Subjective progress",
      after: "Real-time metrics",
      beforeDetail: "Am I doing enough?",
      afterDetail: "I&apos;ve completed Stage 3!",
      borderColor: "border-l-orange-500",
      gradient: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
    },
    {
      label: "SUPPORT",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      before: "Limited help",
      after: "24/7 support",
      beforeDetail: "I&apos;m stuck...",
      afterDetail: "Mentor feedback received",
      borderColor: "border-l-pink-500",
      gradient: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20"
    },
    {
      label: "PERSONALIZATION",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
      ),
      before: "One-size-fits-all",
      after: "Personalized profile",
      beforeDetail: "This doesn&apos;t work for me",
      afterDetail: "Perfect for my learning style",
      borderColor: "border-l-yellow-500",
      gradient: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20"
    },
    {
      label: "STRATEGY",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      before: "Trial & error",
      after: "Evidence-based",
      beforeDetail: "Wasting time guessing",
      afterDetail: "Science-backed strategies",
      borderColor: "border-l-indigo-500",
      gradient: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20"
    }
  ]

  return (
    <section className='py-20 bg-white dark:bg-gray-900'>
      <div className='container'>
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='text-center mb-20'
        >
          <motion.h2 
            className='text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight brockmann-font'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            The Gestalty Difference From
            <br />
            <span className='instrument-font italic font-normal dark:text-white/70'>
             Guesswork to Precision            </span>
          </motion.h2>
          <motion.p 
            className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the transformation from chaotic learning to structured, science-driven preparation
          </motion.p>
        </motion.div>

        {/* Comparison Grid */}
        <div className='space-y-4 mb-12'>
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-gradient-to-r ${item.gradient} backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 ${
                hoveredIndex === index ? 'shadow-xl scale-[1.02]' : 'shadow-sm hover:shadow-lg'
              }`}
            >
              <div className='grid md:grid-cols-[120px_1fr_60px_1fr] items-center gap-4 p-5 lg:p-6'>
                {/* Label */}
                <div className='hidden md:block'>
                  <span className='text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-500'>
                    {item.label}
                  </span>
                </div>

                {/* Before State */}
                <div className='space-y-2'>
                  <div className='flex items-baseline gap-3'>
                    <span className='text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide'>
                      Before
                    </span>
                    <h3 className='text-lg lg:text-xl font-semibold text-gray-900 dark:text-white'>
                      {item.before}
                    </h3>
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-400 italic'>
                    &quot;{item.beforeDetail}&quot;
                  </p>
                </div>

                {/* Simple Arrow */}
                <div className='flex justify-center'>
                  <motion.div
                    animate={hoveredIndex === index ? { x: [0, 8, 0] } : { x: 0 }}
                    transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                    className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg'
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>

                {/* After State */}
                <div className='space-y-2'>
                  <div className='flex items-baseline gap-3'>
                    <span className='text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide'>
                      After
                    </span>
                    <h3 className='text-lg lg:text-xl font-semibold text-gray-900 dark:text-white'>
                      {item.after}
                    </h3>
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-400 italic'>
                    &quot;{item.afterDetail}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className='flex justify-center mt-8'
        >
          <Link 
            href="/how-it-works"
            className='group bg-primary text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary'
          >
            <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-4'>
              See How It Works
            </span>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-2 group-hover:rotate-45'>
              <rect
                width='40'
                height='40'
                rx='20'
                className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-primary'
              />
              <path
                d='M15.832 15.3334H24.1654V23.6667'
                className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15.832 23.6667L24.1654 15.3334'
                className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default GestaltyDifference