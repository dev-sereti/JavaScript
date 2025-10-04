const textArea=document.getElementById("message");
const counter=document.getElementById("counter");
const maxLength=400;


// textArea input addEventListener

textArea.addEventListener("input",()=>{
  let currentLength=textArea.value.maxLength;
  counter.textContent=`${currentLength}/${maxLength}`;

  if(currentLength>=maxLength){
    textArea.classlist.add("limit");
    counter.classList.add("limit");
    textArea.value=textArea.value.substring(0,maxLength);
  }else{
    textArea.classList.remove("limit");
    counter.classList.remove("limit");
  }


});