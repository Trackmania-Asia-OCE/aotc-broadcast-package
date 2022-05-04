import { useQuery } from 'react-query';
import { getNextMatch } from './api';

export interface PlayerDetails {
  country: string;
  name: string;
}

export function useNextMatch(refetchInterval = 10000) {
  const query = useQuery<PlayerDetails[]>('next-matches', getNextMatch, { refetchInterval });

  return query;
}
