// Створити обробник натискання клавіші (keydown) у текстовому полі.

const input = document.getElementById("input");

input.addEventListener("keydown", function(event) {
    console.log("Натиснута клавіша:", event.key);
});