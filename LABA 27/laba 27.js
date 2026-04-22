// Додати пасивний обробник скролу для оптимізації продуктивності.
const info = document.getElementById("info");

window.addEventListener("scroll", function () {
  info.textContent = "Scroll Y: " + window.scrollY;
}, { passive: true });