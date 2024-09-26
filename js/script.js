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

  // Swipe functionality
  let startX = 0;
  let endX = 0;

  const carousel = document.getElementById("carousel");
  const items = carousel.children;
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 12; // Width of item + margin
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  carousel.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (event) => {
    endX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    if (startX > endX + 50) {
      // Swipe left
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    } else if (startX < endX - 50) {
      // Swipe right
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }
  });

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
});

// draggable thingy

const els = document.querySelectorAll(".mydiv");
els.forEach((name) => {
  dragElement(name);
});

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const originalTransform = elmnt.style.transform; // Store original transform

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    // Increase size while dragging
    elmnt.style.transform = originalTransform + " scale(1.1)";
    elmnt.style.transition = "none"; // Disable transition
    elmnt.style.zIndex = zIndexCounter++; // Set zIndex and increment
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Get the bounding rectangle of the macbook
    const macbook = document.querySelector(".macbook");
    const macbookRect = macbook.getBoundingClientRect();

    // Calculate new position
    const newTop = elmnt.offsetTop - pos2;
    const newLeft = elmnt.offsetLeft - pos1;

    // Check if the new position is within the bounds of the macbook
    if (
      newTop >= 0 &&
      newTop + elmnt.offsetHeight <= macbookRect.height &&
      newLeft >= 0 &&
      newLeft + elmnt.offsetWidth <= macbookRect.width
    ) {
      elmnt.style.top = newTop + "px";
      elmnt.style.left = newLeft + "px";
    }
  }

  function closeDragElement() {
    // Reset size when dragging ends
    elmnt.style.transform =
      "scale(1) rotate(" + (Math.random() * 80 - 40) + "deg)"; // Restore original transform with random rotation
    elmnt.style.transition = "0.2s ease-in-out"; // Enable transition

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let zIndexCounter = 10; // Initialize zIndex counter
