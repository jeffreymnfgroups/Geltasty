'use client'
import Image from 'next/image'

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
  return (
    <section id='aboutus'>
      <div className='2xl:py-20 py-11'>
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
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className='group relative overflow-hidden rounded-2xl cursor-pointer'
                >
                  <Image
                    src={problem.src}
                    alt={problem.title}
                    width={400}
                    height={300}
                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
                    unoptimized={true}
                  />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300' />
              <div className='absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      {problem.title}
                    </h3>
                    <p className='text-white/90 text-sm'>
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
