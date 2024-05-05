const input = document.querySelector("input"),
      btn = document.querySelector("button"),
      todoList = document.querySelector(".todo-list"),
      clear = document.querySelector(".clear")

      //ADD List Item

  const addTask = () => {
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button')

    delBtn.innerHTML = '<i class= "fas fa-trash-alt"></i>'
    if (input.value) {
      newLi.textContent = input.value;
      newLi.appendChild(delBtn);
      todoList.appendChild(newLi);
      input.value = "";
    } else {
      alert("please add task first")
    }

    // delete button

    delBtn.addEventListener("click", function () {
      const del = confirm("Your are about to delte the task?")
      if (del) {
        const parent = this.parentNode;
        parent.remove()
      }
    })

  }



  btn.addEventListener("click", addTask)
  clear.addEventListener("click", () => {
    todoList.innerHTML = ""
  })