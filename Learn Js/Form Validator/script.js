//Get form and input references
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Listen for form submission

form.addEventListener("submit",(e)=>{
    e.preventDefault(); // prevent default page load.
    validateForm();

});

//Validation Function

function validateForm(){
    // Get input values
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    // Clear all old error messages
    clearErrors();

    //Name Validation
    if(nameValue === ""){
        showError(nameInput, " Name is required");
    }

    //Email Validation using RegEx
    else if(!isValidEmail(emailValue)){
        showError(emailInput, " Email is required");
    }

    //Password Validation
    else if(!isStrongPassword){
        showError(passwordInput, " Create a strong password");
    }

    // If all fields are valid

    else{
        alert("Registration Successful!");
        form.reset();
    }

}

// Function: Show error message
function showError(input,message){
    const formControl = input.parentElement;
    const errorDisplay =formControl.querrySelector(".error-message");
    errorDisplay.textContent = message;
    input.style.borderColor = "red";

}

//Function: Clear previous errors

function clearErrors(){
    const errorMessages = document.querySelectorAll(".error-message");
    const inputs = document.querySelectorAll("input");

    errorMessages.forEach(msg => msg.textContent = "" );
    inputs.forEach(input => input.style.borderColor = "#ddd");

}

// Function: Validate Email with RegEx

function isValidEmail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

