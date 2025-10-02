document.getElementById("calculateBtn").addEventListener("click",()=>{
  const birthDate= document.getElementById("birthdate");
  const result=document.getElementById("result");

  if(!birthDate){
    result.textContent="Please pick your date of birth"
  }
});