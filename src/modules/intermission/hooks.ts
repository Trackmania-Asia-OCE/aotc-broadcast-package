import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { DEFAULT_REFRESH_TIMEOUT } from '~/utils/constants';
import { APILocales } from '~/utils/types';
import { getCountdownTimer } from './api';

export interface CountdownTimerData {
  minutes: string;
  seconds: string;
}

export function useCountdownTimer(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<CountdownTimerData>(
    'intermission',
    () => getCountdownTimer(router.locale as APILocales),
    {
      refetchInterval,
    }
  );

  return query;
}
