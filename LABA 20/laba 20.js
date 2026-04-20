// Написати клас із методом, який використовує this.

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Привіт, мене звати " + this.name);
  }
}

const p1 = new Person("Арсеній");
p1.sayHello();