import { baseUrl, gameID } from './api.js';

const scoreList = document.querySelector('.recent-score-list');

export default async () => {
  try {
    const response = await fetch(`${baseUrl}games/${gameID}/scores/`);
    const data = await response.json();
    scoreList.innerHTML = '';
    data.result.forEach((display) => {
      scoreList.innerHTML += `
        <li class="score-li">
          <span class="user">${display.user} </span>
          <span class="score">${display.score}</span>
        </li>
      `;
    });
  } catch (error) {
    throw new Error('Data could not be fetched');
  }
};