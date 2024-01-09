function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    
    if (taskInput.value !== "") {
      let newTask = document.createElement("li");
      newTask.textContent = taskInput.value;
      newTask.onclick = function() {
        this.classList.toggle("completed");
      };
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Digite uma tarefa!");
    }
  }
  