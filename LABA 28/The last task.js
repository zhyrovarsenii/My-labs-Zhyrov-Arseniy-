// Використати SessionStorage для збереження позиції скролу сторінки

window.addEventListener("load", function () {
  const savedPosition = sessionStorage.getItem("scrollPosition");

  if (savedPosition !== null) {
    window.scrollTo(0, parseInt(savedPosition));
  }
});


window.addEventListener("scroll", function () {
  sessionStorage.setItem("scrollPosition", window.scrollY);
}, { passive: true });