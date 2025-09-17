import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

const flipCard = document.querySelector('.flip-card');

flipCard.addEventListener('touchend', (e) => {
  e.stopPropagation();
  flipCard.classList.toggle('flipped');
});

flipCard.addEventListener('mouseup', (e) => {
  e.stopPropagation();
  flipCard.classList.toggle('flipped');
});



//2 開個話題
const topicInput = document.getElementById("topic-input");
const topicCount = document.getElementById("topic-count");

topicInput.addEventListener("input", () => {
  const len = topicInput.value.length;
  topicCount.textContent = `${len}/15`;
});
