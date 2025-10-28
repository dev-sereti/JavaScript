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




}