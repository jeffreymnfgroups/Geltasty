'use client'
import { Carousel, Card } from '../../ui/apple-cards-carousel'

const problemCards = [
  {
    src: '/images/home/problem1.jpg',
    title: 'Lack of Focus and Consistency',
    category: 'Problem 1',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Aspirants struggle to maintain regular study habits due to distractions, especially from digital platforms, and a tendency toward procrastination. This disrupts momentum and reduces daily productivity.
        </p>
        <div className="flex items-start gap-3 py-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 bg-red-50 dark:bg-red-900/20 dark:text-red-300 rounded-md">
            Impact
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed underline decoration-red-500 decoration-1 underline-offset-2">
            Inconsistent study patterns lead to knowledge gaps and reduced retention rates.
          </p>
        </div>
      </div>
    )
  },
  {
    src: '/images/home/problem2.jpg',
    title: 'Ineffective Study Planning',
    category: 'Problem 2',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Many underestimate the syllabus size or time needed for mastery. Poor scheduling and imbalance between coaching and self-study result in incomplete coverage and rushed preparation.
        </p>
        <div className="flex items-start gap-3 py-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-orange-700 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-300 rounded-md">
            Impact
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed underline decoration-orange-500 decoration-1 underline-offset-2">
            Inadequate planning leads to incomplete syllabus coverage and last-minute cramming.
          </p>
        </div>
      </div>
    )
  },
  {
    src: '/images/home/problem3.jpg',
    title: 'Weak Study Techniques and Retention',
    category: 'Problem 3',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Relying on passive learning, skipping revisions, and avoiding practice questions lead to weak conceptual clarity and poor problem-solving ability.
        </p>
        <div className="flex items-start gap-3 py-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-300 rounded-md">
            Impact
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed underline decoration-yellow-500 decoration-1 underline-offset-2">
            Poor study methods result in surface-level understanding and weak problem-solving skills.
          </p>
        </div>
      </div>
    )
  },
  {
    src: '/images/home/problem4.jpg',
    title: 'Psychological and Emotional Barriers',
    category: 'Problem 4',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Anxiety, burnout, fear of failure, and peer comparison drain motivation and confidence, making it harder to sustain effort over long preparation periods.
        </p>
        <div className="flex items-start gap-3 py-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300 rounded-md">
            Impact
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed underline decoration-purple-500 decoration-1 underline-offset-2">
            Mental health issues significantly impact study performance and exam outcomes.
          </p>
        </div>
      </div>
    )
  },
  {
    src: '/images/home/problem5.jpg',
    title: 'Fragmented and Unsystematic Learning',
    category: 'Problem 5',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Frequent switching of study methods, postponing tough subjects, and lack of progress tracking create confusion and prevent a structured learning approach.
        </p>
        <div className="flex items-start gap-3 py-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 rounded-md">
            Impact
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed underline decoration-blue-500 decoration-1 underline-offset-2">
            Lack of systematic approach leads to scattered knowledge and poor exam performance.
          </p>
        </div>
      </div>
    )
  },
  {
    src: '/images/home/problem6.png',
    title: 'Misalignment Between Effort and Outcome',
    category: 'Problem 6',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Despite putting in hours of work, many students see little improvement due to inefficiency, poor self-evaluation, and low strategic awareness—reducing their success rate in exams.
        </p>
        <div className="flex items-start gap-3 py-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-300 rounded-md">
            Impact
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed underline decoration-green-500 decoration-1 underline-offset-2">
            Inefficient study practices lead to wasted effort and disappointing results.
          </p>
        </div>
      </div>
    )
  }
]

function WebResult() {
  const carouselItems = problemCards.map((card, index) => (
    <Card key={index} card={card} index={index} layout={true} />
  ))

  return (
    <section id='aboutus'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium w-full leading-tight max-w-6xl brockmann-font'>
                The Hidden Crisis in Exam Preparation
                <br />
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  Why Traditional Methods Fail
                </span>
              </h1>
              <p className='text-lg text-gray-600 dark:text-gray-400 max-w-4xl'>
                Most aspirants struggle not from lack of effort, but from invisible barriers that traditional methods can&apos;t address.
              </p>
            </div>
            
            <div className='flex flex-col gap-8'>
              <Carousel items={carouselItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
