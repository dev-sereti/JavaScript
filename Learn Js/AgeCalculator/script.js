document.getElementById("calculateBtn").addEventListener("click",()=>{
  const birthDate=document.getElementById("birthdate").value;
  const age =document.getElementById("result");

  if(!birthDate){
    age.textContent="Select your birth date";
  }
  const birth=new Date(birthDate);
  const months=new Date();

});