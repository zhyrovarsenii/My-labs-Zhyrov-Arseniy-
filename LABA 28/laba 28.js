// Зберегти вибір мови інтерфейсу у LocalStorage
const langSelect = document.getElementById("lang");
const title = document.getElementById("title");

const savedLang = localStorage.getItem("language");

if (savedLang) {
  langSelect.value = savedLang;
  setLanguage(savedLang);
}

langSelect.addEventListener("change", function () {
  localStorage.setItem("language", this.value);
  setLanguage(this.value);
});

function setLanguage(lang) {
  if (lang === "uk") {
    title.textContent = "Вибір мови";
  } else if (lang === "en") {
    title.textContent = "Language selection";
  } else if (lang === "pl") {
    title.textContent = "Wybór języka";
  }
}