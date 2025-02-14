// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulating form submission (you can connect this to a backend)
    formMessage.textContent = "Thank you for reaching out, we will get back to you soon!";
    formMessage.style.color = "#00bcd4"; // Cyan color for success message

    // Clear form after submission
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}
