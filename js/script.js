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
