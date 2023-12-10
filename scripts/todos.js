window.onload = () => {
  const userDropdown = document.getElementById("userDropdown");
  const viewTasksBtn = document.getElementById("viewTasksBtn");
  const tasksList = document.getElementById("tasksList");

  // Fetch user data and populate the dropdown
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      // Add a default "Please select a user" option
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Please select a user";
      userDropdown.appendChild(defaultOption);

      // Populate the dropdown with user options
      users.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        userDropdown.appendChild(option);
      });
    })

    // Fetch and display task when the user clicks the button

    viewTasksBtn.onclick = () =>{
      let selectedUserId = userDropdown.value;

      if
    }
};
