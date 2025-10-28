'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'framer-motion'

function Solutions() {
  const ref = useRef(null)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div
            ref={ref}
            className='py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80'>
            <motion.div
              {...bottomAnimation}
              className='flex flex-col gap-8 items-center md:max-w-4xl mx-auto'>
              <div className='flex flex-col gap-4 items-center text-center'>
                <h2 className='text-3xl md:text-5xl dark:text-dark_black brockmann-font'>
                  Ready to Transform Your{' '}
                  <span className='instrument-font italic font-normal dark:text-black/70'>
                    NEET/UPSC Journey?
                  </span>
                </h2>
                <p className='text-base md:text-lg dark:text-dark_black max-w-2xl'>
                  Join thousands of aspirants who&apos;ve replaced guesswork with measurable growth
                </p>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full'>
                <Link
                  href='/signup'
                  className='group w-fit text-white font-medium bg-dark_black rounded-full flex items-center gap-4 py-3 px-6 hover:bg-[#0D1B4C] border border-dark_black transition-all duration-200'>
                  <span>
                    Start Your Journey Today
                  </span>
                </Link>
                <Link
                  href='/contact'
                  className='group w-fit text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-3 px-6 hover:bg-[#0D1B4C] hover:text-white border border-dark_black transition-all duration-200'>
                  <span>
                    Schedule Demo
                  </span>
                </Link>
                <Link
                  href='/features'
                  className='group w-fit text-white font-medium bg-dark_black rounded-full flex items-center gap-4 py-3 px-6 hover:bg-[#0D1B4C] border border-dark_black transition-all duration-200'>
                  <span>
                    Learn More
                  </span>
                </Link>
              </div>

              {/* Mobile App Promotion */}
              <div className='w-full border-t border-dark_black/10 pt-8 mt-4'>
                <div className='flex flex-col items-center gap-6'>
                  <div className='text-center'>
                    <h3 className='text-xl md:text-2xl font-semibold dark:text-dark_black mb-2'>
                      Download our mobile app
                    </h3>
                    <p className='text-sm md:text-base dark:text-dark_black/80'>
                      Seamless preparation on the go
                    </p>
                  </div>
                  
                  {/* App Store Badges */}
                  <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
                    <a
                      href='https://apps.apple.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-transform hover:scale-105'>
                      <Image
                        src='/images/logo/appstore.svg'
                        alt='Download on App Store'
                        width={140}
                        height={56}
                        className='h-14 w-auto'
                      />
                    </a>
                    <a
                      href='https://play.google.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-transform hover:scale-105'>
                      <Image
                        src='/images/logo/googleplay.svg'
                        alt='Get it on Google Play'
                        width={140}
                        height={56}
                        className='h-14 w-auto'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
