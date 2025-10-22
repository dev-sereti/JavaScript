// Get HTML elements.

const counter=document.getElementById("count");
const incrementBtn=document.getElementById("increment");
const decrementBtn=document.getElementById("decrement");
const resetBtn=document.getElementById("reset");

//Set initial count to 0
let count=0;

//Increment button clicked.
incrementBtn.addEventListener("click",()=>{
    count++; // Count increases by 1.
    updateDisplay();
    
});

//Decrement button clicked.
decrementBtn.addEventListener("click",()=>{
    if(count>0){
        count--;
        updateDisplay();
    }else{
        alert("Decrement limit reached....")
    }
});
// Function to update dispaly.
function updateDisplay(){
    counter.textContent=count; //Update the element content.
}

