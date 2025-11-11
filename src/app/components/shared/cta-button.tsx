import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CTAButtonVariant = 'primary' | 'secondary'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: CTAButtonVariant
  className?: string
  target?: string
  rel?: string
  showArrow?: boolean
  arrowSize?: number
  labelClassName?: string
}

interface ArrowIconProps {
  variant?: CTAButtonVariant
  size?: number
  className?: string
}

export const ArrowIcon = ({
  variant = 'primary',
  size = 40,
  className,
}: ArrowIconProps) => {
  const rectClasses =
    variant === 'primary'
      ? 'fill-white transition-colors duration-200 ease-out group-hover:fill-primary dark:fill-white dark:group-hover:fill-primary'
      : 'fill-primary transition-colors duration-200 ease-out group-hover:fill-white dark:group-hover:fill-primary'

  const pathClasses =
    variant === 'primary'
      ? 'stroke-[#1B1D1E] transition-colors duration-200 ease-out group-hover:stroke-white dark:stroke-dark_black dark:group-hover:stroke-white'
      : 'stroke-white transition-colors duration-200 ease-out group-hover:stroke-primary dark:group-hover:stroke-primary'

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'flex-shrink-0 transition-transform duration-200 ease-out group-hover:-translate-x-1 group-hover:rotate-45',
        className,
      )}
    >
      <rect width='40' height='40' rx='20' className={rectClasses} />
      <path
        d='M15.832 15.3334H24.1654V23.6667'
        className={pathClasses}
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.832 23.6667L24.1654 15.3334'
        className={pathClasses}
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  target,
  rel,
  showArrow = true,
  arrowSize,
  labelClassName,
}: CTAButtonProps) {
  const baseClasses =
    'group inline-flex items-center justify-between gap-4 rounded-full border px-6 py-3 font-medium transition-transform duration-200 ease-out hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark_black'

  const variantClasses =
    variant === 'primary'
      ? 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary dark:hover:text-primary'
      : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(baseClasses, variantClasses, className)}
    >
      <span
        className={cn(
          'flex-1 text-left transition-transform duration-200 ease-out group-hover:translate-x-1',
          labelClassName,
        )}
      >
        {children}
      </span>
      {showArrow ? <ArrowIcon variant={variant} size={arrowSize} /> : null}
    </Link>
  )
}
