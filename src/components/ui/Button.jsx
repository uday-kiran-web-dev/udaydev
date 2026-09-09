import React from 'react';
import { cn } from '../../utils/cn';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

  const variants = {
    primary: "bg-accent text-accent-foreground hover:bg-cyan-400 shadow-sm shadow-cyan-500/20 font-semibold",
    secondary: "bg-card text-foreground hover:bg-muted border border-card-border hover:border-border",
    outline: "border border-border text-foreground hover:bg-white/5 hover:border-accent/50",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5",
    accentGlow: "bg-cyan-500/10 text-accent border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 shadow-sm shadow-cyan-500/10",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-lg gap-2",
    lg: "text-base px-6 py-3 rounded-lg gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

