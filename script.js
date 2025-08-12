const textArray = ["Frontend Developer", "DevOps Engineer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 400; // speed for typing
const deletingSpeed = 80; // speed for deleting
const delayBetweenWords = 1000; // 2 seconds delay

const typingElement = document.getElementById("typing-text");

function type() {
  if (!isDeleting) {
    // Typing forward
    currentText = textArray[textIndex].substring(0, charIndex + 1);
    charIndex++;
    typingElement.textContent = currentText;

    if (currentText.length === textArray[textIndex].length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords); // wait before deleting
      return;
    }
  } else {
    // Deleting backwards
    currentText = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    typingElement.textContent = currentText;

    if (currentText.length === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length; // move to next text
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
