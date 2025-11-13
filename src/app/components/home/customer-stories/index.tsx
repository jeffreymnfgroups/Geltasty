'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    id: 1,
    title: 'Cognitive Analytics',
    description: 'Advanced algorithms analyze your learning patterns to optimize study schedules. Learning is not random it\'s measurable, trackable, and improvable. By fusing psychology, pedagogy, and analytics, this system empowers you to understand yourself as a learner, take control of your growth, and reach the full potential of your mind.',
    image: '/images/home/pillar1.webp',
    align: 'left' // logo left, text right
  },
  {
    id: 2,
    title: 'Adaptive Learning Experience',
    description: 'A personalized learning journey that adapts in real-time to your strengths, weaknesses, and learning pace. Smart algorithms adjust content difficulty, suggest optimal study sequences, and highlight focus areas, ensuring efficient progress while keeping motivation high. Scientifically-proven spaced repetition technique enhances long-term retention and memory consolidation.',
    image: '/images/home/pillar2.webp',
    align: 'right' // logo right, text left
  },
  {
    id: 3,
    title: 'Data-Driven Insights',
    description: 'A real-time analytics dashboard with performance metrics, powered by statistical scoring to optimize study efficiency, enriched with behavioral consistency tracking and tailored improvement recommendations. A learning ecosystem where progress is visible, study is scientific, and accountability is shared.',
    image: '/images/home/pillar3.webp',
    align: 'left' // logo left, text right
  },
  {
    id: 4,
    title: 'Expert Mentorship',
    description: 'One-on-one expert guidance, personalized study plans with data-driven insights, and integrated mentor support with accountability partnerships streamline and boost your preparation.',
    image: '/images/home/pillar4.webp',
    align: 'right' // logo right, text left
  }
]

function CustomerStories() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  const bottomAnimation = (index: number) => ({
    initial: { y: '20%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '20%', opacity: 0 },
    transition: { duration: 1, delay: 0.3 + index * 0.15 },
  })

  const imageAnimation = (index: number) => ({
    initial: { y: '20%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '20%', opacity: 0 },
    transition: { duration: 1, delay: 0.4 + index * 0.15 },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  })

  const textAnimation = (index: number) => ({
    initial: { y: '20%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '20%', opacity: 0 },
    transition: { duration: 1, delay: 0.5 + index * 0.15 },
  })

  return (
    <section className='section-spacing bg-white dark:bg-dark_black'>
      <div ref={sectionRef} className='container px-4 sm:px-6'>
        <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
          <motion.div 
            className='flex flex-col items-center gap-2 sm:gap-3 text-center'
            initial={{ y: '20%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: '20%', opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className='brockmann-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-dark_black dark:text-white px-2'>
              A System that Built on Science, Designed for Success{' '}
              <span className="instrument-font italic font-normal">
                Core Value Propositions
              </span>
            </h2>
            <p className='max-w-3xl text-base sm:text-lg text-dark_black/60 dark:text-white/60 px-2'>
              Gestalty blends cognitive psychology, statistical analysis, and proven pedagogy to create a preparation system that respects how your mind actually learns.
            </p>
          </motion.div>

          <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.id}
                className={`flex flex-col ${
                  pillar.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center`}
                {...bottomAnimation(index)}
              >
                {/* Logo/Image */}
                <motion.div 
                  className='w-full md:w-1/2 lg:w-2/5 flex-shrink-0'
                  {...imageAnimation(index)}
                >
                  <div className='relative w-full aspect-square max-w-md mx-auto rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden'>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        width={400}
                        height={400}
                        className='w-full h-full object-contain'
                        unoptimized={true}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  className='w-full md:w-1/2 lg:w-3/5 flex flex-col gap-2 sm:gap-3 md:gap-4'
                  {...textAnimation(index)}
                >
                  <span className='text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider text-gold dark:text-gold'>
                    Pillar {pillar.id}
                  </span>
                  <h4 className='brockmann-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-dark_black dark:text-white leading-tight'>
                    {pillar.title}
                  </h4>
                  <p className='text-base sm:text-lg md:text-xl text-dark_black/80 dark:text-white/80 leading-relaxed'>
                    {pillar.description}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
