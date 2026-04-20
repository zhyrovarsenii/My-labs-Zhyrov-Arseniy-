// Реалізувати форму, після відправлення якої з’являється новий список зі введеним текстом.

const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const text = input.value;

  const li = document.createElement("li");
  li.textContent = text;

  list.appendChild(li);

  input.value = "";
});