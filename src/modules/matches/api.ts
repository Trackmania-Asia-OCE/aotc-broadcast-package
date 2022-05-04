import fetch from 'isomorphic-unfetch';

export async function getNextMatch() {
  return fetch('/api/next-match').then(res => res.json());
}
