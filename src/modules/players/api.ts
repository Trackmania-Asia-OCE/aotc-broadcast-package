import fetch from 'isomorphic-unfetch';

export async function getPlayerCard() {
  return fetch('/api/players/player-card').then(res => res.json());
}
