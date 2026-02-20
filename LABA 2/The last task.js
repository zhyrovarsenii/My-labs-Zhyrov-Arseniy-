// Оголоси змінну message та запиши в неї повідомлення про купівлю, рядок у форматі: "You picked <ім'я товару>, price per item is <ціна товару> credits". Де <ім'я товару> і <ціна товару> це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

const productName = "Computer";
let pricePerItem = 45000;

let message1 = "You picked " + productName + ", price per item is " + pricePerItem + " credits";
console.log(message1);
let message2 = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message2);