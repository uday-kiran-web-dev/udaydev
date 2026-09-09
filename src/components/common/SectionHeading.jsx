import React from 'react';
import { cn } from '../../utils/cn';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div className={cn('mb-12 md:mb-16', isCentered && 'text-center mx-auto max-w-2xl', className)}>
      {badge && (
        <div className={cn('inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20')}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

