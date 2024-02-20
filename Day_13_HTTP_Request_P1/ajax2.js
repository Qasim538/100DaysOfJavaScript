
const btn = document.getElementById("btn")

btn.addEventListener("click", getUsers)

function getUsers(e) {
    e.preventDefault()

    const http = new XMLHttpRequest()

    http.open("GET", "users.json", true)


    http.onload = function() {
        if(this.status === 200) {

            const users = JSON.parse(this.responseText)

            let output = "";

            users.forEach(function(user){
                output += `
                <hr>
                <ul>
                    <li> ID: ${user.id} </li>
                    <li> Name: ${user.name} </li>
                    <li> ID: ${user.id} </li>
                    <li> email: ${user.id} </li>
                </ul>
                `

            })

            document.getElementById("users").innerHTML = output

            
        }
    }

    http.send()
}