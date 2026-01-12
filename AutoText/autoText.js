const containerEl=document.querySelector(".container");

const careers=["Youtuber","Web Developer","Freelancer","Indian"];
careerIndex=0;

let CharacterIndex=0;

updateText();

function updateText(){
    CharacterIndex++ 
    containerEl.innerHTML=`
<h1>I am ${careers[careerIndex].slice(0,1)==="I"? "an": "a"} ${careers[careerIndex].slice(0,CharacterIndex)}</h1>
`;

if (CharacterIndex===careers[careerIndex].length){
    careerIndex++
    CharacterIndex=0;
}

if (careerIndex===careers.length){
    careerIndex=0;
}
setTimeout(updateText,400);
}