'use client'

import { motion, type Transition } from 'framer-motion'
import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  ReactNode,
  useMemo,
} from 'react'
import { cn } from '@/lib/utils'

type FadeInProps<T extends ElementType> = {
  as?: T
  delay?: number
  once?: boolean
  viewportAmount?: number
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'ref' | 'className'>

const DEFAULT_EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1]

const baseTransition: Omit<Transition, 'delay'> = {
  duration: 0.6,
  ease: DEFAULT_EASE,
}

export function FadeIn<T extends ElementType = 'div'>({
  as,
  delay = 0,
  once = true,
  viewportAmount = 0.25,
  className,
  children,
  ...rest
}: FadeInProps<T>) {
  const Component = useMemo(
    () => motion(as ?? ('div' as ElementType)),
    [as],
  ) as ComponentType<ComponentPropsWithoutRef<T>>

  return (
    <Component
      {...(rest as ComponentPropsWithoutRef<T>)}
      className={cn('will-change-transform', className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </Component>
  )
}

export const fadeInConfig = (
  delay = 0,
  once = true,
  amount = 0.25,
) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once, amount },
  transition: { ...baseTransition, delay } satisfies Transition,
})

