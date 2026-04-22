// Отримати усі дочірні елементів певного контейнера

const container = document.getElementById("container");

const children = container.children;

console.log(children);

for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
}