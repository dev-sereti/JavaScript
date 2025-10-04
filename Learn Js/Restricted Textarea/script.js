const textArea=document.getElementById("message");
const counter=document.getElementById("counter");
const maxLength=400;


// textArea input addEventListener

textArea.addEventListener("input",()=>{
  let currentLength =textArea.value.length;
  counter.textContent=`${currentLength}/${maxLength}`;

  if(currentLength>=maxLength){
    textArea.classList.add("limit");
    counter.classList.add("limit");
    textArea.value=textArea.value.substring(0,maxLength);

  }

});