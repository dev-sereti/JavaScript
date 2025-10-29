// Get form and input references
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

//  Listen for form submission 
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default page reload
  validateForm();
});

//  Validation Function 
function validateForm() {
  // Get input values
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Clear all old error messages
  clearErrors();

  //  Name Validation 
  if (nameValue === "") {
    showError(nameInput, "Name is required");
  }

  //  Email Validation using RegEx 
  else if (!isValidEmail(emailValue)) {
    showError(emailInput, "Enter a valid email address");
  }

  //  Password Validation 
  else if (!isStrongPassword(passwordValue)) {
    showError(passwordInput, 
      "Password must be at least 8 characters long, contain a number, uppercase letter, and special character"
    );
  }

  //  If all fields are valid 
  else {
    alert("✅ Registration Successful!");
    form.reset(); // Clear form fields
  }
}

//  Function: Show error message 
function showError(input, message) {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error-message");
  errorDisplay.textContent = message;
  input.style.borderColor = "red";
}

//  Function: Clear previous errors 
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  const inputs = document.querySelectorAll("input");

  errorMessages.forEach(msg => msg.textContent = "");
  inputs.forEach(input => input.style.borderColor = "#ddd");
}

//  Function: Validate Email with RegEx 
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//  Function: Validate Password Strength 
function isStrongPassword(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordPattern.test(password);
}
