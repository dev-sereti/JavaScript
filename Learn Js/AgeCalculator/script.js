document.getElementById("calculateBtn").addEventListener("click"),()=>{
  const birthDate=document.getElementById("birthdate").value;
  const result=document.getElementById("result");

  if(!birthDate){
    result.textContent="Please select your date of birth";
    return;
  }
  const birth=new Date(birthDate);
  const month=new Date();

});