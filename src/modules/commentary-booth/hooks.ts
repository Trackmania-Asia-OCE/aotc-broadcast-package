import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { APILocales } from '~/utils/types';
import { getDoubleCommentators, getSingleCommentators } from './api';

export interface CommentatorDetails {
  country: string;
  name: string;
}

export function useSingleCommentator(refetchInterval = 10000) {
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

export function useDoubleCommentators(refetchInterval = 10000) {
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
