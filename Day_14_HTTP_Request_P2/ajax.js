const btn = document.querySelector(".get-quotes")
btn.addEventListener("click", getQuotes)

//2nd step
const number = document.getElementById("number")

function getQuotes(e) {
    e.preventDefault();

    if (number.value.length === 0) {
            return alert ("Please Enter the Number")
    } else {

        const https = new XMLHttpRequest();

    https.open ("GET", "https://type.fit/api/quotes", true)

    https.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText)

            const response = shuffle(JSON.parse(this.responseText));
            let output = "";
            // response.forEach(function(quote) {
            //     output += `
            //         <li> 
            //             Quote: ${quote.text}
            //         </li>
            //         <li> 
            //             Author: ${quote.author}
            //         </li>
            //         <hr>
            //     `;
            // })

            for (let i = 0; i < response.length; i++) {
                if( i == number.value) {break;}
                    output += `
                      <li> 
                     Quote: ${response[i].text}
                     </li>
                     <li> 
                     Author: ${response[i].author}
                     </li>
                     <hr>
              `;
                
            }

            document.querySelector(".quotes").innerHTML = output;
        }
    }
    https.send();
    }
    
}

// function to shuffle quotes

function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;

// while elements exist in the array

while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI)
    // Decrease CI by 1

    CI--;
    // swap the last element with CI
    tempValue =  quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
}

return quotes;

}