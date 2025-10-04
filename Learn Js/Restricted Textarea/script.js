const textArea=document.getElementById("message");
const counter=document.getElementById("counter");
const maxLength=400;

textArea.addEventListener("input",()=>{
  let currentLength=textArea.value.maxLength;

  counter= `${currentLength} / ${maxLength}`;

  if(currentLength>=maxLength){
    textArea.classList.add("limit");
    counter.classList.add("limit");

  }else{
    textArea.classList.remove("limit");
    counter.classList.remove("limit");
  }

});