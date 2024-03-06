const scrollBtn = document.querySelector(".top")
const rootElement = document.documentElement;

document.addEventListener("scroll", showBtn)
scrollBtn.addEventListener("click", scrollTop)

function showBtn() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.3) {
        scrollBtn.classList.add("show-btn")
    } else {
        scrollBtn.classList.remove("show-btn")
    }
}

function scrollTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}