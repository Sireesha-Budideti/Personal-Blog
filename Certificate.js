function showCertificate(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const certificateImage = document.getElementById('certificateImage');
  
    certificateImage.src = imageSrc;
    modal.style.display = 'block';
  }
  
  function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
  }
  
  // Scroll Animation for Showing Certificate Cards
  document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.certificate-card');
    const triggerBottom = window.innerHeight * 0.8;
  
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
  
      if (cardTop < triggerBottom) {
        card.classList.add('show');
      }
    });
  });
  