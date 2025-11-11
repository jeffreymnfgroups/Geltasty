'use client'
import { FadeIn } from '@/app/components/shared/fade-in'
import { Brain, Target, Lightbulb } from 'lucide-react'

const frameworks = [
  {
    icon: Brain,
    title: 'Andragogy (Adult Learning)',
    description: 'Structured, evidence-driven systems that foster self-motivation and respect adult learners\' autonomy and experience.',
  },
  {
    icon: Lightbulb,
    title: 'Constructivism',
    description: 'Knowledge is actively constructed through connecting new information to prior understanding—creating meaningful, sticky, and transferable learning.',
  },
  {
    icon: Target,
    title: 'Metacognitive Regulation',
    description: 'Planning, monitoring, and evaluating your own learning—thinking about thinking to optimize strategies through strategic adaptation and self-correction.',
  },
]

export default function SolutionSection() {
  return (
    <section className="section-spacing w-full bg-white dark:bg-dark_black">
      <div className="container px-6 lg:px-8 mx-auto">
        <FadeIn as="div" className="text-center mb-16 md:mb-20">
          <h2 className="brockmann-font text-display-lg mb-6">
            "The Whole Is Greater Than the Sum of Its Parts"
          </h2>
          <p className="text-body-lg mx-auto mb-6 max-w-4xl">
            Gestalt psychology teaches that organized wholes are perceived as more than individual parts combined. We apply this to learning: isolated facts and random study sessions don't create exam readiness. Integration, pattern recognition, and holistic systems do.
          </p>
          <p className="text-body-md mx-auto max-w-3xl">
            We transform fragmented study efforts—scattered notes, random revisions, disconnected practice—into unified mastery systems where every piece connects to create complete understanding.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {frameworks.map((framework, index) => {
            const Icon = framework.icon
            return (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="group card-surface p-8 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-title-md mb-3">
                    {framework.title}
                  </h3>
                </div>
                <p className="text-body-sm">
                  {framework.description}
                </p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
