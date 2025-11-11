'use client'

const analyticsFeatures = [
  {
    title: 'Duplication & Triplication Effort Alerts',
    description: 'Identify when you\'re spending excessive time on topics you\'ve already mastered, preventing wasted effort and optimizing study efficiency.',
  },
  {
    title: 'Cognitive Difficulty Calibration',
    description: 'Automatically adjust content difficulty based on your cognitive load and learning pace, ensuring optimal challenge without overwhelm.',
  },
  {
    title: 'AI-Based Feedback Loop',
    description: 'Precision progress correction through continuous AI analysis of your learning patterns, providing targeted recommendations for improvement.',
  },
]

function AdvancedAnalytics() {
  return (
    <section className='2xl:py-20 py-11 bg-dark_black/5 dark:bg-white/5'>
      <div className='container'>
        <div className='flex flex-col gap-12'>
          <div className='text-center'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-medium mb-6 brockmann-font text-dark_black dark:text-white'>
              Advanced Analytics
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Intelligent insights that go beyond basic tracking to optimize your learning journey
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {analyticsFeatures.map((feature, index) => (
              <div
                key={index}
                className='bg-white dark:bg-dark_black p-8 rounded-2xl shadow-lg border border-dark_black/10 dark:border-white/10 hover:shadow-xl transition-shadow'
              >
                <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6'>
                  <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-4 text-dark_black dark:text-white'>
                  {feature.title}
                </h3>
                <p className='text-dark_black/70 dark:text-white/70'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvancedAnalytics

