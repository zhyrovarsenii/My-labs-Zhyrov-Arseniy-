// 1. Створіть три змінні, використовуючи var, let, і const. Присвойте їм відповідні значення.
var userAge = 18;
let userName = "Арсеній";
const isStudent = true;

// 2. Визначте тип кожної змінної за допомогою оператора typeof і виведіть результат у консоль.
console.log(typeof userAge);
console.log(typeof userName);
console.log(typeof isStudent);

// 3. Створіть об&#39;єкт із полями: ім&#39;я, вік, статус студента (булевий тип).
let person = {
    name: "Арсеній Жиров Костянтинович",
    age: 20,
    isStudent: true
};

// 4. Додайте до об&#39;єкта нове поле &quot;університет&quot; і виведіть об&#39;єкт у консоль.
person.university = "КРАУС";
console.log(person);

// 5. Виконайте зміну типу змінної, що була оголошена за допомогою let. Наприклад, змініть її значення з числа на рядок.
let newLetVariable = 100;
newLetVariable = "Привеіт сесвіт"

// 6. Спробуйте змінити значення змінної, оголошеної через const. Перевірте, що станеться.
const newConstVariable = 100
newLetVariable = "Привеіт сесвіт"
console.log(newConstVariable)