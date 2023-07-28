import clsx from 'clsx';
import * as React from 'react';
import { trpc } from '~/utils/trpc';
import { StopwatchIcon } from '~/components/icons';
import { formatTime } from '~/utils/format-time';
import * as styles from './in-game-map-records.css';

export interface AOTC2023MapRecordsProps {
  currentMapUID?: string;
}

export function AOTC2023MapRecords({ currentMapUID }: AOTC2023MapRecordsProps) {
  const { data, isFetching, isError } = trpc.maps.getMapRecordByUID.useQuery(
    {
      uid: currentMapUID,
    },
    { refetchInterval: 10000 }
  );

  const renderTime = () => {
    if ((!data && isFetching) || isError) {
      return 0;
    }

    if (data?.record?.time) {
      return data.record.time;
    }

    return 0;
  };

  const renderUsername = () => {
    if (!data && isFetching) {
      return 'Fetching records...';
    }

    if (isError) {
      return '-';
    }

    if (data?.record?.player.name) {
      return data.record.player.name;
    }

    return '-';
  };

  return (
    <div className={styles.root}>
      <div className={styles.iconWrapper}>
        <StopwatchIcon width={50} height={50} />
      </div>
      <div className="flex flex-col justify-center space-y-2 pl-[10px]">
        <p className={clsx('font-bold font-brand text-white uppercase', styles.title)}>
          {formatTime(renderTime())}
        </p>
        <p className={clsx('font-medium font-brand text-white uppercase', styles.subtitle)}>
          {renderUsername()}
        </p>
      </div>
    </div>
  );
}
