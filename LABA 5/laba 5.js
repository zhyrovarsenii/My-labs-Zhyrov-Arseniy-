// 1. Цикл for: Вивести всі парні числа від 1 до 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. Цикл while: Створити програму, яка зчитує число n і виводить всі числа від n до 1.
let n = 10

while (n >= 1) {
  console.log(n);
  n--;
}
// 3. Цикл do...while: Запитувати у користувача число, поки він не введе позитивне.
let number;

do {
    number = Number(prompt("Введіть позитивне число:"));
} while (number <= 0);

console.log("Ви ввели позитивне число:", number);

// 4. Цикл for...in: Вивести всі ключі та значення у заданому об&#39;єкті.
let student = {
  name: "Арсеній",
  age: 18,
  course: 3
};

for (let key in student) {
  console.log("Ключ:", key);
  console.log("Значення:", student[key]);
}
// 5. Цикл for...of: Вивести всі елементи масиву у зворотному порядку.
let arr = [10, 20, 30, 40, 50];

for (let value of arr.reverse()) {
  console.log(value);
}
console.log()
// 6. Методи масивів:
// o Використати forEach(), щоб вивести всі елементи масиву.
// o Використати map(), щоб створити новий масив квадратів чисел.
// o Використати filter(), щоб створити масив чисел більше 10.
let arrNumbers = [5, 12, 8, 20, 3, 15];

arrNumbers.forEach(function(num) {
  console.log(num);
});

let squares = arrNumbers.map(function(num) {
  return num * num;
});
console.log(squares);

let greaterThanTen = arrNumbers.filter(function(num) {
  return num > 10;
});
console.log(greaterThanTen);