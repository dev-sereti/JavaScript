// =================== 1. Get HTML Elements ===================
// Get references to the count display and buttons by their IDs
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// =================== 2. Initialize Count ===================
// Start with a value of 0 (the state of our counter)
let count = 0;

// =================== 3. Event Listeners ===================

// When "+" is clicked → increase the count by 1
incrementBtn.addEventListener("click", () => {
  count++; // same as count = count + 1
  updateDisplay(); // update the number shown on screen
});

// When "-" is clicked → decrease the count by 1
decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

// When "Reset" is clicked → return count to 0
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// =================== 4. Update Function ===================
// This function updates the displayed number in the browser
function updateDisplay() {
  countDisplay.textContent = count; // change the text inside <div id="count">
}
