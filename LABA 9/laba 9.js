// Варіант 9 Напишіть стрілкову функцію, яка приймає масив чисел і повертає тільки ті, що більші за 10.
const filterGreaterThan10 = (numbers) => numbers.filter(num => num > 10);

const arr = [5, 12, 8, 20, 3];
const result = filterGreaterThan10(arr);
console.log(result);