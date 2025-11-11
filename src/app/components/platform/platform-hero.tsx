'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function PlatformHero() {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  }

  return (
    <section>
      <div className='relative w-full pt-44 pb-10 2xl:pb-20 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10 px-6 lg:px-8 mx-auto'>
          <motion.div
            {...bottomAnimation}
            className='text-center max-w-5xl mx-auto'
          >
            <p className='uppercase tracking-[0.4em] text-primary/70 text-xs md:text-sm mb-4'>Platform</p>
    
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold brockmann-font mb-6 dark:text-white leading-tight'>
              A Platform Engineered for
              <br />
              <span className='instrument-font italic font-normal dark:text-white/90 text-primary'>
                Predictable Success
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Every interaction, insight, and intervention on Gestalty is designed to move you closer to your rank. Explore a tightly integrated system that thinks ahead with you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
