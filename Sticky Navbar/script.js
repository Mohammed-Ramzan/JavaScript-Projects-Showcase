let menu = document.getElementById("menu");
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 138) {
    menu.classList.add("sticky");
  }
  else {
    menu.classList.remove("sticky");
  }
});