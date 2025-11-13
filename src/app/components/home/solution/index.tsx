'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'
import { CTAButton } from '@/app/components/shared/cta-button'

function Solutions() {
  const ref = useRef(null)
  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false])

  const toggleItem = (index: number) => {
    const newChecked = [...checkedItems]
    newChecked[index] = !newChecked[index]
    setCheckedItems(newChecked)
  }

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  const checklistItems = [
    'Create profile',
    'Import syllabus',
    'Log first study session',
    'Match mentor',
    'Mobile app download links',
  ]

  return (
    <section className='section-spacing bg-white dark:bg-dark_black'>
      <div className='container'>
        <div
          ref={ref}
          className='px-8 py-16 rounded-3xl border border-dark_black/10 bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] md:px-10 md:py-24 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#0b1120_100%)]'>
          <motion.div
              {...bottomAnimation}
              className='flex flex-col gap-8 items-center md:max-w-4xl mx-auto'>
              <div className='flex flex-col gap-4 items-center text-center'>
              <h2 className='brockmann-font text-display-lg text-dark_black dark:text-white'>
                Launch Your{' '}
                <span className='instrument-font italic font-normal text-primary dark:text-primary/80'>
                  Transformation
                </span>
              </h2>
              <p className='text-body-lg text-dark_black max-w-2xl dark:text-white/80'>
                Not about doing more. About doing what works.
              </p>
              </div>

              {/* Onboarding Checklist */}
              {/* <div className='w-full rounded-2xl bg-white p-6 shadow-lg dark:bg-dark_black md:p-8'>
                <h3 className='text-title-md mb-6 text-center text-dark_black dark:text-white'>
                  Get Started in Minutes
                </h3>
                <div className='space-y-3'>
                  {checklistItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => toggleItem(index)}
                      className='w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark_black/50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700'>
                      <div className='flex-shrink-0'>
                        {checkedItems[index] ? (
                          <CheckCircle2 className='w-6 h-6 text-green-500' />
                        ) : (
                          <Circle className='w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500' />
                        )}
                      </div>
                      <span className={`text-body-md text-left transition-all ${
                        checkedItems[index] 
                          ? 'text-gray-400 dark:text-gray-500 line-through' 
                          : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}>
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
                <div className='mt-6 border-t border-gray-200 pt-6 dark:border-gray-700'>
                  <div className='flex items-center justify-between'>
                    <span className='text-body-sm text-gray-500 dark:text-gray-400'>
                      {checkedItems.filter(Boolean).length} of {checklistItems.length} completed
                    </span>
                    <div className='flex gap-1'>
                      {checklistItems.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 w-8 rounded-full transition-all ${
                            checkedItems[index] 
                              ? 'bg-green-500' 
                              : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              {/* CTA Buttons */}
              <div className='flex w-full flex-wrap justify-center gap-4'>
                <CTAButton
                  href='/contact'
                  className='w-fit bg-[#0D1B4C] border-[#0D1B4C] px-8 py-3'
                  labelClassName='text-center'
                >
                  Sign Up Free
                </CTAButton>
                <button
                  disabled
                  className='cursor-not-allowed rounded-full bg-gray-200 px-8 py-3 font-medium text-gray-800 opacity-60 dark:bg-gray-700 dark:text-white'>
                  Download App <span className='ml-2 text-xs'>(Coming Soon)</span>
                </button>
              </div>

              {/* Mobile App Promotion */}
              {/* <div className='mt-4 w-full border-t border-dark_black/10 pt-8'>
                <div className='flex flex-col items-center gap-6'>
                  <div className='text-center'>
                    <h3 className='text-title-md mb-2 text-dark_black dark:text-white'>
                      Download our mobile app
                    </h3>
                    <p className='text-body-sm text-dark_black/80 dark:text-white/70'>
                      Seamless preparation on the go
                    </p>
                  </div>
                  
                  <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
                    <button
                      disabled
                      className='opacity-60 cursor-not-allowed transition-transform'>
                      <Image
                        src='/images/logo/appstore.svg'
                        alt='Coming Soon'
                        width={140}
                        height={56}
                        className='h-14 w-auto'
                      />
                      <span className='mt-2 block text-center text-xs text-dark_black dark:text-white'>Coming Soon</span>
                    </button>
                    <button
                      disabled
                      className='opacity-60 cursor-not-allowed transition-transform'>
                      <Image
                        src='/images/logo/googleplay.svg'
                        alt='Coming Soon'
                        width={140}
                        height={56}
                        className='h-14 w-auto'
                      />
                      <span className='mt-2 block text-center text-xs text-dark_black dark:text-white'>Coming Soon</span>
                    </button>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default Solutions
