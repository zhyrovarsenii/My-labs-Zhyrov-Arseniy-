const startBtn = document.getElementById("start");
const status = document.getElementById("status");

startBtn.addEventListener("click", function () {
  status.textContent = "Будильник запущено...";

  setTimeout(function () {
    alert("10 секунд пройшло!");
    status.textContent = "Будильник спрацював";
  }, 10 * 1000);
});