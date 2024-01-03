const search = document.querySelector("input")
const form = document.querySelector("form")
const searchResult = document.querySelector(".results")
const errorMsg = document.querySelector(".alert")
const line = document.querySelector("hr")


const apiURL =   "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const searchValue = search.value;

    if (searchValue === "") {
        errorMessage("Search field can not be blank.")
    } else {
        getresult(searchValue)
    }
})

function errorMessage(msg) {
    errorMsg.style.display = "block"
    line.style.display = "block"
    errorMsg.textContent = msg;
}

async function getresult(searchValue) {
    const response = await fetch(apiURL + searchValue)
    const results = await response.json();

    console.log(results)

    if (results.query.search.length == 0) {
        return errorMessage("invalid search, please enter another valid search term.")

    } else {
        displayResults(results)
    }
}

// display results //

function displayResults(results) {
    line.style.display = "block"
    let output = "";

    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
        output += `
        <div class="result p-2">
        <a href="" target="_blank" class="h3 fw-bold" rel="noopner">Love</a>
        <br>
        <a href="" target="_blank" class="fs-5 text-success" rel="noopner">https://en.wikipedia.org/</a>
        <p class="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati reiciendis numquam beatae expedita autem dignissimos magnam tempora dicta repellendus!
        </p>
    </div>
        `
    })

}