// Створити список контактів, які зберігаються в LocalStorage

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function renderContacts() {
  list.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = contact.name + " - " + contact.phone;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.addEventListener("click", function () {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !phone) return;

  contacts.push({ name, phone });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  nameInput.value = "";
  phoneInput.value = "";

  renderContacts();
});

renderContacts();