// Варіант 9
// Написати Негайно викликану функцію, яка повертає випадкове число від 1 до 100.

const randomNumber = (function () {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log(randomNumber);