import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import { APILocales } from '~/utils/types';

export async function getCountdownTimer(locale: APILocales = 'en-US') {
  const url = queryString.stringifyUrl({
    url: '/api/intermission',
    query: {
      locale,
    },
  });
  return fetch(url).then(res => res.json());
}
