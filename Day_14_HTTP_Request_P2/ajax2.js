const btn = document.querySelector(".get-quotes")

btn.addEventListener('click', getQuotes)

const number =  document.getElementById('number')

function getQuotes(e) {
    e.preventDefault()

    const https = new XMLHttpRequest();

    https.open("GET", "https://type.fit/api/quotes", true)

    https.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);

            const response = shuffle(JSON.parse(this.responseText));

            let output = "";
            for (let i = 0; i < response.length; i++) {
                if ( i == number.value) 
                output += `
                    <li>
                    Quote: ${response[i].text}
                    </li>
                    <li>
                    Author: ${response[i].author}
                    </li>
                    <hr>
                `
            }
            document.querySelector(".quotes").innerHTML = output;
        }

    }

    https.send();

}


function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;


    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI)

        CI--

        tempValue = quotes[CI]
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue
    }

    return quotes;
}