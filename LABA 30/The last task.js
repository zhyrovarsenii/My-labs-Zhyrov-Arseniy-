const showBtn = document.getElementById("show");
const list = document.getElementById("list");

showBtn.addEventListener("click", function () {
  list.innerHTML = "";

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  let date = new Date(year, month, 1);

  while (date.getDay() !== 2) {
    date.setDate(date.getDate() + 1);
  }

  while (date.getMonth() === month) {
    const li = document.createElement("li");
    li.textContent = date.toLocaleDateString();
    list.appendChild(li);

    date.setDate(date.getDate() + 7);
  }
});