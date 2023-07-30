import clsx from 'clsx';
import * as React from 'react';
import * as styles from './info-item-card.css';

export interface InfoItemCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ width: number; height: number }>;
}

export function InfoItemCard({ title, subtitle, icon }: InfoItemCardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.iconWrapper}>
        {icon ? React.createElement(icon, { width: 50, height: 50 }) : null}
      </div>
      <div className={clsx(styles.content, 'space-y-2')}>
        <p className={clsx('font-bold font-brand text-white uppercase', styles.title)}>{title}</p>
        {subtitle ? (
          <p className={clsx('font-medium font-brand text-white uppercase', styles.subtitle)}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
