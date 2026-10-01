// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// Booking form

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (checkout <= checkin) {
        formMessage.textContent = "Please select a valid check-out date.";
        return;
    }

    formMessage.textContent =
        `Thanks ${name}! Your booking request has been received.`;

    bookingForm.reset();
});


// Set today's date as minimum check-in date

const today = new Date().toISOString().split("T")[0];

document.getElementById("checkin").min = today;
document.getElementById("checkout").min = today;


// Update checkout minimum date when check-in changes

document.getElementById("checkin").addEventListener("change", function() {
    document.getElementById("checkout").min = this.value;
});
