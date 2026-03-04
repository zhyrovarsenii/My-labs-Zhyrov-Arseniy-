//Напиши функцію isPositive, яка приймає число і повертає true, якщо воно додатнє, і false, якщо від'ємне або нуль.
function isPositive(number) {
  return number > 0;
}

console.log(isPositive(5));
console.log(isPositive(-3));
console.log(isPositive(0));