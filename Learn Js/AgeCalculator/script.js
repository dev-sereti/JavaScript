document.getElementById("calculateBtn").addEventListener("click"),()=>{
  const birthDate=document.getElementById("birthdate").value;
  const result=document.getElementById("result");

  if(!birthDate){
    result.textContent="Please select your date of birth";
    return;
  }
  const birth=new Date(birthDate);
  const today=new Date();

  let years=today.getFullYear()-birth.getFullYear();
  let months=today.getMonth()-birth.getMonth();

  result.innerHTML=`You are ${years} years  and ${months} months old`;

});