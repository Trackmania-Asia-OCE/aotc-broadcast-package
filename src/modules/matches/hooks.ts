import { useQuery } from 'react-query';
import { getNextMatch } from './api';

export function useNextMatch(refetchInterval = 10000) {
  const query = useQuery('next-matches', getNextMatch, { refetchInterval });

  return query;
}
