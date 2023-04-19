import './index.css';

import scores from './scores.js';

const scoreList = document.querySelector('.recent-score-list');

scores.forEach((score) => {
  scoreList.innerHTML += `
    <li class="li_score">
      <span class="user">${score.name} </span>
      <span class="score">${score.score}</span>
    </li>
  `;
});