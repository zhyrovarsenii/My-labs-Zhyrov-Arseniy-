function getKeys(obj) {
    return Object.keys(obj);
}

const user = {
    name: "Arseniy",
    age: 20,
    city: "Kryvyi Rih"
};

console.log(getKeys(user));