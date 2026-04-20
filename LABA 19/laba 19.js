const arr = ["a", "b", "a", "c", "b", "a"];

const result = arr.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});

console.log(result);