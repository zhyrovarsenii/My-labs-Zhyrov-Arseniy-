// 1. Створіть змінну temperature та використайте if-else для визначення, чи є погода холодною, теплою чи спекотною.
let temperature = 25;

if (temperature < 10) {
    console.log("Погода холодна");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("Погода тепла");
} else {
    console.log("Погода спекотна");
}
console.log();

// 2. Реалізуйте програму, яка перевіряє, чи є число парним або непарним за допомогою тернарного оператора.
let number = 7;
let result = (number % 2 === 0) ? "Парне" : "Непарне";
console.log(result);
console.log();

// 3. Використовуючи switch, створіть програму, яка виводить повідомлення про день тижня за його назвою.
let day = "Середа";

switch (day) {
    case "Понеділок":
        console.log("Сьогодні Понеділок");
        break;
    case "Вівторок":
        console.log("Сьогодні Вівторок");
        break;
    case "Середа":
        console.log("Сьогодні Середа");
        break;
    case "Четвер":
        console.log("Сьогодні Четвер");
        break;
    case "П’ятниця":
        console.log("Сьогодні П’ятниця");
        break;
    case "Субота":
        console.log("Сьогодні Субота");
        break;
    case "Неділя":
        console.log("Сьогодні Неділя");
        break;
    default:
        console.log("Невідомий день");
}
console.log();

// 4. Напишіть програму, яка перевіряє введений користувачем пароль:
// o Якщо пароль дорівнює &quot;admin123&quot;, вивести &quot;Доступ дозволено&quot;.
// o Якщо пароль неправильний, вивести &quot;Доступ заборонено&quot;.
let password = prompt("Введіть пароль:");

if (password === "admin123") {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}