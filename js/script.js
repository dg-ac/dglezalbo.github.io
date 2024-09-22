document.addEventListener("DOMContentLoaded", function () {
  const emailText = document.getElementById("email");
  const copiedText = document.getElementById("copied-text");

  emailText.addEventListener("click", function () {
    // Copy email to clipboard
    const tempInput = document.createElement("input");
    tempInput.value = emailText.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show "Copied!" text and fade out after 0.5 seconds
    copiedText.style.opacity = 1;
    copiedText.style.top = "-60px";
    setTimeout(function () {
      copiedText.style.opacity = 0;
      copiedText.style.top = "-54px";
    }, 500);
  });
});

// carousel

const carousel = document.getElementById("carousel");
const items = carousel.children;
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 12; // Width of item + margin
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    // Allow navigation until the last item
    currentIndex++;
    updateCarousel();
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Initialize carousel
updateCarousel();
