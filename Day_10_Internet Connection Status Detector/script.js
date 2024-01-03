// Variables

const image = document.getElementById("image")
const statusDisplay = document.getElementById("status")
const bgColor = document.getElementById("main")

function setColor() {
    bgColor.classList.add("online")
}

async function connectionStatus() {

    try{
        const fetchResult = await fetch('https://www.wikinews.org/portal/wikinews.org/assets/img/Wikinews-logo-tiles_2x.png?time=' + (new Date()).getTime());
        image.src = "./images/online.avif"
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error){
        // console.log(error)
        statusDisplay.textContent = "OOPS!! your internet connection is down";
        image.src = "./images/offline.jpg"
        setColor();
        bgColor.classList.remove("online")
    }
}


//Monitor the connection

setInterval(async () => {
    const result = await connectionStatus();
    if(result) {
        statusDisplay.textContent = "Conenction looks good, You are online";
        setColor();
    }
}, 3000)


// Check connection when the page loads

window.addEventListener("load", async (event) => {
    if (connectionStatus()) {
        statusDisplay.textContent = "You are online"
    } else {  statusDisplay.textContent = "You are offline"

    }
})