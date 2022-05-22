import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { DEFAULT_REFRESH_TIMEOUT } from '~/utils/constants';
import { APILocales } from '~/utils/types';
import { getDoubleCommentators, getSingleCommentators } from './api';

export interface CommentatorDetails {
  country: string;
  name: string;
}

export function useSingleCommentator(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<CommentatorDetails>(
    'commentary-booth-single',
    () => getSingleCommentators(router.locale as APILocales),
    {
      refetchInterval,
    }
  );

  return query;
}

export function useDoubleCommentators(refetchInterval = DEFAULT_REFRESH_TIMEOUT) {
  const router = useRouter();
  const query = useQuery<CommentatorDetails[]>(
    'commentary-booth-double',
    () => getDoubleCommentators(router.locale as APILocales),
    {
      refetchInterval,
    }
  );

  return query;
}
