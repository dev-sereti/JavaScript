// Get HTML elements

const countDisplay=document.getElementById("count");
const incrementBtn=document.getElementById("increment");
const decrementBtn=document.getElementById("decrement");
const resetBtn=document.getElementById("reset");

// Start with a value of 0.
let count=0;

// Increment
incrementBtn.addEventListener("click",()=>{
    count++;
    updateDisplay(); // update the number shown on screen
});

// Decrement.
decrementBtn.addEventListener("click",()=>{
    count--; //When "-" is clicked → decrease the count by 1
    updateDisplay();
});

//When "Reset" is clicked → return count to 0
resetBtn,addEventListener("click",()=>{
    count=0;
    updateDisplay();
});

// This function updates the displayed number in the browser
function updateDisplay(){
    countDisplay.textContent=count; // change the text inside <div id="count">

}