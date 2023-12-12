// Gaberiel O Code



window.onload = () => {

  //  {
  //     "id": 1,
  //     "userid": 5,
  //     "category": "Personal Task",
  //     "description": "Finish studying for ENG 211 exam",
  //     "deadline": "2022-12-15",
  //     "priority": "Medium",
  //     "completed": false
  //   }
  let addToDo = document.getElementById("add-todo");
  // Get all form fields
  let selectUserIdEl = document.getElementById("userName");
  let selectCategoryEl = document.getElementById("category");
  let descriptionEl = document.getElementById("description");
  let deadlineEl = document.getElementById("deadline");
  let priorityEl = document.getElementById("priority");

  //Populate user dropdown
  fetch("http://localhost:8083/api/users")
      .then(res => res.json())
      .then((users) => {
          users.forEach((user) => {
             let userIdDropdownEl = document.createElement("option")
             userIdDropdownEl.text = user.username;
             userIdDropdownEl.value = user.id;
             selectUserIdEl.appendChild(userIdDropdownEl);
          })

      });

  // Populate category dropdown
  fetch("http://localhost:8083/api/categories")
      .then((res) => res.json())
      .then((categories) => {
         categories.forEach((category) => {
              let categoryDropdownEl = document.createElement("option")
              categoryDropdownEl.text = category.name;
              categoryDropdownEl.value = category.name;
              selectCategoryEl.appendChild(categoryDropdownEl);
          })
      });

  addToDo.onsubmit = (e) => {
      e.preventDefault();

      let currentToDodata = {
          userid: selectUserIdEl.value,
          category: selectCategoryEl.value,
          description: descriptionEl.value,
          deadline: deadlineEl.value,
          priority: priorityEl.value
      };

      fetch("http://localhost:8083/api/todos", {
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(currentToDodata),
      })
          .then((res) => res.json())
          .then((newToDoTask) => {
              console.log("Todo added successfully");
              location.href = `todos.html?id=${newToDoTask.id}`;
          }).catch((err) => {
              console.error("Failed to add todo", err)
          })

  }

}