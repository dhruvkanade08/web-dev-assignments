// Get the contact form
const contactForm = document.getElementById("contactForm");


// Add submit event
contactForm.addEventListener("submit", function(event) {

    // Prevent actual form submission
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    // Check if fields are empty
    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "red";

        return;
    }


    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";

        return;
    }


    // Success message
    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    formMessage.style.color = "green";


    // Clear form
    contactForm.reset();

});
