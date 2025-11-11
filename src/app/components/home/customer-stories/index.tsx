import Image from 'next/image'

function CustomerStories() {
  return (
    <section className='section-spacing bg-white dark:bg-dark_black'>
      <div className='container px-4 sm:px-6'>
        <div className='flex flex-col gap-8 md:gap-12 lg:gap-20'>
          <div className='flex flex-col items-center gap-3 sm:gap-4 text-center'>
            <h2 className='brockmann-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-dark_black dark:text-white px-2'>
              A System that Built on Science, Designed for Success{' '}
              <span className="instrument-font italic font-normal">
                Core Value Propositions
              </span>
            </h2>
            <p className='text-lg sm:text-xl md:text-2xl text-dark_black/80 dark:text-white/80 font-medium px-2'>
              From Preparation to Mastery—Science Guides Your Path
            </p>
            <p className='max-w-3xl text-base sm:text-lg text-dark_black/60 dark:text-white/60 px-2'>
              Gestalty blends cognitive psychology, statistical analysis, and proven pedagogy to create a preparation system that respects how your mind actually learns.
            </p>
          </div>

          <div className='flex flex-col gap-4 sm:gap-6'>
            {/* Row 1: Full width card + Medium card */}
            <div className='flex flex-col gap-4 sm:gap-6 xl:flex-row'>
              {/* Pillar 1: Full width card with background image style */}
              <article className="relative flex w-full flex-col gap-4 sm:gap-6 md:gap-8 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white overflow-hidden [&_*]:!text-white">
                <div className="absolute inset-0 bg-dark_black/80 dark:bg-dark_black/90 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
                  <span className='text-xs sm:text-body-sm font-medium uppercase tracking-[0.28em] text-white/90'>
                    Pillar 1
                  </span>
                  <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start'>
                    <div className='flex-1 flex flex-col gap-3 sm:gap-4'>
                      <h4 className='brockmann-font text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>
                        Cognitive Analytics
                      </h4>
                      <p className='text-sm sm:text-body-md text-white/90 leading-relaxed'>
                        Advanced algorithms analyze your learning patterns to optimize study schedules. Learning is not random it's measurable, trackable, and improvable. By fusing psychology, pedagogy, and analytics, this system empowers you to understand yourself as a learner, take control of your growth, and reach the full potential of your mind.
                      </p>
                    </div>
                    <div className='w-full lg:w-80 xl:w-96 flex-shrink-0 max-w-full overflow-hidden'>
                      <Image
                        src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
                        alt='Cognitive analytics and brain learning'
                        width={400}
                        height={280}
                        className='w-full h-40 sm:h-48 md:h-56 lg:h-72 rounded-xl object-cover shadow-lg max-w-full'
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Row 2: Two medium cards */}
            <div className='flex flex-col gap-4 sm:gap-6 xl:flex-row'>
              {/* Pillar 2: Pale yellow card */}
              <article className='flex flex-col gap-4 sm:gap-6 rounded-2xl bg-pale-yellow p-6 sm:p-8 text-dark_black dark:bg-dark_yellow_gradient dark:text-white xl:flex-1'>
                <span className='text-xs sm:text-body-sm font-medium uppercase tracking-[0.28em] text-dark_black/60 dark:text-white/60'>
                  Pillar 2
                </span>
                <h4 className='brockmann-font text-lg sm:text-title-md font-semibold text-dark_black dark:text-white'>
                  Adaptive Learning Experience
                </h4>
                <div>
                  <Image
                    src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
                    alt='Personalized learning journey'
                    width={400}
                    height={240}
                    className='w-full h-40 sm:h-48 md:h-56 rounded-xl object-cover shadow-md'
                    unoptimized={true}
                  />
                </div>
                <div className='flex flex-col gap-2 sm:gap-3'>
                  <div className='flex flex-col gap-1.5 sm:gap-2'>
                    <h5 className='text-sm sm:text-body-md font-semibold text-dark_black dark:text-white'>
                      Personalized Journey
                    </h5>
                    <p className='text-xs sm:text-body-sm text-dark_black/80 dark:text-white/80'>
                      A personalized learning journey that adapts in real-time to your strengths, weaknesses, and learning pace. Smart algorithms adjust content difficulty, suggest optimal study sequences, and highlight focus areas, ensuring efficient progress while keeping motivation high.
                    </p>
                  </div>
                  <div className='flex flex-col gap-1.5 sm:gap-2'>
                    <h5 className='text-sm sm:text-body-md font-semibold text-dark_black dark:text-white'>
                      Spaced Repetition
                    </h5>
                    <p className='text-xs sm:text-body-sm text-dark_black/80 dark:text-white/80'>
                      Scientifically-proven technique to enhance long-term retention and memory consolidation.
                    </p>
                  </div>
                </div>
              </article>

              {/* Pillar 3: Dark card */}
              <article className='flex flex-col gap-4 sm:gap-6 rounded-2xl bg-dark_black p-6 sm:p-8 text-white dark:bg-white/10 xl:flex-1 [&_*]:!text-white'>
                <span className='text-xs sm:text-body-sm font-medium uppercase tracking-[0.28em] text-white/60'>
                  Pillar 3
                </span>
                <h4 className='brockmann-font text-lg sm:text-title-md font-semibold text-white'>
                  Data-Driven Insights
                </h4>
                <div>
                  <Image
                    src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
                    alt='Analytics dashboard with metrics'
                    width={400}
                    height={200}
                    className='w-full h-40 sm:h-48 md:h-56 rounded-xl object-cover shadow-lg'
                    unoptimized={true}
                  />
                </div>
                <div className='flex flex-col gap-2 sm:gap-3'>
                  <div className='flex flex-col gap-1.5 sm:gap-2'>
                    <h5 className='text-sm sm:text-body-md font-semibold text-white'>
                      Analytics Dashboard
                    </h5>
                    <p className='text-xs sm:text-body-sm text-white/90'>
                      A real-time analytics dashboard with performance metrics, powered by statistical scoring to optimize study efficiency, enriched with behavioral consistency tracking and tailored improvement recommendations.
                    </p>
                  </div>
                  <p className='text-xs sm:text-body-sm text-white/90'>
                    A learning ecosystem where progress is visible, study is scientific, and accountability is shared.
                  </p>
                </div>
              </article>
            </div>

            {/* Row 3: Single card with light background */}
            <div className='flex flex-col gap-4 sm:gap-6'>
              {/* Pillar 4: Light background card */}
              <article className='flex flex-col md:flex-row gap-4 sm:gap-6 rounded-2xl bg-dark_black/5 p-6 sm:p-8 dark:bg-white/5'>
                <div className='flex-1 flex flex-col gap-4 sm:gap-6'>
                  <span className='text-xs sm:text-body-sm font-medium uppercase tracking-[0.28em] text-dark_black/60 dark:text-white/60'>
                    Pillar 4
                  </span>
                  <h4 className='brockmann-font text-lg sm:text-title-md font-semibold text-dark_black dark:text-white'>
                    Expert Mentorship
                  </h4>
                  <div className='flex flex-col gap-2 sm:gap-3'>
                    <h5 className='text-sm sm:text-body-md font-semibold text-dark_black dark:text-white'>
                      Mentor Connection
                    </h5>
                    <p className='text-sm sm:text-body-md text-dark_black/80 dark:text-white/80 leading-relaxed'>
                      One-on-one expert guidance, personalized study plans with data-driven insights, and integrated mentor support with accountability partnerships streamline and boost your preparation.
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-96 flex-shrink-0 max-w-full overflow-hidden'>
                  <Image
                    src='https://images.unsplash.com/photo-1522071901873-411886a10004?w=800&q=80'
                    alt='Mentor connection and guidance'
                    width={400}
                    height={280}
                    className='w-full h-40 sm:h-48 md:h-56 lg:h-80 xl:h-96 rounded-xl object-cover shadow-md max-w-full'
                    unoptimized={true}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
