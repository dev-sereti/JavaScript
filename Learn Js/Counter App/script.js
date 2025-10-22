// =================== 1. Get HTML Elements ===================
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// =================== 2. Initialize Count ===================
let count = 0;

// =================== 3. Event Listeners ===================

// When "+" is clicked → increase count by 1
incrementBtn.addEventListener("click", () => {
  count++;             // add 1
  updateDisplay();     // refresh the displayed value
});

// When "-" is clicked → decrease count, but not below 0
decrementBtn.addEventListener("click", () => {
  if (count > 0) {     // check condition before subtracting
    count--;           // only subtract if count is above 0
  } else {
    alert("❗ The counter cannot go below zero."); // optional message
  }
  updateDisplay();
});

// When "Reset" is clicked → return count to 0
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// =================== 4. Update Function ===================
function updateDisplay() {
  countDisplay.textContent = count;
}
