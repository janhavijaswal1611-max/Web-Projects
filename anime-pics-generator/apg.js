const btnEl= document.getElementById("btn");
const inputFeild=document.getElementById("inputfeild");


btnEl.addEventListener("click",async()=>{

    
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
       const  data =await response.json();
              inputFeild.value = data.setup + " " + data.punchline;

      console.log(data)
      
        }

        
     catch (error) {
        console.log("error occured try again");
    }
});