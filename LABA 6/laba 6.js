// Написати функцію, яка приймає масив чисел і повертає новий масив, де всі значення збільшені на 10.
function addTen(arr) {
  return arr.map(function(num) {
    return num + 10;
  });
}

let numbers = [1, 5, 10];
let result = addTen(numbers);

console.log(result);