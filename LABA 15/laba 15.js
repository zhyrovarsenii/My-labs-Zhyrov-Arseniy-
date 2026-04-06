// Варіант 9
// Написати функцію вищого порядку, яка приймає функцію як аргумент і виконує її.
function square(x) {
    return x * x;
}

const result = applyOperation(square, 5);
console.log(result);