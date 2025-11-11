'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, BookOpen, MessageCircle, TrendingUp, Award } from 'lucide-react'

const offerings = [
  {
    icon: Users,
    title: '1:1 Strategic Guidance',
    subtitle: 'Individual attention for every aspirant',
    points: [
      'Weekly video or audio strategy sessions',
      'Personalized attention to your unique bottlenecks',
      'Planning decisions rooted in your learning data',
      'Quick check-ins through the platform between sessions',
    ],
  },
  {
    icon: Target,
    title: 'Study Architecture',
    subtitle: 'A living plan that adapts with you',
    points: [
      'Customized syllabus sequencing by weightage and difficulty',
      'Daily and weekly accountability milestones',
      'Revision loops triggered by performance signals',
      'Contingency playbooks for missed targets',
    ],
  },
  {
    icon: BookOpen,
    title: 'Answer & Interview Labs',
    subtitle: 'Exam-specific skill development',
    points: [
      'Mains answer writing reviews with scoring rubrics',
      'Mock interview simulations with actionable feedback',
      'Current affairs integration and analysis sprints',
      'Practice exam dissection to convert mistakes into lessons',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Data Monitoring',
    subtitle: 'Momentum insights you can act on',
    points: [
      'Weekly performance scorecards for you and your mentor',
      'Behavior trend analysis highlighting effort vs outcomes',
      'Stress and recovery markers to avoid burnout',
      'Celebration prompts when you unlock major milestones',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Emotional Backbone',
    subtitle: 'Resilience for the long haul',
    points: [
      'Real talk when you need course correction without judgement',
      'Mindset reframing techniques from achievers',
      'Support in balancing life, academics, and rest',
      'Community touchpoints to know you are not alone',
    ],
  },
  {
    icon: Award,
    title: 'Verified Mentors',
    subtitle: 'You work with proven achievers',
    points: [
      'Documented proof of rank & attempt year',
      'Subject-specific expertise validation',
      'Certified through Gestalty mentor training',
      'Ongoing quality audits and learner feedback loops',
    ],
  },
]

export default function MentorshipOfferings() {
  return (
    <section className='w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-6 lg:px-8 mx-auto'>
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold brockmann-font mb-6 dark:text-white'>
            What Mentorship Delivers
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            It is a full-stack support system—strategy, accountability, skills, and mindset—delivered by people who know the exam inside out.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <motion.div
                key={offering.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 shadow-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold dark:text-white'>{offering.title}</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{offering.subtitle}</p>
                  </div>
                </div>
                <ul className='space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300'>
                  {offering.points.map((point) => (
                    <li key={point} className='flex items-start gap-2'>
                      <span className='text-primary mt-1'>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
