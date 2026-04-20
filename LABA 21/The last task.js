// Реалізувати клас Тварина, створити від нього кілька екземплярів. Додати метод говорити() для класу Тварина, який буде перевизначатися у підкласах.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " видає звук");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name + " каже: Гав!");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name + " каже: Мяу!");
  }
}

const animal = new Animal("Тварина");
const dog = new Dog("Бадді");
const cat = new Cat("Місті");

animal.speak();
dog.speak();
cat.speak();