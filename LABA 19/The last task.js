// Підрахувати кількість парних та непарних чисел у масиві
const arr = [1, 2, 3, 4, 5, 6];

const result = arr.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even++;
  } else {
    acc.odd++;
  }
  return acc;
}, { even: 0, odd: 0 });

console.log(result);