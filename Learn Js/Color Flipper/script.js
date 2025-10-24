// Array of possible background colors
const colors = ["#FF5733", "#33FFBD", "#3EC8F6", "#F3FF33", "#FF33EC", "#8D33FF"];

// Get references to HTML elements
const btn = document.getElementById("flipBtn");
const colorCode = document.getElementById("colorCode");

// Add event listener to button

btn.addEventListener("click",()=>{
    
     // Generate random index
     const randomIndex = Math.floor(Math.random() * colors.length);

});
