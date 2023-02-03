const menuBar = document.querySelector("nav #menu-bar");
const menuToggle = document.querySelector(".menu-toggle input");

menuToggle.addEventListener("click", function () {
  menuBar.classList.toggle("slide");
});
