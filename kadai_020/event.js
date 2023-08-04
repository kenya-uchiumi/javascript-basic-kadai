const textChange = "ボタンをクリックしました";

document.getElementById("btn").addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("text").textContent = textChange;
  }, 2000);
});
