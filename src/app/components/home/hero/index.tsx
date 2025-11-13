'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import StarRating from '../../shared/star-rating'
import { usePageData } from '@/hooks/use-page-data'
import type { avatar } from '@/app/types/menu'
import { CTAButton } from '@/app/components/shared/cta-button'

function HeroSection() {
  const ref = useRef(null)
  const { data } = usePageData()
  const avatarList = data?.avatarList

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold w-full leading-tight brockmann-font'>
                A Platform That {' '}
                <span className="instrument-font italic font-normal">
                 Thinks With You
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-dark_black/80 dark:text-white/80 font-medium'>
                Scientifically, Strategically, Psychologically — and Statistically.
              </p>
              <p className='max-w-3xl text-lg text-dark_black/60 dark:text-white/60'>
              Gestalty rely on blends of cognitive psychology, statistical analysis, and proven pedagogy to create a preparation system that respects how your mind actually learns.              </p>
            </motion.div>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-4 w-full sm:flex-row sm:gap-8'>
                <CTAButton
                  href='/contact'
                  className='w-full max-w-64 md:py-3'
                  labelClassName='text-start'
                  arrowSize={40}
                >
                  Get Started
                </CTAButton>

                <CTAButton
                  href='https://calendly.com/dimentussolutions/30min'
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='secondary'
                  className='w-full max-w-64 md:py-3'
                  labelClassName='text-start'
                  arrowSize={40}
                >
                  View Demo
                </CTAButton>

                {/* --------------- avatar division -------------- */}
                <div className='flex items-center gap-7'>
                  <ul className='avatar flex flex-row items-center'>
                    {avatarList?.map((items: avatar, index: number) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={items.image}
                          alt='Image'
                          width={44}
                          height={44}
                          quality={100}
                          className='rounded-full border-2 border-white'
                          unoptimized={true}
                        />
                      </li>
                    ))}
                  </ul>
                  {/* -------------- Star rating division --------------- */}
                  <div className='gap-1 flex flex-col'>
                    <div>
                      <StarRating count={4} color='#F59E0B' />
                    </div>
                    <p className='text-sm font-normal text-dark_black/60 dark:text-white/60'>
                      Trusted by 10,000+ aspirants
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dashboard Image */}
            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center mt-8'>
              <Image
                src='/images/home/dashboard.png'
                alt='Dashboard Preview'
                width={800}
                height={600}
                className='rounded-lg '
                priority
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
