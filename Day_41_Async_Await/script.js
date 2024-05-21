const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const url = "https://official-joke-api.appspot.com/random_joke";

btn.addEventListener("click", getJoke);

function getJoke() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      joke.innerHTML = `${data.setup}<br>${data.punchline}`;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}
