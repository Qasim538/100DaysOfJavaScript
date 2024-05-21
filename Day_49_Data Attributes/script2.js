const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filter = e.target.dataset.link;

    // console.log(filter);

    if (filter == "home") {
      text.innerText = "This is Home Page";
    } else if (filter == "about") {
      text.innerHTML = `
            <div>
                <h1> This is about use page</h1>
                <p>lorem ipus</p>
            </div>
    `;
    } else  {
        text.innerText = "This is the contact form to fill"
    }
  });
});
