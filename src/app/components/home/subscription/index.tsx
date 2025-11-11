"use client";
import Image from 'next/image'
import { CTAButton } from '@/app/components/shared/cta-button'
import { usePageData } from '@/hooks/use-page-data'
import { cn } from '@/lib/utils'

function Subscription() {
  const { data } = usePageData()
  const startupPlanList = data?.startupPlanList
  return (
    <section id='pricing' className='section-spacing bg-white dark:bg-dark_black'>
      <div className='container'>
        <div className='flex flex-col gap-10 md:gap-20'>
          <div className='mx-auto max-w-25 text-center'>
            <h2 className='brockmann-font text-display-lg text-dark_black dark:text-white'>
              Pick the plan that fits your{' '}
              <span className='instrument-font italic font-normal text-primary dark:text-primary/80'>
                start-up
              </span>
            </h2>
          </div>
            <div className='grid grid-cols-1 xxl:grid-cols-2 gap-6'>
              {startupPlanList?.map((items: unknown, index: number) => {
                const item = items as { plan_bg_color: string; plan_name: string; descp_color: string; plan_descp: string; text_color: string; plan_price: string; border_color: string; icon_img: string; plan_feature: string[] }
                return <div
                  className={`${item.plan_bg_color} p-6 md:p-10 rounded-2xl`}
                  key={index}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-12 md:pr-6'>
                      <div className='flex flex-col gap-3'>
                        <p className='w-fit rounded-full bg-dark_black px-4 py-2 text-body-sm font-semibold text-white dark:bg-white dark:text-dark_black'>
                          {item.plan_name}
                        </p>
                        <p
                          className={cn(
                            `text-${item.descp_color}`,
                            'text-body-md dark:text-white/70',
                          )}>
                          {item.plan_descp}
                        </p>
                      </div>
                      <div className='flex flex-col gap-3 md:gap-5'>
                        <div className='flex items-baseline gap-2'>
                          <span
                            className={cn(
                              'text-display-lg font-semibold',
                              `${item.text_color}`,
                              'dark:text-white',
                            )}>
                            {item.plan_price}
                          </span>
                          <span
                            className={cn(
                              `text-${item.descp_color}`,
                              'text-body-sm dark:text-white/70',
                            )}>
                            /month
                          </span>
                        </div>
                        <CTAButton
                          href='/contact'
                          className='w-fit bg-white text-dark_black border-white hover:bg-primary hover:text-white dark:bg-white dark:text-dark_black'
                          labelClassName='text-start'
                          variant='secondary'
                        >
                          Let’s Collaborate
                        </CTAButton>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 md:pl-6 md:border-l ${item.border_color}`}>
                      <p
                        className={cn(
                          `${item.text_color}`,
                          'text-title-md dark:text-white',
                        )}>
                        Features
                      </p>
                      <ul className='flex flex-col gap-4'>
                        {item.plan_feature?.map((feature: string, idx: number) => {
                          return (
                            <li key={idx} className='flex items-center gap-3'>
                              <Image
                                src={item.icon_img}
                                alt='icon'
                                width={20}
                                height={20}
                              />
                              <p
                                className={cn(
                                  `${item.text_color}`,
                                  'text-body-md dark:text-white/70',
                                )}>
                                {feature}
                              </p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Subscription
