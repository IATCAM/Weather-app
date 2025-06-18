
const srch = document.getElementById('search');
const btn = document.getElementById('btn');
const locationn = document.getElementById('location');
let iconn = document.getElementById('icon');
const temp = document.getElementById('temp');
const wet = document.getElementById('wet');
const wind = document.getElementById('wind');

// const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiKey = "985bcb6dd1380aca1bf46a74e22824f7";

async function getWeather(){
    let weatherResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${srch.value}&appid=${apiKey}`);
    let jsonResult = await weatherResult.json();

    console.log(jsonResult);
    info(jsonResult);
}

function info(data){
    const loc = data["name"];
    // const desc = data["weather"][0]["description"];
    const tempp = data["main"]["temp"];
    const windd = data["wind"]["speed"];
    const wett = data["main"]["humidity"];
    const main = data["weather"][0]["main"];

    locationn.innerHTML = loc;
    iconn.innerHTML = getIcon(main);
    temp.innerHTML = convertCc(tempp) + " &#176;C";
    wind.innerHTML = "Wind speed: " + windd + " km/h"
    wet.innerHTML = "humidity: " + wett + "%";

    const iconName = getIcon(main);
    iconn.innerHTML = `<img src='images/${iconName}'></img>`;
}


function convertCc(value){
    // return(value - 273).toFixed(0);
    return Math.round(value - 273.15);
}


function getIcon(main){
    let iconn;
    switch(main){
        case 'Clear':
            iconn = `${main}.png`;
            break;

        case 'Clouds':
            iconn = `${main}.png`;
            break;

        case 'Rain':
            iconn = `${main}.png`;
            break;

        case 'Thunderstorm':
            iconn = `${main}.png`;
            break;

        case 'Haze':
            iconn = `${main}.png`;
            break;

        case 'Snow':
            iconn = `${main}.png`;
            break;
    }

    return iconn;
}



btn.addEventListener('click' , function(e){
    getWeather();

    srch.value = "";
    e.preventDefault();
});