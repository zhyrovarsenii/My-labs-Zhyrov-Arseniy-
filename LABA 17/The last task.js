// Перетворити масив рядків у масив об'єктів із властивістю length
const strings = ["apple", "banana", "kiwi"];

const result = strings.map(str => ({
  value: str,
  length: str.length
}));

console.log(result);