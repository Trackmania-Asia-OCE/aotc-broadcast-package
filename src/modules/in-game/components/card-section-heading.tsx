import clsx from 'clsx';
import * as React from 'react';
import { ArrowIcon } from '~/components/icons/arrow-icon';
import * as styles from './card-section-heading.css';

export interface CardSectionHeadingProps {
  title: string;
}

export function CardSectionHeading({ title }: CardSectionHeadingProps) {
  return (
    <div className="flex items-center space-x-2">
      <ArrowIcon className="text-white" height={10} />
      <span className={clsx('font-medium font-brand text-white uppercase', styles.title)}>
        {title}
      </span>
    </div>
  );
}
