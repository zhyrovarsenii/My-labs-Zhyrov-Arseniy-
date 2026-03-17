// Створити клас "Калькулятор" з методами додати(), відняти(), помножити().

class Calculator {
  constructor(value = 0) {
    this.result = value;
  }

  add(number) {
    this.result += number;
    return this.result;
  }

  subtract(number) {
    this.result -= number;
    return this.result;
  }

  multiply(number) {
    this.result *= number;
    return this.result;
  }
}

let calc = new Calculator(10);
console.log(calc.add(5));
console.log(calc.subtract(3));
console.log(calc.multiply(2));