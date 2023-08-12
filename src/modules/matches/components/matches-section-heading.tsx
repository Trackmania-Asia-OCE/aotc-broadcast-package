import clsx from 'clsx';
import * as React from 'react';
import { ArrowIcon } from '~/components/icons';
import * as styles from './matches-section-heading.css';

export interface MatchesSectionHeadingProps {
  title: string;
}

export const MatchesSectionHeading = React.forwardRef<HTMLDivElement, MatchesSectionHeadingProps>(
  function MatchesSectionHeading({ title }, ref) {
    return (
      <div ref={ref} className={clsx('flex items-center space-x-2', styles.root)}>
        <ArrowIcon className="text-white" height={12} />
        <span className={clsx('font-medium font-brand text-white uppercase', styles.title)}>
          {title}
        </span>
      </div>
    );
  }
);
