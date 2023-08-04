const textChange = "ボタンをクリックしました";

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("text").textContent = textChange;
});
