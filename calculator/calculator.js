const buttonsEl = document.querySelectorAll("button");
const inputFeildEl = document.getElementById("result")

for (let i=0; i<buttonsEl.length; i++ ){
  buttonsEl[i].addEventListener("click",()=>{
    const buttonValue=buttonsEl[i].textContent;
    if (buttonValue==="C"){
        clearResult();
    }else if(buttonValue==="="){
        calculateResult();
    }else{
        appendValue(buttonValue);
    }
    });
 }
function clearResult(){
    inputFeildEl.value="";
}
function calculateResult(){
    inputFeildEl.value=eval(inputFeildEl.value);
}

function appendValue(buttonValue){
    inputFeildEl.value+=buttonValue;
}

