
 async function getData(place, countryName) {
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=b601376d3ad448cd944357501f9449ac&location=${place}`

        const response = await fetch(url)
        const data = await response.json()
        // console.log(data);
        const time = data.datetime

        // const dateTimeObject = new Date(data.datetime);
        // if you want to change the time formate
        // const formattedDateTime = dateTimeObject.toLocaleString();
        // const formattedDateTime = dateTimeObject.toLocaleTimeString() + " " + dateTimeObject.toLocaleDateString();

        const timeEl = document.getElementById("time")
        // timeEl.innerText = `${countryName} time = ${formattedDateTime} ${data.timezone_abbreviation}`;
        timeEl.innerText = `${countryName} time = ${time} ${data.timezone_abbreviation}`;
        timeEl.style.opacity = 1;

        setTimeout(() => {
            timeEl.style.opacity = 0;
        },3000)
    }

    document.querySelectorAll(".allPaths").forEach(e=> {
        e.addEventListener("mouseover", function() {
            window.onmousemove = function(j) {
                x = j.clientX
                y = j.clientY

                document.getElementById("name").style.top = y-20+"px"
                document.getElementById("name").style.left = x+10+"px"
            }

            e.style.fill = "grey"
            document.getElementById("name").style.opacity = 1
            document.getElementById("namep").innerText = e.id
        })

        e.addEventListener("mouseleave", function() {
            e.style.fill = "#ececec"
            document.getElementById("name").style.opacity = 0
        })

        e.addEventListener("click", function() {
            getData(e.id, e.getAttribute("name"))
        })
    })

