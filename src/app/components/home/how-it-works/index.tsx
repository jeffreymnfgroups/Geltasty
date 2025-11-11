'use client'
import React, { useEffect, useRef, useState } from "react"
import { CTAButton } from '@/app/components/shared/cta-button'

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsContainerRef = useRef<HTMLDivElement | null>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ticking = useRef(false)
  const lastScrollY = useRef(0)

  const cardStyle = {
    height: '60vh',
    minHeight: '400px',
    maxHeight: '600px',
    borderRadius: '24px',
    transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
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
            <div className="mb-2 md:mb-3 text-center">
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
                Your Journey to{' '}
                <span className="instrument-font italic font-normal">
                  Exam Success
                </span>
              </h2>
              <p className="text-lg text-dark_black/60 dark:text-white/60 max-w-3xl mx-auto">
                Transform your NEET/UPSC preparation with our proven, science-backed methodology
              </p>
            </div>

            <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">

              {/* First Card */}
              <div
                className={`absolute inset-0 overflow-hidden ${isFirstCardVisible ? 'animate-card-enter' : ''}`}
                style={{
                  ...cardStyle,
                  zIndex: 10,
                  transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                  opacity: isFirstCardVisible ? 0.9 : 0,
                  boxShadow: '0 25px 50px -12px rgba(27, 38, 79, 0.6)'
                }}
              >
                <div className="relative h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#1B264F' }}>
                  
                  {/* Glass Morphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC000]/10 via-transparent to-transparent" />
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,192,0,0.3) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }} />

                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-6 sm:top-6 sm:transform-none z-30">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#FFC000]/20 backdrop-blur-md border border-[#FFC000]/30 shadow-lg">
                      <span className="text-sm font-semibold text-white">Step 1: The Seed</span>
                    </div>
                  </div>

                  {/* Video on Right */}
                  <div className="hidden sm:block absolute right-0 top-0 bottom-0 z-20 w-2/5 md:w-3/10">
                    <div className="absolute inset-0 rounded-l-3xl overflow-hidden">
                      {/* Smooth gradient fade */}
                      <div className="absolute inset-0 z-10" style={{ 
                        background: 'linear-gradient(to right, #1B264F 0%, rgba(27, 38, 79, 0.6) 40%, transparent 100%)',
                        width: '40%' 
                      }} />
                      
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/images/home/stage.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Top/Bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#1B264F]/20 via-transparent to-[#1B264F]/20" />
                    </div>
                  </div>

                  <div className="relative z-10 p-4 sm:p-8 md:p-10 h-full flex items-center sm:pr-48 md:pr-64 lg:pr-72">
                    <div className="w-full sm:max-w-lg text-center sm:text-left">
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold brockmann-font mb-4">
                        Create Your Profile
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                        Set up your personalized learning profile and take our assessment. Your baseline learning style is identified, and your potential is unlocked.
                      </p>
                      <div className="inline-flex items-center gap-3 backdrop-blur-sm px-4 py-3 rounded-xl border shadow-lg" style={{ 
                        backgroundColor: 'rgba(255, 192, 0, 0.15)',
                        borderColor: 'rgba(255, 192, 0, 0.3)'
                      }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFC000' }}>
                          <svg className="w-3.5 h-3.5" style={{ color: '#1B264F' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white font-semibold text-sm">Assessment Completed!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div
                className={`absolute inset-0 overflow-hidden ${isSecondCardVisible ? 'animate-card-enter' : ''}`}
                style={{
                  ...cardStyle,
                  zIndex: 20,
                  transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                  opacity: isSecondCardVisible ? 1 : 0,
                  pointerEvents: isSecondCardVisible ? 'auto' : 'none',
                  boxShadow: '0 25px 50px -12px rgba(27, 38, 79, 0.6)'
                }}
              >
                <div className="relative h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#1B264F' }}>
                  
                  {/* Glass Morphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC000]/10 via-transparent to-transparent" />
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,192,0,0.3) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }} />

                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-6 sm:top-6 sm:transform-none z-30">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#FFC000]/20 backdrop-blur-md border border-[#FFC000]/30 shadow-lg">
                      <span className="text-sm font-semibold text-white">Step 2: The Growth</span>
                    </div>
                  </div>

                  {/* Video on Right */}
                  <div className="hidden sm:block absolute right-0 top-0 bottom-0 z-20 w-2/5 md:w-3/10">
                    <div className="absolute inset-0 rounded-l-3xl overflow-hidden">
                      <div className="absolute inset-0 z-10" style={{ 
                        background: 'linear-gradient(to right, #1B264F 0%, rgba(27, 38, 79, 0.6) 40%, transparent 100%)',
                        width: '40%' 
                      }} />
                      
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/images/home/stage2.mp4" type="video/mp4" />
                      </video>
                      
                      <div className="absolute inset-0 bg-gradient-to-b from-[#1B264F]/20 via-transparent to-[#1B264F]/20" />
                    </div>
                  </div>

                  <div className="relative z-10 p-4 sm:p-8 md:p-10 h-full flex items-center sm:pr-48 md:pr-64 lg:pr-72">
                    <div className="w-full sm:max-w-lg text-center sm:text-left">
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold brockmann-font mb-4">
                        Match with Expert Mentor
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                        Get connected with a NEET/UPSC expert mentor. Together, you&apos;ll set SMART goals and create a personalized study roadmap tailored to your needs.
                      </p>
                      <div className="inline-flex items-center gap-3 backdrop-blur-sm px-4 py-3 rounded-xl border shadow-lg" style={{ 
                        backgroundColor: 'rgba(255, 192, 0, 0.15)',
                        borderColor: 'rgba(255, 192, 0, 0.3)'
                      }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFC000' }}>
                          <svg className="w-3.5 h-3.5" style={{ color: '#1B264F' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white font-semibold text-sm">Goals Set • Roadmap Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div
                className={`absolute inset-0 overflow-hidden ${isThirdCardVisible ? 'animate-card-enter' : ''}`}
                style={{
                  ...cardStyle,
                  zIndex: 30,
                  transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                  opacity: isThirdCardVisible ? 1 : 0,
                  pointerEvents: isThirdCardVisible ? 'auto' : 'none',
                  boxShadow: '0 25px 50px -12px rgba(27, 38, 79, 0.6)'
                }}
              >
                <div className="relative h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#1B264F' }}>
                  
                  {/* Glass Morphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC000]/10 via-transparent to-transparent" />
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,192,0,0.3) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }} />

                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-6 sm:top-6 sm:transform-none z-30">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#FFC000]/20 backdrop-blur-md border border-[#FFC000]/30 shadow-lg">
                      <span className="text-sm font-semibold text-white">Step 3: The Mastery</span>
                    </div>
                  </div>

                  {/* Video on Right */}
                  <div className="hidden sm:block absolute right-0 top-0 bottom-0 z-20 w-2/5 md:w-3/10">
                    <div className="absolute inset-0 rounded-l-3xl overflow-hidden">
                      <div className="absolute inset-0 z-10" style={{ 
                        background: 'linear-gradient(to right, #1B264F 0%, rgba(27, 38, 79, 0.6) 40%, transparent 100%)',
                        width: '40%' 
                      }} />
                      
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/images/home/stage3.mp4" type="video/mp4" />
                      </video>
                      
                      <div className="absolute inset-0 bg-gradient-to-b from-[#1B264F]/20 via-transparent to-[#1B264F]/20" />
                    </div>
                  </div>

                  <div className="relative z-10 p-4 sm:p-8 md:p-10 h-full flex items-center sm:pr-48 md:pr-64 lg:pr-72">
                    <div className="w-full sm:max-w-lg text-center sm:text-left">
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold brockmann-font mb-4">
                        Learn with Real-Time Insights
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                        Experience dynamic learning powered by AI analytics. Track your progress, identify weak areas, maintain streaks, and master each stage from Reading to Practice.
                      </p>
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 backdrop-blur-sm px-4 py-2.5 rounded-xl border shadow-lg" style={{ 
                          backgroundColor: 'rgba(255, 192, 0, 0.15)',
                          borderColor: 'rgba(255, 192, 0, 0.3)'
                        }}>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFC000' }}>
                            <svg className="w-3.5 h-3.5" style={{ color: '#1B264F' }} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-white font-semibold text-sm">Weak Area Improved: +20%</span>
                        </div>
                        <div className="inline-flex items-center gap-3 backdrop-blur-sm px-4 py-2.5 rounded-xl border shadow-lg" style={{ 
                          backgroundColor: 'rgba(255, 192, 0, 0.15)',
                          borderColor: 'rgba(255, 192, 0, 0.3)'
                        }}>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFC000' }}>
                            <span style={{ color: '#1B264F' }} className="text-sm font-bold">🔥</span>
                          </div>
                          <span className="text-white font-semibold text-sm">Streak: 14 Days</span>
                        </div>
                        <div className="inline-flex items-center gap-3 backdrop-blur-sm px-4 py-2.5 rounded-xl border shadow-lg" style={{ 
                          backgroundColor: 'rgba(255, 192, 0, 0.15)',
                          borderColor: 'rgba(255, 192, 0, 0.3)'
                        }}>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFC000' }}>
                            <svg className="w-3.5 h-3.5" style={{ color: '#1B264F' }} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-white font-semibold text-sm">Mastered All Stages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* CTA Button */}
      <div className="w-full py-16 bg-white dark:bg-dark_black opacity-0 animate-fade-in-up [animation-delay:0.3s]">
        <div className="container px-6 lg:px-8 flex justify-center">
          <CTAButton
            href='/contact'
            className='w-full sm:w-auto md:max-w-96 bg-[#0D1B4C] border-[#0D1B4C] px-8 py-3'
            labelClassName='text-center'
          >
            Start Your Journey Today
          </CTAButton>
        </div>
      </div>
    </>
  )
}

export default HowItWorks