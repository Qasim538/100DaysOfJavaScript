const countTo = "1 Jan 2026";

const c = setInterval(() => {
    const endDate = new Date(countTo)
    const currentDate = new Date();

    //count total time between endDatea and Current Date

    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const countDown = document.getElementById("countdown")
    countDown.textContent = `${format(days)}Days ${format(hours)}Hrs : ${format(minutes)}Mins : ${format(seconds)}s`

    if (totalSeconds <= 0) {
        clearInterval(c)
        countDown.textContent = "Happy New Year!"
    }

}, 1000)

// how to make it doubl digit

function format(t) {
    return t < 10 ? `0${t}` : t;
}

