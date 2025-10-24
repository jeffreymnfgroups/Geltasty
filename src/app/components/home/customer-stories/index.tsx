import Image from 'next/image'

function CustomerStories() {
  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center gap-10 md:gap-20'>
            <div className='mx-auto max-w-2xl flex items-center text-center'>
              <h2 className='brockmann-font'>
                Built on Science, Designed for Success
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  Core Value Propositions
                </span>
              </h2>
            </div>
            <div className='mx-auto max-w-4xl text-center mb-8'>
              <p className='text-lg text-dark_black/70 dark:text-white/70'>
                Gestalty blends cognitive psychology, statistical analysis, and proven pedagogy to create a preparation system that respects how your mind actually learns.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.webp')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className='text-white/60 uppercase text-sm font-medium'>
                    Pillar 1
                  </span>
                  <div className='flex flex-col gap-6 '>
                    <h4 className='text-white'>
                      Cognitive Science Foundation
                    </h4>
                    <div className='flex flex-col gap-1'>
                      <p className='text-white font-medium'>Brain with neural connections</p>
                      <p className='text-white/60 text-sm font-medium'>
                        Tracking cognitive learning with measurable metrics, powered by metacognitive strategies, and strengthened by psychological theory with statistical tools for deeper learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8'>
                  <div>
                    <span className='uppercase text-sm font-medium text-dark_black/60'>
                      Pillar 2
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-medium dark:text-dark_black'>
                      Data-Driven Insights
                    </h2>
                    <h4 className='dark:text-dark_black text-sm'>
                      Analytics dashboard
                    </h4>
                    <p className='dark:text-dark_black/70 text-sm mt-2'>
                      A real-time analytics dashboard with performance metrics, powered by statistical scoring to optimize study efficiency, and enriched with behavioral consistency tracking and improvement recommendations.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      Pillar 3
                    </span>
                    <h4 className='text-white'>
                      Expert Mentorship
                    </h4>
                    <div>
                      <Image
                        src='/images/home/customerStories/creativity_img.webp'
                        alt='Mentor and student connection'
                        width={344}
                        height={220}
                        className='w-full h-52'
                        unoptimized={true}
                      />
                    </div>
                    <p className='text-white/70 text-sm'>
                      One-on-one expert guidance, personalized study plans with data-driven insights, and integrated mentor support with accountability partnerships to streamline and boost your preparation.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium'>
                      Pillar 4
                    </span>
                    <h2 className='text-2xl lg:text-5xl'>
                      Adaptive Learning Experience
                    </h2>
                    <p className='text-dark_black/70 dark:text-white/70 text-sm'>
                      A personalized learning journey that adapts in real-time to your strengths, weaknesses, and learning pace. Smart algorithms adjust content difficulty, suggest optimal study sequences, and highlight focus areas, ensuring efficient progress while keeping motivation high.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
