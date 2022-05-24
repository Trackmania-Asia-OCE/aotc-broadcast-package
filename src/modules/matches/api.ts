import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import { APILocales } from '~/utils/types';

export async function getNextMatch(locale: APILocales = 'en-US') {
  const url = queryString.stringifyUrl({
    url: '/api/matches/next-match',
    query: {
      locale,
    },
  });
  return fetch(url).then(res => res.json());
}

export async function getCurrentMatch(locale: APILocales = 'en-US') {
  const url = queryString.stringifyUrl({
    url: '/api/in-game',
    query: {
      locale,
    },
  });
  return fetch(url).then(res => res.json());
}

export async function getLatestResults(locale: APILocales = 'en-US') {
  const url = queryString.stringifyUrl({
    url: '/api/matches/latest-result',
    query: {
      locale,
    },
  });
  return fetch(url).then(res => res.json());
}
