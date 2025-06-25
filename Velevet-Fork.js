 console.log("Welcome to Velvet Fork!");

  function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("active");
  }

  // Close menu after clicking a link
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("nav-menu").classList.remove("active");
    });
  });
