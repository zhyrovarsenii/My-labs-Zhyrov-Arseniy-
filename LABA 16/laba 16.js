function areAllEven(arr) {
    let allEven = true;

    arr.forEach(num => {
        if (num % 2 !== 0) {
            allEven = false;
        }
    });

    return allEven;
}

console.log(areAllEven([2, 4, 6]));
console.log(areAllEven([2, 3, 6]));