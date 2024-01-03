window.onload = function() {
    displayTask()
}

const input = document.querySelector("input"),
      btn = document.querySelector("button"),
      todoList = document.querySelector(".todo-list"),
      clear = document.querySelector(".clear")

      let tasks;


    btn.addEventListener("click", addTask);

    // get tasks from local storage
    function getTasks() {
        if (localStorage.getItem("tasks") === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }
    }

    function addTask() {
        if (input.value !== "") {
            addTaskToLS();
        } else {
            alert("Please enter a task")
        }
    }

    // save task to local storage

    function addTaskToLS() {
        getTasks()
        tasks.push(input.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
    }

    function displayTask() {
        getTasks();
        
        tasks.forEach((task, index) => {
            const newLi = document.createElement("li")
            const delBtn = document.createElement("button")
            delBtn.innerHTML = `<i class="fas fa-trash-alt id = "${index}" onclick = "deleteTask(this.id)""></i> `;

            newLi.appendChild(document.createTextNode(task))
            newLi.appendChild(delBtn);
            todoList.appendChild(newLi)

        })

    }

