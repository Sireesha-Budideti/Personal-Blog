const dynamicText = document.getElementById('dynamic-text');
const profilePic = document.getElementById('profile-pic');
const details = document.getElementById('details');
const roles = ['Full Stack Developer', 'Performance Tester', 'Tech Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let iterationComplete = false;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    dynamicText.textContent =  roles[roleIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    dynamicText.textContent =  roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;

    if (!iterationComplete) {
      iterationComplete = true;
      showProfileAndDetails();
    }
    
    setTimeout(typeEffect, 200);
  }
}

function showProfileAndDetails() {
  profilePic.style.opacity = 1;
  setTimeout(() => {
    details.style.opacity = 1;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', typeEffect);
