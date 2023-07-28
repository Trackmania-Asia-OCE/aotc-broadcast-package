import clsx from 'clsx';
import * as React from 'react';
import * as styles from './card-heading.css';

export interface CardHeadingProps {
  title: string;
  subtitle?: string;
}

export function CardHeading({ title, subtitle }: CardHeadingProps) {
  return (
    <div className="space-y-4">
      <h1 className={clsx('font-brand font-bold uppercase text-white', styles.title)}>{title}</h1>
      {subtitle ? (
        <p className={clsx('font-brand font-bold uppercase text-white', styles.subtitle)}>
          {subtitle}
        </p>
      ) : undefined}
    </div>
  );
}
