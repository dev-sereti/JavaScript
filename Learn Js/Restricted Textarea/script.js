const textArea=document.getElementById("message");
const counter =document.getElementById("counter");
const maxLenght=300;

textArea.addEventListener("input",()=>{
    let currentLength=textArea.ariaValueMax.length;
    counter.textContent=`${currentLength}/ ${maxLenght}`;

    if(currentLength>=maxLenght){
        textArea.classList.add("limit");
        counter.classList.add("limit");
        textArea.value=textArea.value.substring(0,maxLenght);

    }else{
        textArea.classList.remove("limit");
        counter.classList.remove("limit");
    }

});
