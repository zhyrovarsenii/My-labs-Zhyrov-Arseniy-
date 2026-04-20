// При зміні checkbox — змінювати стиль іншого елемента

const checkbox = document.getElementById("checkbox");
const title = document.getElementById("title");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    title.style.color = "green";
    title.style.fontSize = "40px";
  } else {
    title.style.color = "black";
    title.style.fontSize = "20px";
  }
});