'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const problems = [
  {
    src: '/images/home/problem1.webp',
    title: 'The Consistency Gap',
    description: 'Distractions & procrastination break learning momentum.',
  },
  {
    src: '/images/home/problem2.webp',
    title: 'The Planning Fallacy',
    description: 'Students underestimate syllabus + time → cramming.',
  },
  {
    src: '/images/home/problem3.webp',
    title: 'The Retention Black Hole',
    description: 'Passive reading leads to weak problem-solving.',
  },
  {
    src: '/images/home/problem4.webp',
    title: 'The Illusion of Progress',
    description: 'Feeling "done" after only surface-level coverage.',
  },
  {
    src: '/images/home/problem5.webp',
    title: 'Strategic Misalignment',
    description: 'Hours spent ≠ improvement when learning isn\'t structured.',
  },
  {
    src: '/images/home/problem6.webp',
    title: 'The Feedback Void',
    description: 'Lack of timely feedback keeps students unaware of mistakes until it\'s too late.',
  },
]

function WebResult() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollability()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollability)
      return () => carousel.removeEventListener('scroll', checkScrollability)
    }
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section id='aboutus'>
      <div className='pt-16 md:pt-24 pb-12 md:pb-16'>
        <div className='container'>
          <div className='flex flex-col lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold w-full leading-tight max-w-6xl brockmann-font text-dark_black dark:text-white'>
                Why Traditional Prep Fails — And How {' '}
                <span className="instrument-font italic font-normal">
                  Gestalty
                </span>{' '}
                Fixes It
              </h1>
              <p className='text-xl md:text-2xl text-dark_black/80 dark:text-white/80 font-medium'>
                The Problems We Solve – From Chaos to Clarity
              </p>
            </div>
            
            <div className='relative w-full'>
              <div
                ref={carouselRef}
                className='flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-4 [scrollbar-width:none] md:py-6'
                onScroll={checkScrollability}
              >
                <div className='flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl'>
                  {problems.map((problem, index) => (
                    <div
                      key={index}
                      className='relative flex h-80 w-64 flex-shrink-0 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[32rem] md:w-72 dark:bg-neutral-900 hover:scale-105 transition-transform duration-200 ease-out'
                    >
                      <div className='pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/70 via-black/30 to-black/10' />
                      <div className='relative z-40 p-6 bg-gradient-to-b from-black/20 to-transparent rounded-b-3xl w-full'>
                        <h3 className='text-left font-sans text-lg font-semibold [text-wrap:balance] text-white drop-shadow-lg md:text-xl'>
                          {problem.title}
                        </h3>
                        <p className='mt-2 text-left font-sans text-xs font-medium text-white/90 drop-shadow-lg md:text-sm'>
                          {problem.description}
                        </p>
                      </div>
                      <Image
                        src={problem.src}
                        alt={problem.title}
                        fill
                        className='absolute inset-0 z-10 object-cover'
                        unoptimized={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Left Arrow */}
              <button
                className='absolute left-4 top-1/2 -translate-y-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className='h-6 w-6 text-gray-600' />
              </button>
              
              {/* Right Arrow */}
              <button
                className='absolute right-4 top-1/2 -translate-y-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                <ChevronRight className='h-6 w-6 text-gray-600' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
