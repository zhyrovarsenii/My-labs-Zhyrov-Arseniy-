// Доадткове завдання. Напишіть функцію sortNumbers, яка приймає масив чисел і callback-функцію для визначення порядку сортування.
const sortNumbers = (numbers, compareFn) => {
  return numbers.slice().sort(compareFn);
};


const arr = [5, 12, 8, 20, 3];

const ascending = sortNumbers(arr, (a, b) => a - b);
console.log(ascending);

const descending = sortNumbers(arr, (a, b) => b - a);
console.log(descending);