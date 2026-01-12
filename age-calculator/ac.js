const btnEl=document.querySelector(".btn");
const inputEl=document.getElementById("input");
const ele=document.getElementById("output");

btnEl.addEventListener("click",()=>{
    const currentDate= new Date();
    const year=currentDate.getFullYear();
    const inputYear=new Date(inputEl.value).getFullYear();
    ele.append(" ",year-inputYear);
    
    
    
    
    
});
