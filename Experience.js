document.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.experience-card');
  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});
