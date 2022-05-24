import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { DEFAULT_REFRESH_TIMEOUT } from '~/utils/constants';
import { APILocales } from '~/utils/types';
import { getCurrentMatch, getLatestResults, getNextMatch } from './api';

export interface PlayerDetails {
  country: string;
  name: string;
}

export interface LatestResultsDetails extends PlayerDetails {
  result: string;
}

export function useNextMatch(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<PlayerDetails[]>(
    'next-matches',
    () => getNextMatch(router.locale as APILocales),
    { refetchInterval }
  );

  return query;
}

export function useCurrentMatch(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<{ current: string }>(
    'current-match',
    () => getCurrentMatch(router.locale as APILocales),
    {
      refetchInterval,
    }
  );

  return query;
}

export function useLatestResults(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<LatestResultsDetails[]>(
    'latest-results',
    () => getLatestResults(router.locale as APILocales),
    {
      refetchInterval,
    }
  );

  return query;
}
