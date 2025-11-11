'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    title: 'Weekly Retrospectives: 6 Prompts That Change Everything',
    category: 'Execution',
    readTime: '5 min read',
    href: '#',
    summary: 'A simple journal sprint to convert chaos into clarity. Includes a printable template we use with every cohort.',
  },
  {
    title: 'Cognitive Stacking for NEET Biology',
    category: 'Learning Science',
    readTime: '8 min read',
    href: '#',
    summary: 'Combine dual coding with spaced retrieval to make information stick without marathon revisions.',
  },
  {
    title: 'Mentor Playbooks: When to Intervene & When to Observe',
    category: 'Mentorship',
    readTime: '6 min read',
    href: '#',
    summary: 'The framework our mentors follow to deliver high-impact guidance without creating dependency.',
  },
  {
    title: 'Designing Exam Week Like an Athlete',
    category: 'Performance',
    readTime: '9 min read',
    href: '#',
    summary: 'Nutrition, sleep, energy, and focus routines for the final seven days—tested with toppers.',
  },
  {
    title: 'The Parent-Aspirant Alignment Guide',
    category: 'Community',
    readTime: '4 min read',
    href: '#',
    summary: 'Scripts, rituals, and dashboards to keep support strong without micro-management.',
  },
  {
    title: 'Building Deep Work Blocks with Gestalty',
    category: 'Productivity',
    readTime: '5 min read',
    href: '#',
    summary: 'How to combine the focus timer, interruptions log, and mentor nudges for distraction-free execution.',
  },
]

export default function BlogArticles() {
  return (
    <section className='w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-3 dark:text-white'>
              Latest Articles
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl'>
              Actionable insights from mentors, learners, and researchers. Updated weekly.
            </p>
          </div>
          <Link href='#' className='text-primary font-medium flex items-center gap-2'>
            View all stories
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='transition-transform duration-200 group-hover:translate-x-1'
            >
              <path
                d='M9 6L15 12L9 18'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg flex flex-col gap-4'
            >
              <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary/70'>
                <span>{article.category}</span>
                <span className='text-gray-400 dark:text-gray-500 tracking-normal'>{article.readTime}</span>
              </div>
              <h3 className='text-xl font-semibold dark:text-white'>{article.title}</h3>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                {article.summary}
              </p>
              <Link href={article.href} className='text-primary font-medium mt-auto'>
                Read article →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
