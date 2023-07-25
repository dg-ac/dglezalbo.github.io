const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 130) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
});
