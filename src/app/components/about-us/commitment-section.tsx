'use client'
import { FadeIn } from '@/app/components/shared/fade-in'
import { Users, Award, Heart, Lightbulb } from 'lucide-react'

const commitments = [
  {
    icon: Users,
    title: 'To Students',
    items: [
      "We never build features just because they're trendy",
      'Every tool is grounded in research and validated through use',
      'Your data belongs to you and serves only your success',
      'We continuously improve based on your feedback',
      'We celebrate your wins and support you through struggles',
    ],
  },
  {
    icon: Award,
    title: 'To Mentors',
    items: [
      'We provide the tools and training to deliver exceptional guidance',
      'We compensate fairly for expertise and time',
      'We protect you from administrative burden with automated systems',
      'We foster a community of continuous professional development',
      'We honor your commitment to aspirant success',
    ],
  },
  {
    icon: Heart,
    title: 'To Parents',
    items: [
      'We provide appropriate visibility without invasion of privacy',
      'We translate metrics into understandable insights',
      'We enable supportive presence without micromanagement',
      'We respect family dynamics and constraints',
      'We communicate openly about what works and what doesn\'t',
    ],
  },
  {
    icon: Lightbulb,
    title: 'To the Ecosystem',
    items: [
      'We share research findings openly',
      'We welcome academic collaboration',
      'We advocate for evidence-based educational reform',
      'We measure our success by aspirant outcomes, not just revenue',
      'We build for long-term impact, not short-term profits',
    ],
  },
]

export default function CommitmentSection() {
  return (
    <section className="section-spacing w-full bg-white dark:bg-dark_black">
      <div className="container px-6 lg:px-8 mx-auto">
        <FadeIn as="div" className="text-center mb-16 md:mb-20">
          <h2 className="brockmann-font text-display-lg mb-4">
            What Drives Us Every Day
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon
            return (
              <FadeIn
                key={index}
                delay={index * 0.08}
                className="group card-surface p-6 md:p-8 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-title-md mb-4">
                    {commitment.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-body-sm">
                  {commitment.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
