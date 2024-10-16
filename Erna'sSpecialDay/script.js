// Set the date we're counting down to
const countDownDate = new Date();
countDownDate.setHours(24, 0, 0, 0); // Set to 12:00 AM of the next day

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = 
        `${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy Birthday, Erna!";
    }
}, 1000);

document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('secretMessage').style.display = 'block';
    this.style.display = 'none'; // Optionally hide the button after it's clicked
});