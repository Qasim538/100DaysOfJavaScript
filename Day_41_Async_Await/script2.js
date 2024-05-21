const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

const url = 'https://official-joke-api.appspot.com/random_joke';

btn.addEventListener('click', generateJoke);

async function generateJoke() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        joke.innerHTML = `${data.setup} <br> ${data.punchline}`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        joke.innerHTML = 'Failed to fetch joke. Please try again later.';
    }
}
