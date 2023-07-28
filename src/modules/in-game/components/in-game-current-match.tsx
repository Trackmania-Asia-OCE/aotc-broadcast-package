import * as React from 'react';
import clsx from 'clsx';
import { ArrowIcon } from '~/components/icons';
import * as styles from './in-game-current-match.css';

export interface AOTC2023CurrentMatchProps {
  currentMatch: string;
}

export function AOTC2023CurrentMatch({ currentMatch }: AOTC2023CurrentMatchProps) {
  return (
    <div className={styles.root}>
      <div className="space-y-2">
        <h1 className={clsx('font-bold font-brand text-white uppercase', styles.overlayTitle)}>
          {currentMatch}
        </h1>
        <div className="flex items-center space-x-1">
          <ArrowIcon className="text-white" height={10} />
          <p
            className={clsx('font-medium font-brand text-white uppercase', styles.overlaySubtitle)}
          >
            AOTC 2023 // In-Game
          </p>
        </div>
      </div>
    </div>
  );
}
