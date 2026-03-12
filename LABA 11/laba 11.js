// Варіант 9
// Створити прототип &quot;Тварина&quot; і наслідувати &quot;Собака&quot;, реалізувавши метод гавкати().
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + " їсть");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + " гавкає: Гав-гав!");
};

const dog1 = new Dog("Рекс", "Німецька вівчарка");
dog1.eat();
dog1.bark();
