import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  fullWidth = false,
  ...props
}) => {
  return (
    <section className={cn('section-padding', className)} {...props}>
      <div
        className={cn(
          !fullWidth && 'container-custom',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};
