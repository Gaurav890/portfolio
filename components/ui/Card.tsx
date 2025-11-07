'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-2xl border transition-all duration-300 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-base-white border-gray-200 shadow-sm hover:shadow-lg',
        elevated: 'bg-base-white border-gray-200 shadow-md hover:shadow-xl',
        bordered: 'bg-base-white border-2 border-ocean-blue/20 hover:border-ocean-blue/40 shadow-sm',
        ghost: 'border-transparent bg-transparent hover:bg-gray-50',
        gradient: 'bg-gradient-to-br from-ocean-blue/5 to-purple/5 border-ocean-blue/20 hover:border-ocean-blue/40',
        glass: 'bg-white/60 backdrop-blur-xl border-white/20 shadow-xl',
        outline: 'bg-transparent border-2 border-gray-200 hover:border-ocean-blue/40 hover:bg-white/50',
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
        lift: 'hover:-translate-y-2',
        scale: 'hover:scale-[1.02]',
        glow: 'hover:shadow-2xl hover:shadow-ocean-blue/10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'lift',
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
