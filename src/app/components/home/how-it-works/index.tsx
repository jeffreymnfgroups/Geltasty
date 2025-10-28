'use client'
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { TextGenerateEffect } from "../../ui/text-generate-effect"

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ticking = useRef(false)
  const lastScrollY = useRef(0)

  const cardStyle = {
    height: '60vh',
    minHeight: '400px',
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
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mr-2">
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
                  className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-dark_black/80"
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

                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-4 sm:top-4 sm:transform-none z-30">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <span className="text-xs sm:text-sm font-medium">Step 1: The Seed</span>
                  </div>
                </div>

                {/* Video on Right - Hidden on mobile */}
                <div className="hidden sm:block absolute right-0 top-0 bottom-0 z-20 w-2/5 md:w-3/10 overflow-hidden rounded-l-3xl">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(to right, rgba(27,29,30,0.95) 0%, rgba(27,29,30,0.6) 30%, rgba(27,29,30,0.2) 70%, transparent 100%)",
                    pointerEvents: 'none'
                  }}></div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/home/stage.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-center sm:pr-48 md:pr-64 lg:pr-72">
                  <div className="w-full sm:max-w-lg text-center sm:text-left">
                    <TextGenerateEffect words="Create Your Profile" duration={0.8} visible={isFirstCardVisible} />
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
                      Set up your personalized learning profile and take our assessment. Your baseline learning style is identified, and your potential is unlocked.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm font-medium">Assessment Completed! Your baseline learning style profile is ready.</span>
                    </div>
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
                  className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-dark_black/80"
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

                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-4 sm:top-4 sm:transform-none z-30">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <span className="text-xs sm:text-sm font-medium">Step 2: The Growth</span>
                  </div>
                </div>

                {/* Video on Right - Hidden on mobile */}
                <div className="hidden sm:block absolute right-0 top-0 bottom-0 z-20 w-2/5 md:w-3/10 overflow-hidden rounded-l-3xl">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(to right, rgba(27,29,30,0.95) 0%, rgba(27,29,30,0.6) 30%, rgba(27,29,30,0.2) 70%, transparent 100%)",
                    pointerEvents: 'none'
                  }}></div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/home/stage2.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-center sm:pr-48 md:pr-64 lg:pr-72">
                  <div className="w-full sm:max-w-lg text-center sm:text-left">
                    <TextGenerateEffect words="Match with Expert Mentor" duration={0.8} visible={isSecondCardVisible} />
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
                      Get connected with a NEET/UPSC expert mentor. Together, you&apos;ll set SMART goals and create a personalized study roadmap tailored to your needs.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm font-medium">Goals Set • Study Roadmap Ready</span>
                    </div>
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
                  className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-dark_black/80"
                  style={{
                    backgroundImage: "url('/images/home/background-section2.png')",
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

                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-4 sm:top-4 sm:transform-none z-30">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <span className="text-xs sm:text-sm font-medium">Step 3: The Mastery</span>
                  </div>
                </div>

                {/* Video on Right - Hidden on mobile */}
                <div className="hidden sm:block absolute right-0 top-0 bottom-0 z-20 w-2/5 md:w-3/10 overflow-hidden rounded-l-3xl">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(to right, rgba(27,29,30,0.95) 0%, rgba(27,29,30,0.6) 30%, rgba(27,29,30,0.2) 70%, transparent 100%)",
                    pointerEvents: 'none'
                  }}></div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/home/stage3.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-center sm:pr-48 md:pr-64 lg:pr-72">
                  <div className="w-full sm:max-w-lg text-center sm:text-left">
                    <TextGenerateEffect words="Learn with Real-Time Insights" duration={0.8} visible={isThirdCardVisible} />
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
                      Experience dynamic learning powered by AI analytics. Track your progress, identify weak areas, maintain streaks, and master each stage from Reading to Practice.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm font-medium">Weak Area Improved: +20%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm font-medium">Streak: 14 Days</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm font-medium">Mastered All Stages</span>
                      </div>
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
            className='group bg-primary text-white font-medium flex flex-row justify-between items-center py-2 px-4 rounded-full md:max-w-64 w-full sm:w-auto border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary dark:hover:text-primary'
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
                className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-primary'
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
