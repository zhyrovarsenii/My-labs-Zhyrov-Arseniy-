const user = {
    name: "Arsenii",
    age: 18,
    city: "Kryvyi Rih",
    country: "Ukraine"
};

const { name, age, ...rest } = user;

console.log(name);
console.log(age);
console.log(rest);