window.onload = function() {
    // Ensure elements exist before adding event listeners
    const service1 = document.getElementById("service1");
    const service2 = document.getElementById("service2");
    const panel1 = document.getElementById("panel1");
    const panel2 = document.getElementById("panel2");

    if (service1 && panel1) {
        service1.addEventListener("mouseenter", function() {
            panel1.scrollTop = 0;
        });
    }

    if (service2 && panel2) {
        service2.addEventListener("mouseenter", function() {
            panel2.scrollTop = 0;
        });
    }
};
