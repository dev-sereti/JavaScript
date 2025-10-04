const textArea=document.getElementById("message");
const counter=document.getElementById("counter");
const maxLength=400;


// textArea input addEventListener

textArea.addEventListener("input",()=>{
  let currentCounter=textArea.ariaValueMax.maxLength;
  counter=`${currentCounter}/${maxLength}`;


});