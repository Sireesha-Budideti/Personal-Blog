document.addEventListener("DOMContentLoaded", function () {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  function handleScroll() {
    const aboutCards = document.querySelectorAll("#about .about-card"); // Target only About section
    aboutCards.forEach(card => {
      if (isElementInViewport(card)) {
        card.classList.remove("visible");
        setTimeout(() => {
          card.classList.add("visible");
        }, 50);
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});
