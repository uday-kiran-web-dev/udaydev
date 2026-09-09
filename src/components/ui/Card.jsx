import React from 'react';
import { cn } from '../../utils/cn';

export function Card({
  children,
  className = '',
  hoverEffect = false,
  glass = true,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-card-border p-6 transition-all duration-300",
        glass ? "glass-panel" : "bg-card",
        hoverEffect && "hover:border-border hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={cn("mb-4 space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={cn("text-lg font-semibold tracking-tight text-foreground", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={cn("mt-6 flex items-center pt-4 border-t border-white/5", className)} {...props}>
      {children}
    </div>
  );
}

