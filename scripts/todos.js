// Amaris Nichole Code

window.onload = () => {
  let userDropdown = document.getElementById("user-dropdown");
  let viewTasksBtn = document.getElementById("user-id-submit");
  let tasksList = document.getElementById("tasks-list"); // Added this line

  // Fetch user data and populate the dropdown
  fetch("http://localhost:8083/api/users")
    .then((res) => res.json())
    .then((users) => {
      // Add a default "Please select a user" option
      let defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Please select a user";
      userDropdown.appendChild(defaultOption);

      // Populate the dropdown with user options
      users.forEach((user) => {
        let option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        userDropdown.appendChild(option);
      });
    });

  // Handle the button click event
  viewTasksBtn.onclick = () => {
    const selectedUserId = userDropdown.value;

    if (selectedUserId) {
      // Fetch tasks specifically for the selected user
      fetch(`http://localhost:8083/api/todos/byuser/${selectedUserId}`)
        .then((res) => res.json())
        .then((userTasks) => {
          // Clear previous tasks
          tasksList.innerHTML = "";

          // Display tasks for the selected user with additional information
          userTasks.forEach((task) => {
            const li = document.createElement("li");
            li.innerHTML = `
              <strong>Description:</strong> ${task.description} <br>
              <strong>Category:</strong> ${task.category} <br>
              <strong>Deadline:</strong> ${task.deadline} <br>
              <strong>Priority:</strong> ${task.priority} <br>
              <strong>Completed:</strong> ${task.completed ? "Yes" : "No"} <br><br>
            `;
            tasksList.appendChild(li);
          });
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
        });
    } else {
      tasksList.innerHTML = "Please select a user before viewing tasks.";
    }
  };
};
