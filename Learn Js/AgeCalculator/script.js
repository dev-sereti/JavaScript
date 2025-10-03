document.getElementById("calculateBtn").addEventListener("click",()=>{
  const birthDate=document.getElementById("birthdate").value;
  const age =document.getElementById("result");

  if(!birthDate){
    age.textContent="Select your birth date";
  }
  const birth=new Date(birthDate);
  const today=new Date();

  let yourAge=today.getFullYear()-birth.getFullYear();
  let months=today.getMonth()-birth.getMonth();

});