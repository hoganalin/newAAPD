import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './js/2.js'
// import './js/9.js'
// import './js/10.js'

// console.log('Hello world');

// const flipCard = document.querySelector('.flip-card');

// flipCard.addEventListener('touchend', (e) => {
//   e.stopPropagation();
//   flipCard.classList.toggle('flipped');
// });

// flipCard.addEventListener('mouseup', (e) => {
//   e.stopPropagation();
//   flipCard.classList.toggle('flipped');
// });

//水平翻頁
const flipCard = document.querySelector('.flip-card');

let startX = 0;
let startY = 0;
let tracking = false;

// 滑動判斷參數
const SWIPE_THRESHOLD = 30; // 需要超過的水平距離(像素)才算滑動

// 指針按下（觸控或滑鼠按下）
flipCard.addEventListener('pointerdown', (e) => {
  tracking = true;
  startX = e.clientX;
  startY = e.clientY;
});

// 途中移動：不需要做事，但若要加效果可用
flipCard.addEventListener('pointermove', (e) => {
  if (!tracking) return;
  // 這裡故意不 preventDefault，垂直方向交給瀏覽器滾動
});

// 放開時判斷是否為「水平滑動」
flipCard.addEventListener('pointerup', (e) => {
  if (!tracking) return;
  tracking = false;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  // 只有「水平優勢」且超過門檻，才翻頁
  if (absDx > SWIPE_THRESHOLD && absDx > absDy) {
    flipCard.classList.toggle('flipped');
  }
});

// 取消或離開也要結束追蹤，避免卡住
flipCard.addEventListener('pointercancel', () => (tracking = false));
flipCard.addEventListener('pointerleave', () => (tracking = false));


//2 開個話題
const topicInput = document.getElementById("topic-input");
const topicCount = document.getElementById("topic-count");

topicInput.addEventListener("input", () => {
  const len = topicInput.value.length;
  topicCount.textContent = `${len}/15`;
});
