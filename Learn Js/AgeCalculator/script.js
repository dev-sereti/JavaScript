document.getElementById("calculateBtn").addEventListener("click", () => {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdate) {
    result.textContent = "Please select your birth date!";
    return;
  }

  const birthDateObj = new Date(birthdate);
  const today = new Date();

  let years = today.getFullYear() - birthDateObj.getFullYear();
  let months = today.getMonth() - birthDateObj.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
});
