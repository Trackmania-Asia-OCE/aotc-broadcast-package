import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { DEFAULT_REFRESH_TIMEOUT } from '~/utils/constants';
import { APILocales } from '~/utils/types';
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

export function usePlayerCard(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<PlayerCardDetails>(
    'next-matches',
    () => getPlayerCard(router.locale as APILocales),
    {
      refetchInterval,
    }
  );

  return query;
}
