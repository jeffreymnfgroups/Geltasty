'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const featured = {
  title: 'Designing Study Systems that Actually Stick',
  excerpt:
    'Why most aspirants fall off their schedules in week three—and how to use Gestalty’s behavioral loops to stay in control.',
  category: 'Systems Thinking',
  readTime: '7 min read',
  href: '#',
}

export default function BlogFeatured() {
  return (
    <section className='w-full py-20 md:py-24 bg-white dark:bg-dark_black'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-10 items-center'
        >
          <div className='flex-1 flex flex-col gap-5 text-center md:text-left'>
            <span className='inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary/70'>
              {featured.category}
            </span>
            <h2 className='text-3xl md:text-4xl font-bold brockmann-font dark:text-white'>
              {featured.title}
            </h2>
            <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              {featured.excerpt}
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-gray-500 dark:text-gray-400'>
              <span>{featured.readTime}</span>
              <Link href={featured.href} className='group inline-flex items-center gap-2 text-primary font-medium'>
                Read feature
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-1'
                >
                  <path
                    d='M11.5 11.3333H20.8333M20.8333 11.3333V20.6667M20.8333 11.3333L11.5 20.6667'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className='w-full md:w-80 h-48 md:h-56 bg-linear-to-br from-primary/20 via-transparent to-primary/40 dark:from-primary/10 dark:to-primary/30 rounded-2xl flex items-center justify-center border border-primary/20 dark:border-primary/30'>
            <div className='text-sm text-primary font-medium uppercase tracking-[0.4em]'>
              Featured Essay
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
