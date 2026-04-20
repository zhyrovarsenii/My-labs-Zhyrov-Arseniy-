const img = document.getElementById("image");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  img.setAttribute("src", "https://via.placeholder.com/300");
  img.setAttribute("alt", "New Image");
});