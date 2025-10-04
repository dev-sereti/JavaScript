const textArea=document.getElementById("message");
const counter=document.getElementById("counter");
const maxLength=400;


// textArea input addEventListener

textArea.addEventListener("input",()=>{
  let currentCounter=textArea.ariaValueMax.maxLength;
  counter=`${currentCounter}/${maxLength}`;

  if(currentCounter>=maxLength){
    textArea.classlist.add("limit");
    counter.classList.add("limit");
    textArea.value=textArea.value.substring(0,maxLength);
  }else{
    
  }


});