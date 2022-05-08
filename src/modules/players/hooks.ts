import { useQuery } from 'react-query';
import { getPlayerCard } from './api';

export interface PlayerCardDetails {
  username: string;
  realName: string;
  nationality: string;
  age: number;
  bestResults: string;
  input: string;
  camera: number;
  style: string;
}

export function usePlayerCard(refetchInterval = 10000) {
  const query = useQuery<PlayerCardDetails>('next-matches', getPlayerCard, { refetchInterval });

  return query;
}
