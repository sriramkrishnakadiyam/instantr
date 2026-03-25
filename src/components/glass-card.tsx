import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-xl dark:bg-black/10 dark:border-white/5',
        className
      )}
      {...props}
    />
  );
}
