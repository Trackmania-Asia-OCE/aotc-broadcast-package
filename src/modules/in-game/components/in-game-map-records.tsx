import * as React from 'react';
import { trpc } from '~/utils/trpc';
import { StopwatchIcon } from '~/components/icons';
import { formatTime } from '~/utils/format-time';
import * as styles from './in-game-map-records.css';

export interface AOTC2023MapRecordsProps {
  currentMapUID?: string;
}

export function AOTC2023MapRecords({ currentMapUID }: AOTC2023MapRecordsProps) {
  const { data } = trpc.maps.getMapRecordByUID.useQuery({ uid: currentMapUID });

  console.log(data);

  return (
    <div className={styles.root}>
      <div className={styles.iconWrapper}>
        <StopwatchIcon width={50} height={50} />
      </div>
      <div>
        {formatTime(data?.record?.time ?? 0)} {data?.record?.player.name ?? '-'}
      </div>
    </div>
  );
}
