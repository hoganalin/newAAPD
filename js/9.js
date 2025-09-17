document.addEventListener('DOMContentLoaded', () => {
  const textarea    = document.getElementById('topic');
  const charCount   = document.getElementById('charCount');
  const charCounter = document.querySelector('.char-counter-inside');
  const submitBtn   = document.querySelector('button');

  if (!textarea || !charCount) return;

  // 初始化
  if (submitBtn) submitBtn.classList.add('submit-btn');
  const MAX = 100;
  let isDone = false;

  function setBtnEnabled(enabled) {
    if (!submitBtn) return;
    submitBtn.disabled = !enabled;
    submitBtn.classList.toggle('disabled', !enabled);
  }

  function setCounterState(state) {
    if (!charCounter) return;
    charCounter.classList.remove('error', 'done');
    if (state) charCounter.classList.add(state); // 'error' | 'done'
  }

  function setTextareaState(state) {
    textarea.classList.remove('correct', 'error', 'done', 'disabled');
    if (state) textarea.classList.add(state);
  }

  function refresh() {
    const len = textarea.value.length;
    charCount.textContent = len;

    // 狀態邏輯
    if (len > MAX) {
      setTextareaState('error');
      setCounterState('error');     // >100：紅色計數
      setBtnEnabled(false);         // 按鈕禁用（淡粉色）
      isDone = false;
    } else if (len === MAX && isDone) {
      // 只有「按 Enter」後才維持 done 視覺
      setTextareaState('done');
      setCounterState('done');      // 100：藍色計數
      setBtnEnabled(true);
    } else if (len > 0) {
      setTextareaState('correct');  // 1–99
      setCounterState(null);
      setBtnEnabled(true);
      isDone = false;               // 重新輸入後，取消 done
    } else {
      setTextareaState(null);       // default
      setCounterState(null);
      setBtnEnabled(true);
      isDone = false;
    }
  }

  // 初始
  refresh();

  // 監聽輸入
  textarea.addEventListener('input', refresh);

  // Enter 觸發 done（剛好 100）
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && textarea.value.length === MAX) {
      isDone = true;   // 標記完成
      refresh();       // 套用 done 視覺
      // 若需要 Enter 時阻止換行，可解開下一行：
      // e.preventDefault();
    }
  });

  // press 視覺只交給 CSS（:focus/:active），不改邏輯
});
