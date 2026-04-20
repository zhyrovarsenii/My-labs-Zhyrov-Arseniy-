// Змінювати розмір шрифту тексту при натисканні.

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  text.style.fontSize = "30px";
});