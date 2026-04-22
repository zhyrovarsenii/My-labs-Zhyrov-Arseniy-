// Отримати і змінити значення атрибуту посилання (href).

const link = document.getElementById("myLink");
const btn = document.getElementById("btn");

console.log(link.getAttribute("href"));

btn.addEventListener("click", function() {
    link.setAttribute("href", "https://google.com");
    link.textContent = "Перейти на Google";
});