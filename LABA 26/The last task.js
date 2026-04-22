// При подвійному кліку (dblclick) змінювати текст елемента

const text = document.getElementById("text");

text.addEventListener("dblclick", function() {
    text.textContent = "Текст змінено!";
});