'use client'

import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'btn inline-flex items-center gap-2 rounded-full font-semibold text-decoration-none border transition-150ms-ease focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 touch-action-manipulation',
  {
    variants: {
      variant: {
        ghost:
          'bg-white/4 text-border hover:bg-white/7 border-white/8',
        primary:
          'text-#072617 bg-gradient-180deg-#43f3ad-#16a34a border-none shadow-0-12px-30px-rgba-67-243-173-0.25 inset-0-0-0-1px-rgba-255-255-255-0.15 hover:filter-saturate-1.1-brightness-1.02 hover:translate-y--1px active:translate-y-0',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
    },
  },
)

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
