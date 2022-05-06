import fetch from 'isomorphic-unfetch';

export async function getNextMatch() {
  return fetch('/api/matches/next-match').then(res => res.json());
}

export async function getCurrentMatch() {
  return fetch('/api/in-game').then(res => res.json());
}

export async function getLatestResults() {
  return fetch('/api/matches/latest-result').then(res => res.json());
}
