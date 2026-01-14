const apikey="81f45d689f383d98f9f5451106140278";
const weatherData=document.getElementById("weather-data");
const inputEl=document.getElementById("input");
const formEl=document.querySelector("form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();    
    const cityValue=inputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)

        if (!response.ok){
            throw new Error("Network response not okay!..")
        }

        const data= await response.json();
        const temp=Math.round(data.main.temp)
        const description=data.weather[0].description
        const icon= data.weather[0].icon
        const details=[
            `Feels like: ${Math.round(data.main.feels_like)}`, 
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ];
        weatherData.querySelector(".icon").innerHTML=`<img src="https://openweathermap.org/img/wn/${icon}.png" alt="sun icon">`;
        weatherData.querySelector(".temperature").textContent=`${temp}°C`;
        weatherData.querySelector(".description").textContent=`${description}`;
        weatherData.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`).join("");
    } catch (error) {
        weatherData.querySelector(".icon").innerHTML="";
        weatherData.querySelector(".temperature").textContent="";
        weatherData.querySelector(".description").textContent="AN error happened, please Re-enter the name!..";
        weatherData.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`).join("");
    }
}