// Додати можливість видалити елемент списку при натисканні на нього

const list = document.getElementById("list");

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});