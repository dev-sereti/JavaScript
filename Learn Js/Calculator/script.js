// Get HTML Elements
const display=document.getElementById("display");
const buttons=document.querySelectorAll(".btn");

// This variable stores the current expression
let currentInput="";

// Add Event Listeners to All Buttons
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value=button.dataset.value; // Get the button's data-value

        // Clear button logic

        if(button.id==="clear"){
            currentInput="";  // Reset everything
            display.textContent="0"
            return;
        }
        // Equals button logic

        if(button.id==="equals"){

            //Evaluate the math expression safely using eval()
            try{
                const result=eval(currentInput);
                display.textContent=result;
                currentInput=result.toString();

            }catch (error) {
                display.textContent="Error"; // Show error if invalid input
                currentInput="";
            }
            return;
        }
        currentInput+=value; // Add value to the input
        display.textContent=currentInput; //Update the screen

    });
});