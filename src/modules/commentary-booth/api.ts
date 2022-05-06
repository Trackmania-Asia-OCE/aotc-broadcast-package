import fetch from 'isomorphic-unfetch';

export async function getSingleCommentators() {
  return fetch('/api/commentary-booth/single').then(res => res.json());
}

export async function getDoubleCommentators() {
  return fetch('/api/commentary-booth/double').then(res => res.json());
}
