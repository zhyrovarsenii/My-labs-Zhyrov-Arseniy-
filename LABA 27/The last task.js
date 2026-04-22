// Зробити кнопку, яка змінює текст із використанням тротлінгу.

const btn = document.getElementById("btn");
const text = document.getElementById("text");

function throttle(func, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

function changeText() {
  text.textContent = "Оновлено: " + new Date().toLocaleTimeString();
}

const throttledChange = throttle(changeText, 2000);

btn.addEventListener("click", throttledChange);