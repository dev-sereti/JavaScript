//Get HTML Elements.
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Variable to store current expressions 

let currentInput = "";

//  Add Event Listeners to All Buttons

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value = button.dataset.value; // Get the button's data-value

         // Clear button logic
         if(button.id === "clear"){
            currentInput="";
            display.textContent="0";
            return;
         }

    });
});