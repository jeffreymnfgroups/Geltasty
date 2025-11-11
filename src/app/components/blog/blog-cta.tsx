'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function BlogCTA() {
  return (
    <section className='w-full py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-dark_black relative overflow-hidden'>
      <div className='absolute inset-0 w-full h-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient/30 before:via-transparent before:to-yellow_gradient/30 before:rounded-full before:top-1/2 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient/20 dark:before:via-transparent dark:before:to-dark_yellow_gradient/20 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10' />

      <div className='container relative z-10 px-6 lg:px-8 mx-auto'>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mx-auto text-center flex flex-col gap-6'
        >
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font dark:text-white'>
            Receive Weekly Insight Drops
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Join 10,000+ aspirants who receive tactical advice, learning science summaries, and mentor stories directly in their inbox.
          </p>
          <form className='flex flex-col sm:flex-row gap-3 justify-center'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full sm:w-72 px-4 py-3 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition-shadow'
            />
            <button
              type='submit'
              className='bg-primary text-white font-medium px-6 py-3 rounded-full border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary'
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
