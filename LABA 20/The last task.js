// Створити об'єкт із вкладеним методом та перевірити this

const obj = {
  name: "Олег",
  data: {
    name: "Іван",
    showName: function () {
      console.log(this.name);
    }
  }
};

obj.data.showName();