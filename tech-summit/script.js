// schedule tabs

function showDay(day, button) {

    // Hide both schedules
    document.getElementById("day1").classList.add("hidden");

    document.getElementById("day2").classList.add("hidden");


    // Show selected schedule
    document.getElementById(day).classList.remove("hidden");


    // Remove active class
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(tab) {

        tab.classList.remove("active");

    });


    // Activate selected tab
    button.classList.add("active");
}



// registration form

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();


        // Get values
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const ticket =
            document.getElementById("ticket").value;

        const interest =
            document.getElementById("interest").value;

        const message =
            document.getElementById("registrationMessage");


        // Empty field validation
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            ticket === "" ||
            interest === ""
        ) {

            message.textContent =
                "Please complete all fields.";

            message.style.color = "#ff6b6b";

            return;
        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color = "#ff6b6b";

            return;
        }


        // Phone validation
        const phonePattern =
            /^[0-9]{10}$/;


        if (!phonePattern.test(phone)) {

            message.textContent =
                "Please enter a valid 10-digit phone number.";

            message.style.color = "#ff6b6b";

            return;
        }


        // Successful registration
        message.textContent =
            "Registration successful! See you at Tech Summit 2026.";

        message.style.color = "#c7ff3d";


        // Clear form
        registrationForm.reset();

    }
);