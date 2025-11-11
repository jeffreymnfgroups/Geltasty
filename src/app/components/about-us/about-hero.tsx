'use client'
import React from 'react'
import { FadeIn } from '@/app/components/shared/fade-in'

export default function AboutHero() {
  return (
    <section>
      <div className='relative w-full pt-44 pb-10 2xl:pb-20 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className="container relative z-10 px-6 lg:px-8 mx-auto">
          <FadeIn
            as='div'
            delay={0.2}
            className="mx-auto max-w-5xl text-center"
          >
            <p className='mb-4 text-xs uppercase tracking-[0.4em] text-primary/70 md:text-sm'>About Us</p>
  
            <h1 className="text-display-xl brockmann-font mb-6 leading-tight xl:text-7xl">
              Built by Learners, Backed by
              <br />
              <span className="instrument-font italic font-normal dark:text-white/90 text-primary">
                Science
              </span>
            </h1>
            <p className="text-body-lg mx-auto max-w-3xl">
              Gestalty emerged from a simple recognition: competitive exam preparation deserves better than guesswork and generic advice
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
