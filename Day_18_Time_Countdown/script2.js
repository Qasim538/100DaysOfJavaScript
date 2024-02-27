// time countdown

let time = 200 // time in minutes
let promoTime = time * 60;


let counting = document.getElementById("countdown");

function startCountdown() {
    let promoTimer = setInterval(() => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.innerHTML = "Promotion has ended";
        } else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 / 24);
            const hrs = Math.floor(promoTime / 3600) % 24;
            const mins = Math.floor(promoTime / 60) % 60;
            const secs = Math.floor(promoTime % 60);

            counting.innerHTML = `Time: ${format(hrs)}Hrs : ${format(mins)}Mins : ${format(secs)}Secs`
        }
    }, 1000)
}

function format(t) {
    return t < 10 ? `0${t}` : t
}

startCountdown()