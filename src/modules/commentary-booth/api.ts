import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import { APILocales } from '~/utils/types';

export async function getSingleCommentators(locale: APILocales = 'en-US') {
  const url = queryString.stringifyUrl({
    url: '/api/commentary-booth/single',
    query: {
      locale,
    },
  });
  return fetch(url).then(res => res.json());
}

export async function getDoubleCommentators(locale: APILocales = 'en-US') {
  const url = queryString.stringifyUrl({
    url: '/api/commentary-booth/double',
    query: {
      locale,
    },
  });
  return fetch(url).then(res => res.json());
}
