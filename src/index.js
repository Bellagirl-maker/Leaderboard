import './index.css';
import scores from './modules/scores.js';
import addScore from './modules/addScores.js';

scores();

const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', () => scores());

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score-input').value;
  addScore(name, score);
  form.reset();
});
