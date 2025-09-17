// const msgsucess =document.querySelector(".post-success-msg");
// gsap.fromTo(msgsucess, 
//     // 起點狀態
//     {
//         opacity: 1,
//         x: 0,
//         // backgroundColor: "pink"
//     }, 
//     // 終點狀態
//     {
//         opacity: 0,
//         // x: 500,
//         delay: 1, 
//         duration: 1,
//         // backgroundColor: "yellow"
//     }
// );
// let tl = gsap.timeline({delay:1});
//   tl.to(msgsucess, {  opacity: 1, duration: 1})   // 透明 → 實心
//     .to(msgsucess, { opacity: 0, duration: 1 });  // 實心 → 透明


// 第六頁
document.addEventListener("DOMContentLoaded", () => {
  // 檢查 URL 是否包含 ?post=success 參數
  const urlParams = new URLSearchParams(window.location.search);
  const postStatus = urlParams.get('post');

  // 如果參數存在且為 success，才顯示 Toast
  if (postStatus === 'success') {
    const toastEl = document.getElementById('postSuccessMsg');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
});