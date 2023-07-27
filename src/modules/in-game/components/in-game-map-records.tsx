import * as React from 'react';
import * as styles from './in-game-map-records.css';

export interface AOTC2023MapRecordsProps {
  currentMapUID?: string;
}

export function AOTC2023MapRecords({ currentMapUID }: AOTC2023MapRecordsProps) {
  return (
    <div className={styles.root}>
      <div className={styles.iconWrapper} />
      <div>AOTC2023MapRecords</div>
    </div>
  );
}
