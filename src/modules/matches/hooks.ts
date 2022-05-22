import { useQuery } from 'react-query';
import { DEFAULT_REFRESH_TIMEOUT } from '~/utils/constants';
import { getCurrentMatch, getLatestResults, getNextMatch } from './api';

export interface PlayerDetails {
  country: string;
  name: string;
}

export interface LatestResultsDetails extends PlayerDetails {
  result: string;
}

export function useNextMatch(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const query = useQuery<PlayerDetails[]>('next-matches', getNextMatch, { refetchInterval });

  return query;
}

export function useCurrentMatch(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const query = useQuery<{ current: string }>('current-match', getCurrentMatch, {
    refetchInterval,
  });

  return query;
}

export function useLatestResults(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const query = useQuery<LatestResultsDetails[]>('latest-results', getLatestResults, {
    refetchInterval,
  });

  return query;
}
