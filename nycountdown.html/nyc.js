const dayEl= document.getElementById("day");
const hourEl= document.getElementById("Hour");
const minuteEl= document.getElementById("Minute");
const secondEl= document.getElementById("second");
const NYD= new Date("jan 1,2027 00:00:00").getTime();
updateCountdown();
function updateCountdown(){
    const now = new Date().getTime();
    const gap=NYD-now
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;
    const daysRem=Math.floor(gap/day);
    const hourRem=Math.floor((gap%day)/hour);
    const minuteRem =Math.floor((gap%hour)/minute);
    const secondRem = Math.floor((gap%minute)/second);
    dayEl.innerText=daysRem;
    hourEl.innerText=hourRem;
    minuteEl.innerText=minuteRem;
    secondEl.innerText=secondRem;
    setTimeout(updateCountdown, 1000)
}