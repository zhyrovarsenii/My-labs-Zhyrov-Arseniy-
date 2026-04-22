// Реалізувати налаштування шрифтів або розміру тексту та зберігати у LocalStorage.\

const fontSizeSelect = document.getElementById("fontSize");
const text = document.getElementById("text");

const savedSize = localStorage.getItem("fontSize");

if (savedSize) {
  fontSizeSelect.value = savedSize;
  text.style.fontSize = savedSize + "px";
}

fontSizeSelect.addEventListener("change", function () {
  const size = this.value;

  text.style.fontSize = size + "px";
  localStorage.setItem("fontSize", size);
});