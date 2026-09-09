import React from 'react';
import { cn } from '../../utils/cn';

export function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium transition-colors";

  const variants = {
    default: "bg-white/5 text-foreground border border-white/10",
    accent: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25",
    muted: "bg-muted text-muted-foreground border border-transparent",
    outline: "border border-border text-muted-foreground",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}

