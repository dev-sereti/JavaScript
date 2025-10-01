document.getElementById("calculateBtn").addEventListener("click"),()=>{
    const birthDate=document.getElementById("birthDate").value;
    const result=document.getElementById("result");

    if(!birthDate){
        result.textContent="Please enter your age";
        return;
    }
    const birthDateObj=new Date(birthDate);
    const today=Date();
    

}