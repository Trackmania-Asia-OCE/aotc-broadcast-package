import { useQuery } from 'react-query';
import { getCurrentMatch, getNextMatch } from './api';

export interface PlayerDetails {
  country: string;
  name: string;
}

export function useNextMatch(refetchInterval = 10000) {
  const query = useQuery<PlayerDetails[]>('next-matches', getNextMatch, { refetchInterval });

  return query;
}

export function useCurrentMatch(refetchInterval = 10000) {
  const query = useQuery<{ current: string }>('current-match', getCurrentMatch, {
    refetchInterval,
  });

  return query;
}
