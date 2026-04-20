// Видалити дублікати з масиву за допомогою filter.
const arr = [1, 2, 2, 3, 4, 4, 5];

const unique = arr.filter((item, index, array) => {
  return array.indexOf(item) === index;
});

console.log(unique);