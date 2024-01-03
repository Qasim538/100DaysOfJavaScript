// https://api.themoviedb.org/3/movie/550?api_key=8baa717c3f5744514e1d4d2b2fa02839

const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8baa717c3f5744514e1d4d2b2fa02839&page=1";
// const ApiKey = "8baa717c3f5744514e1d4d2b2fa02839"

const searchAPI =  "https://api.themoviedb.org/3/search/movie?&api_key=8baa717c3f5744514e1d4d2b2fa02839&query=";

const imgPATH = "https://image.tmdb.org/t/p/w1280";

let moviesDiv = document.querySelector(".movies")
let form = document.querySelector("form")
let search = document.querySelector(".search")


getMovies(apiURL)
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results)

    displayMovies(data.results)
}

// displayMovies 

function displayMovies(movies) {
    moviesDiv.innerHTML = "";

    movies.forEach((movie) => {
        const div = document.createElement("div")
        div.classList.add("movie");
        div.innerHTML = `
        <img src="${imgPATH + movie.poster_path}" alt="" />

        <div class="details">
          <h2 class="title">${movie.title}</h2>
          <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
          <p class="overview">
            ${movie.overview}
          </p>
        </div>
        `;
        moviesDiv.appendChild(div)
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    moviesDiv.innerHTML = ""
    const inputVal = search.value;

    if(inputVal) {
        getMovies(searchAPI + inputVal)
        input.value = ""

    }
})