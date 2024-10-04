document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const selectedSeats = document.querySelectorAll(".seat.selected");
    const seatNumbers = Array.from(selectedSeats).map(seat => seat.getAttribute("data-seat")).join(", ");
    const fullName = document.getElementById("fullName").value;

    // Display confirmation message
    const confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.innerHTML = `Booking confirmed for ${fullName}! Selected Seats: ${seatNumbers}`;
    confirmationDiv.classList.remove("hidden");
    confirmationDiv.style.display = "block";

    // Reset the form if needed
    document.getElementById("bookingForm").reset();
    document.querySelectorAll(".seat.selected").forEach(seat => seat.classList.remove("selected")); // Reset selected seats
});

// Add click event to each seat
document.querySelectorAll(".seat").forEach(seat => {
    seat.addEventListener("click", function() {
        if (this.classList.contains("available")) {
            this.classList.toggle("selected"); // Toggle selected class
        }
    });
});
