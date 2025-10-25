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

         // Equals (=) button logic
         if(button.id === "equals"){
            try{

                //Evaluate the math expression safely using eval
                const result = eval(currentInput);
                display.textContent = result; // Show result
                currentInput =  result.toString(); // Save result for next operation
            }catch (error){
                display.textContent="Error";
                currentInput="";

            }
            return;
         }
         currentInput += value; //Add value to the input
         display.textContent =  currentInput; // Update the screen

    });
});