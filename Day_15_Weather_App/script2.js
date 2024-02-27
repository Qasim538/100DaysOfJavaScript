const api = {
    key: "9d5ce4f132f295b39bc460165daba215",
    base: "https://api.openweathermap.org/data/2.5/weather"
}

const search = document.querySelector(".search")
const btn = document.querySelector(".btn")

btn.addEventListener("click", getInput)




function getInput(e) {
    e.preventDefault()

    if (e.type === "click") {
        getData(search.value)
        // console.log(getData);
    }

}



function getData(city) {
    fetch(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
    .then(response => {
        return response.json()
    })
    .then(displayData)
}

function displayData(response) {
    if (response.cod === "404") {
        const error = document.querySelector(".error")
        error.innerText = "Please enter a valid city name."

        const city = document.querySelector(".city");
        city.innerText = `???`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);
        // date.innerText = today;

        const temp = document.querySelector('.temp')
        temp.innerHTML = `Temperature: ??? <span> °C </span> `;

        const weather = document.querySelector('.weather')
        weather.innerHTML = `Weather: ???`;

        const tempRange = document.querySelector('.temp-range');
        tempRange.innerText = `Tempreture range: ??? °C`;

    } else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);
        // date.innerText = today;

        const temp = document.querySelector('.temp')
        temp.innerHTML = `Temperature: ${Math.round(response.main.temp)} <span> °C </span> `;

        const weather = document.querySelector('.weather')
        weather.innerHTML = `Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector('.temp-range');
        tempRange.innerText = `Tempreture range: ${Math.round(response.main.temp_max)} °C`;

        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png"

        search.value = ""
    }
}



function dateFunction(d) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;

}



