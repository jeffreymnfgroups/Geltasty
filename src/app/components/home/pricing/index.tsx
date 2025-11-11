'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { CTAButton } from '@/app/components/shared/cta-button'

const MOTION_PROPS = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
}

const pricingTiers = [
  {
    name: 'Explorer',
    price: 'Free',
    cadence: '',
    features: ['Basic tracking + reminders'],
    bestFor: 'Beginners',
  },
  {
    name: 'Strategist',
    price: '₹499',
    cadence: '/mo',
    features: ['Full analytics + parent dashboard'],
    bestFor: 'Independent learners',
  },
  {
    name: 'Mentor Pro',
    price: '₹999',
    cadence: '/mo',
    features: ['Unlimited bookings + priority support'],
    bestFor: 'Students needing regular guidance',
  },
  {
    name: 'Elite',
    price: '₹1,499',
    cadence: '/mo',
    features: ['AI-path planning + group mentoring'],
    bestFor: 'High-performers',
  },
]

function Pricing() {
  return (
    <section className='section-spacing overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,rgba(205,239,251,0.7)_0%,rgba(255,255,255,0.9)_45%,rgba(253,238,203,0.6)_100%)] dark:bg-gradient-to-b dark:from-dark_black dark:via-gray-900 dark:to-black'>
      <div className='container'>
        <motion.div
          {...MOTION_PROPS}
          transition={{ duration: 0.6 }}
          className='mx-auto flex max-w-3xl flex-col items-center gap-6 text-center'>
          <span className='text-body-sm uppercase tracking-[0.3em] text-dark_black/60 dark:text-white/60'>
            Pricing Page
          </span>
          <h2 className='brockmann-font text-display-lg text-dark_black dark:text-white'>
            Invest in <span className='instrument-font italic font-normal text-[#0D1B4C] dark:text-[#CDEFFB]'>Precision</span>
          </h2>
          <p className='text-body-lg text-dark_black/80 dark:text-white/70'>
            Value scales with guidance and personalization.
          </p>
        </motion.div>

        <motion.div
          {...MOTION_PROPS}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='mt-12 grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-dark_black/10 bg-white/80 p-8 shadow-[0_15px_45px_rgba(13,27,76,0.08)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_65px_rgba(13,27,76,0.25)]'>
              <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0D1B4C] via-[#CDEFFB] to-[#FDEECB] opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

              <div className='space-y-3 text-left'>
                <span className='text-body-sm uppercase tracking-[0.3em] text-dark_black/50 dark:text-white/50'>
                  {tier.name}
                </span>
                <div className='flex items-baseline gap-1'>
                  <span className='text-display-lg font-semibold text-[#0D1B4C] leading-[1.1] dark:text-white'>
                    {tier.price}
                  </span>
                  {tier.cadence ? (
                    <span className='text-body-sm text-dark_black/60 dark:text-white/60'>{tier.cadence}</span>
                  ) : null}
                </div>
              </div>

              <ul className='flex flex-1 flex-col justify-start gap-4 text-left'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3'>
                    <CheckCircle2 className='mt-0.5 h-5 w-5 text-[#0D1B4C] dark:text-[#CDEFFB]' />
                    <span className='text-body-md text-dark_black/80 dark:text-white/70'>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-4 border-t border-dark_black/10 pt-4 dark:border-white/10'>
                <p className='text-body-sm text-dark_black/60 dark:text-white/60'>
                  Best for{' '}
                  <span className='font-medium text-dark_black dark:text-white'>{tier.bestFor}</span>
                </p>
              </div>
            </article>
          ))}
        </motion.div>

        <motion.div
          {...MOTION_PROPS}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-12 flex flex-col items-center gap-4 text-center'>
          <CTAButton
            href='/contact'
            className='bg-[#0D1B4C] border-[#0D1B4C] px-8 py-3 text-sm hover:bg-[#0A1539] md:text-base'
            labelClassName='text-center'>
            Choose Your Plan
          </CTAButton>
          <p className='text-sm text-dark_black/70 dark:text-white/60 md:text-base'>
            30-Day Money-Back Guarantee
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

