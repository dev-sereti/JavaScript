// Get reference to the clock element
const clock=document.getElementById("clock");

//Function to update the clock

function updateClock(){
    const now =new Date(); // Get current date and time

    // Extract hours, minutes, seconds
    let hours=now.getHours;
    let minutes=now.getMinutes;
    let seconds=now.getSeconds;

    // Add leading zeros if needed
    hours= hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


     // Format time string
     const timeString = `${hours}:${minutes}:${seconds}`;
}