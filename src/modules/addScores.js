import { baseUrl, gameID } from './api.js';

export default async (user, score) => {
  const response = await fetch(`${baseUrl}games/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score: Number(score),
    }),
  });

  const result = await response.json();

  return result;
};