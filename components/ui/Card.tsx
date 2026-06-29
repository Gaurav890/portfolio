'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg border transition-colors duration-200 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white border-slate-200',
        elevated: 'bg-white border-slate-200',
        bordered: 'bg-white border-slate-200',
        ghost: 'border-transparent bg-transparent',
        gradient: 'bg-slate-50 border-slate-200',
        glass: 'bg-white border-slate-200',
        outline: 'bg-transparent border-slate-200',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      hover: {
        none: '',
        lift: 'hover:border-slate-400',
        scale: 'hover:border-slate-400',
        glow: 'hover:border-slate-400',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'none',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: 'div' | 'article' | 'section';
  accent?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo' | 'teal';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, accent, as: Component = 'div', ...props }, ref) => {
    const accentClasses = accent ? {
      blue: 'border-l-4 border-l-ocean-blue',
      purple: 'border-l-4 border-l-purple',
      green: 'border-l-4 border-l-green',
      orange: 'border-l-4 border-l-orange',
      pink: 'border-l-4 border-l-pink',
      indigo: 'border-l-4 border-l-indigo',
      teal: 'border-l-4 border-l-teal',
    }[accent] : '';

    return (
      <Component
        className={cn(cardVariants({ variant, padding, hover }), accentClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-bold tracking-tight', className)}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-base text-gray-text', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
));

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
