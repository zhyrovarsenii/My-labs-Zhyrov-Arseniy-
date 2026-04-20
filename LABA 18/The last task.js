// Відфільтрувати масив слів, залишивши лише ті, що починаються на певну літеру
const words = ["apple", "banana", "apricot", "cherry", "avocado"];

const letter = "a";

const result = words.filter(word => word.startsWith(letter));

console.log(result);