const textArea=document.getElementById("message");
const counter =document.getElementById("counter");
const maxLenght=300;

textArea.addEventListener("input",()=>{
    let currentLength=textArea.ariaValueMax.length;
    counter.textContent=`${currentLength}/ ${maxLenght}`;

});
