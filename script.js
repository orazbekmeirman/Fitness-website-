// Show an alert when user clicks "Join Now"
function joinNow() {
    alert("Thank you for your interest! Sign up now to start your fitness journey!");
}

// Handle form submission
const templateParams = {
    name: name,
    email: email,
    message: message
};

emailjs.init("K1a7dXIveHeNJrabL");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Send email using EmailJS
        emailjs.send("service_zbrkqzo", "template_jx3b8md", {
            name: name,
            email: email,
            message: message,
        }).then(function(response) {
            alert("Message Sent Successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    } else {
        alert('Please fill out all fields.');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
