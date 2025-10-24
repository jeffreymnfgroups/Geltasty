'use client'
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ticking = useRef(false)
  const lastScrollY = useRef(0)

  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const currentSectionRef = sectionRef.current
    if (currentSectionRef) observer.observe(currentSectionRef)

    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY

        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return

          const sectionRect = sectionRef.current.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const totalScrollDistance = viewportHeight * 2

          let progress = 0
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance))
          }

          if (progress >= 0.66) {
            setActiveCardIndex(2)
          } else if (progress >= 0.33) {
            setActiveCardIndex(1)
          } else {
            setActiveCardIndex(0)
          }

          ticking.current = false
        })

        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (currentSectionRef) observer.unobserve(currentSectionRef)
    }
  }, [])

  const isFirstCardVisible = isIntersecting
  const isSecondCardVisible = activeCardIndex >= 1
  const isThirdCardVisible = activeCardIndex >= 2

  return (
    <>
      {/* Sticky Scroll Section */}
      <div ref={sectionRef} className="relative" style={{ height: '300vh' }}>
        <section
          className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white dark:bg-dark_black"
          id="how-it-works"
        >
          <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
            <div className="mb-2 md:mb-3">
              <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
                <div
                  className="pulse-chip opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple_blue text-white mr-2">
                    03
                  </span>
                  <span className="dark:text-white">Process</span>
                </div>
              </div>

              <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 md:mb-4 brockmann-font dark:text-white">
                Your Journey to Exam Success
              </h2>
              <p className="text-lg text-dark_black/60 dark:text-white/60 max-w-3xl">
                Transform your NEET/UPSC preparation with our proven, science-backed methodology
              </p>
            </div>

            <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">

              {/* First Card */}
              <div
                className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`}
                style={{
                  ...cardStyle,
                  zIndex: 10,
                  transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                  opacity: isFirstCardVisible ? 0.9 : 0
                }}
              >
                <div
                  className="absolute inset-0 z-0 bg-gradient-to-b from-purple_blue/40 to-dark_black/80"
                  style={{
                    backgroundImage: "url('/images/home/background-section1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundBlendMode: "overlay"
                  }}
                ></div>

                {/* Aurora Background Effect */}
                <div className="absolute inset-0 z-1 opacity-30 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 100% 0%, #3b82f6 0%, transparent 50%)",
                  }}
                ></div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <span className="text-sm font-medium">Step 1: The Seed</span>
                  </div>
                </div>

                {/* Video on Right */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-40 h-48 md:w-52 md:h-60">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg animate-border-fade border-2"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <source src="/images/home/stage.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center pr-64 md:pr-72">
                  <div className="max-w-lg">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                      Create Your Profile
                    </h3>
                    <p className="text-white/80 text-lg mb-4">
                      Set up your personalized learning profile and take our assessment.
                      Your baseline learning style is identified, and your potential is unlocked.
                    </p>
                    <p className="text-white/60 text-sm">
                      ✓ Assessment Completed! Your baseline learning style profile is ready.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div
                className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`}
                style={{
                  ...cardStyle,
                  zIndex: 20,
                  transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                  opacity: isSecondCardVisible ? 1 : 0,
                  pointerEvents: isSecondCardVisible ? 'auto' : 'none'
                }}
              >
                <div
                  className="absolute inset-0 z-0 bg-gradient-to-b from-purple_blue/40 to-dark_black/80"
                  style={{
                    backgroundImage: "url('/images/home/background-section2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay"
                  }}
                ></div>

                {/* Aurora Background Effect */}
                <div className="absolute inset-0 z-1 opacity-30 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 100% 0%, #a5b4fc 0%, transparent 50%)",
                  }}
                ></div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <span className="text-sm font-medium">Step 2: The Growth</span>
                  </div>
                </div>

                {/* Video on Right */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-40 h-48 md:w-52 md:h-60">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg animate-border-fade border-2"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <source src="/images/home/stage2.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center pr-64 md:pr-72">
                  <div className="max-w-lg">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                      Match with Expert Mentor
                    </h3>
                    <p className="text-white/80 text-lg mb-4">
                      Get connected with a NEET/UPSC expert mentor. Together, you&apos;ll set SMART goals
                      and create a personalized study roadmap tailored to your needs.
                    </p>
                    <p className="text-white/60 text-sm">✓ Goals Set ✓ Study Roadmap Ready</p>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div
                className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`}
                style={{
                  ...cardStyle,
                  zIndex: 30,
                  transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                  opacity: isThirdCardVisible ? 1 : 0,
                  pointerEvents: isThirdCardVisible ? 'auto' : 'none'
                }}
              >
                <div
                  className="absolute inset-0 z-0 bg-gradient-to-b from-purple_blue/40 to-dark_black/80"
                  style={{
                    backgroundImage: "url('/images/home/background-section3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                    backgroundBlendMode: "overlay"
                  }}
                ></div>

                {/* Aurora Background Effect */}
                <div className="absolute inset-0 z-1 opacity-30 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 100% 0%, #60a5fa 0%, transparent 50%)",
                  }}
                ></div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <span className="text-sm font-medium">Step 3: The Mastery</span>
                  </div>
                </div>

                {/* Video on Right */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-40 h-48 md:w-52 md:h-60">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg animate-border-fade border-2"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <source src="/images/home/stage3.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center pr-64 md:pr-72">
                  <div className="max-w-lg">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                      Learn with Real-Time Insights
                    </h3>
                    <p className="text-white/80 text-lg mb-4">
                      Experience dynamic learning powered by AI analytics. Track your progress, identify weak areas,
                      maintain streaks, and master each stage from Reading to Practice.
                    </p>
                    <div className="space-y-2 text-white/60 text-sm">
                      <p>✓ Weak Area Improved: +20%</p>
                      <p>✓ Streak: 14 Days</p>
                      <p>✓ Mastered 4 Stages: Reading, Learning, Revision, Practice</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* CTA Button - Appears naturally after scroll */}
      <div className="w-full py-16 bg-white dark:bg-dark_black opacity-0 animate-fade-in-up [animation-delay:0.3s]">
        <div className="container px-6 lg:px-8 flex justify-center">
          <Link
            href='/contact'
            className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-4 rounded-full md:max-w-64 w-full sm:w-auto border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue dark:hover:text-purple_blue'
          >
            <span className='flex-1 text-center transform transition-transform duration-200 ease-in-out group-hover:scale-95'>
              Start Your Journey Today
            </span>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='flex-shrink-0 transform transition-transform duration-200 ease-in-out group-hover:scale-90 group-hover:rotate-45'
            >
              <rect
                width='40'
                height='40'
                rx='20'
                className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
              />
              <path
                d='M15.832 15.3334H24.1654V23.6667'
                className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15.832 23.6667L24.1654 15.3334'
                className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
