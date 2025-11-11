'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { usePageData } from '@/hooks/use-page-data'
import { CTAButton } from '@/app/components/shared/cta-button'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const { data } = usePageData()
  const innovationList = data?.innovationList

  const bottomAnimation = (index: number) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
    <section id='services' className='section-spacing bg-white dark:bg-dark_black'>
      <div ref={ref}>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col items-center justify-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-(--breakpoint-Xsm) text-center'>
                <h2 className='brockmann-font text-display-lg text-dark_black dark:text-white'>
                  Where innovation meets{' '}
                  <span className='instrument-font italic font-normal text-primary dark:text-primary/80'>
                    aesthetics
                  </span>
                </h2>
              </motion.div>
              <motion.div
                {...bottomAnimation(2)}
                className='grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full'>
                {innovationList?.map((items: unknown, index: number) => {
                  const item = items as { bg_color: string; image: string; txt_color: string; title: string }
                  return (
                    <div
                      key={index}
                      className={`${item.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9 `}>
                      <div>
                        <Image
                          src={item.image}
                          alt='image'
                          height={40}
                          width={40}
                        />
                      </div>
                      <div>
                        <h5 className={`${item.txt_color}`}>
                          {item.title.split('\n')?.map((line: string, i:number) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h5>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
            <motion.div
              {...bottomAnimation(3)}
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
              <h4 className='text-white text-center xl:text-left brockmann-font'>
                See Our Work in Action.
                <br /> Start Your Creative Journey with Us!
              </h4>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <CTAButton
                  href='/contact'
                  className='w-full sm:w-auto bg-white text-dark_black border-white hover:bg-transparent hover:text-white dark:border-white/50'
                  labelClassName='text-start'
                  variant='secondary'
                >
                  Let’s Collaborate
                </CTAButton>
                <CTAButton
                  href='/#work'
                  className='w-full sm:w-auto bg-dark_black text-white border-white hover:bg-transparent hover:text-white'
                  labelClassName='text-start'
                  variant='secondary'
                >
                  View Portfolio
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
