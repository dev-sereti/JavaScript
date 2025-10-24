// Get clock HTML element.
const clock = document.getElementById("clock");

function updateClock(){

  // Get date,hours, minutes and seconds.
  const now = new Date();

  hours = now.getHours;
  minutes=now.getMinutes;
  seconds=now.getSeconds;

  // Add 0 to hrs, min and sec if needed.

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;


  // Format time 

  const timeString = `${hours}:${minutes}:${seconds}`;
  // Print timeString to clock HTML element
  clock.textContent=timeString;

}
