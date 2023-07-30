import clsx from 'clsx';
import * as React from 'react';
import * as styles from './info-badge.css';

export interface InfoBadgeProps {
  variant?: 'active' | 'inactive';
}

export function InfoBadge({ variant, children }: React.PropsWithChildren<InfoBadgeProps>) {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center h-9 px-6 font-bold font-brand uppercase',
        styles.text,
        variant === 'active' ? 'bg-white text-black' : 'bg-black text-white/25'
      )}
    >
      {children}
    </span>
  );
}
