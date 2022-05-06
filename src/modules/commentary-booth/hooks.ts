import { useQuery } from 'react-query';
import { getDoubleCommentators, getSingleCommentators } from './api';

export interface CommentatorDetails {
  country: string;
  name: string;
}

export function useSingleCommentator(refetchInterval = 10000) {
  const query = useQuery<CommentatorDetails>('commentary-booth-single', getSingleCommentators, {
    refetchInterval,
  });

  return query;
}

export function useDoubleCommentators(refetchInterval = 10000) {
  const query = useQuery<CommentatorDetails[]>('commentary-booth-double', getDoubleCommentators, {
    refetchInterval,
  });

  return query;
}
