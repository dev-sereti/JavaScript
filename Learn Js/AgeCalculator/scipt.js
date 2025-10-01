document.getElementById("calculateBtn").addEventListener("click"),()=>{
    const birthDate=document.getElementById("birthDate").value;
    const result=document.getElementById("result");

    if(!birthDate){
        result.textContent="Please enter your age";
        return;
    }
    const birthDateObj=new Date(birthDate);
    const today=Date();

    let years=today.getFullYear()-birthDateObj.getFullYear();
    let months=today.getMonth()-birthDateObj.getMonth();

    if(months<0){
        years--;
        months+=12;

    }
    