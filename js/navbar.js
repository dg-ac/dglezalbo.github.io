const navbar = document.querySelector(".navbar-container");
const menuContainer = document.querySelector(".menu-container");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 130) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
    menuContainer.style.top = `-200px`;
  }
});

const menuButton = document.querySelector(".menu-button");
const openMenu = function () {
  menuContainer.style.display = `flex`;
  menuContainer.style.top = `0px`;
};
const closeMenu = function () {
  menuContainer.style.display = `none`;
  menuContainer.style.top = `-145px`;
};

menuButton.addEventListener("click", openMenu);

window.addEventListener("scroll", closeMenu);
