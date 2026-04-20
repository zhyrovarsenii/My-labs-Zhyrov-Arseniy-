// Створити клас Адміністратор, який розширює Користувач і додає метод видалитиКористувача().

class User {
  constructor(name) {
    this.name = name;
  }

  showInfo() {
    console.log("User: " + this.name);
  }
}

class Admin extends User {
  constructor(name) {
    super(name);
  }

  deleteUser(user) {
    console.log("User " + user.name + " was deleted by admin " + this.name);
  }
}

const user1 = new User("Sasha");
const admin = new Admin("Arseniy");

admin.deleteUser(user1);