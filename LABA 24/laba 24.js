// Реалізувати обробник подій для декількох кнопок через делегування подій

const container = document.getElementById("buttons");

container.addEventListener("click", function(event) {
    const btn = event.target.closest("button");

    if (btn) {
        alert("Натиснута: " + btn.textContent);
    }
});