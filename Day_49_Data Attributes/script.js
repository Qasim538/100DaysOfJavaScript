const btns = document.querySelectorAll(".btn")
const text = document.querySelector(".text")


btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // const filter = e.target.getAttribute("data-link");
        const filter = e.target.dataset.link;

        console.log(filter)

        if(filter == "home") {
            text.innerHTML = `<div>
                <h1>This is Home Page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deleniti!</p>
            </div>`
        } else if (filter == "about") {
            text.textContent = "About Page"
        } else {
            text.textContent = "contact Page"

        }
    })
})