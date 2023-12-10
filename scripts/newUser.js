window.onload = () => {
  let registerUserBtn = document.getElementById("registerationForm");

  registerUserBtn.onsubmit = () => {

    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = {
      'name': name,
      'username': username,
      'password': password
    };

    // console.log(user)

    fetch(`http://localhost:8083/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User Registered:", data);
        alert("User registered successfully!");

        // window.location.href = "index.html";
      });
  };
};
