// 1.Створіть змінні різних типів (string, number, boolean, undefined, null). Виведіть їхні значення та типи у консоль.
let str = "Hello, world!";
let num = 42
let isTrue = true;
let notDefined;
let emptyValue = null;

console.log(`str: ${str} | type: ${typeof str}`);
console.log(`num: ${num} | type: ${typeof num}`);
console.log(`isTrue: ${isTrue} | type: ${typeof isTrue}`);
console.log(`notDefined: ${notDefined} | type: ${typeof notDefined}`);
console.log(`emptyValue: ${emptyValue} | type: ${typeof emptyValue}`);
console.log();

// 2. Виконайте явне перетворення:
// o Рядка на число.
// o Числа на рядок.
// o Значення до булевого типу.
let secondStr = "123";
let secondNum = 456;
let secondValue = 0;

let strToNumber = Number(secondStr);
let numToString = String(secondNum);
let valueToBoolean = Boolean(secondValue);
console.log(`strToNumber: ${strToNumber}| type: ${typeof strToNumber}`);
console.log(`numToString: ${numToString}| type: ${typeof numToString}`);
console.log(`valueToBoolean: ${valueToBoolean}| type: ${typeof valueToBoolean}`);
console.log();

// 3. Виконайте неявне перетворення в математичних виразах та під час конкатенації рядків. Продемонструйте результат у консоль.
let a = "5";
let b = 2;

console.log(`"5" - 2 = ${a - b}`);
console.log(`"5" * 2 = ${a * b}`);
console.log(`"5" / 2 = ${a / b}`);
console.log(`"5" + 2 = ${a + b}`);

console.log(`true + 1 = ${true + 1}`);
console.log(`false + 1 = ${false + 1}`);
console.log(`null + 1 = ${null + 1}`);
console.log();

// 4. Створіть функцію, яка приймає значення будь-якого типу та повертає його тип. Використайте оператор typeof.
function getType(value) {
  return typeof value;
}

console.log(getType("Hello"));
console.log(getType(123));
console.log(getType(true));
console.log();

// 5. Виконайте порівняння значень різних типів за допомогою операторів == та ===. Поясніть отримані результати.
console.log(`"5" == 5 = ${"5" == 5}`);
console.log(`"5" === 5 = ${"5" === 5}`);

console.log(`0 == false = ${0 == false}`);
console.log(`0 === false = ${0 === false}`);

console.log(`null == undefined = ${null == undefined}`);
console.log(`null === undefined = ${null === undefined}`);