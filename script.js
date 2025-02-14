//----------------------------------------------- Home JAVASCRIPT------------------------------------------------------
// Typewriting Effect
const roles = ["FullStack Developer", "Performance Tester"];
const dynamicText = document.getElementById("dynamic-text");
const profilePic = document.getElementById("profile-pic");
const details = document.getElementById("details");

let roleIndex = 0;

function typeWriter() {
  dynamicText.textContent = ""; // Clear the text
  let charIndex = 0;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      dynamicText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        dynamicText.textContent = ""; // Clear text before the next role
        roleIndex = (roleIndex + 1) % roles.length;

        if (roleIndex === 0) {
          // Display profile picture and details after the first cycle
          profilePic.style.display = "block";
          profilePic.style.opacity = "1";
          setTimeout(() => {
            details.style.display = "block";
          }, 1000);
        }
        typeWriter(); // Start typing the next role
      }, 500);
    }
  }

  type();
}

typeWriter();

