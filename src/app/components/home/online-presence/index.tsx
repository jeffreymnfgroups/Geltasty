'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { usePageData } from '@/hooks/use-page-data'

function OnlinePresence() {
  const { data } = usePageData()
  const onlinePresenceList = data?.onlinePresenceList
  return (
    <section id='work'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-2xl text-center'>
              <h2 className='brockmann-font'>
                How we transformed a small business's
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  online presence
                </span>
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
              {onlinePresenceList?.map((items: unknown, index: number) => {
                const item = items as { image: string; title: string; tag: string[] }
                return (
                  <div
                    key={index}
                    className='group flex flex-col gap-6 cursor-pointer'>
                    <div className='relative '>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={625}
                        height={410}
                        className='rounded-2xl'
                        unoptimized={true}
                      />

                      {/* Overlay div */}
                      <Link
                        href={'https://www.framer.com/@wrap-pixel/'}
                        target='blank'
                        className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'>
                        <span className='flex justify-end p-5 w-full'>
                          <Icon
                            icon='icon-park-solid:circle-right-up'
                            width='50'
                            height='50'
                            style={{ color: '#fbfbfb' }}
                          />
                        </span>
                      </Link>
                    </div>

                    <div className='flex flex-col items-start gap-4'>
                      <h5 className='group-hover:text-purple_blue'>
                        {item.title}
                      </h5>
                      <div className='flex gap-3'>
                        {item.tag?.map((tag: string, idx: number) => (
                          <p
                            key={idx}
                            className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white'>
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
