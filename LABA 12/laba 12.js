// Варіант 9
// Реалізувати функцію, що приймає перший параметр, а решту об&#39;єднує у рядок.
function combine(first, ...rest) {
  return first + ' ' + rest.join(' ');
}

console.log(combine("Привіт", "як", "твої", "справи?")); 
