// Витягти доменні імена з масиву email-адрес.

const emails = [
  "ivan@gmail.com",
  "oleg@yahoo.com",
  "anna@ukr.net"
];

const domains = emails.map(email => email.split("@")[1]);

console.log(domains);