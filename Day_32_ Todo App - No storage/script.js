const input = document.querySelector("input"),
      btn = document.querySelector("button"),
      todoList = document.querySelector(".todo-list"),
      clear = document.querySelector(".clear")


  const task = localStorage.setItem('task')

      //ADD List Item
      const addTask = () => {
        const newLi = document.createElement("li");
        const delBtn = document.createElement("button");

        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

        if (input.value !== "") {
          newLi.textContent = input.value;
          newLi.appendChild(delBtn);
          todoList.appendChild(newLi);
          input.value = "";
          input.focus()
        } else { 
          alert("Please add a task first")

        }
              // delete tsk list item

          delBtn.addEventListener("click", function()  {
            const del = confirm("You are about to delete a task?")
            if (del == true) {
              const parent = this.parentNode;
              parent.remove();

            }
          })
      };

      btn.addEventListener("click", addTask)
      clear.addEventListener("click", () => {
        todoList.innerHTML = "";
      })


