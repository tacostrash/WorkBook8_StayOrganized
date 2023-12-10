window.onload = () => {
  let registerUser = document.getElementById("registerBtn");

  registerUser.onclick = () => {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;

    let user = {
      name: name,
      username: username,
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

        window.location.href = "index.html";
      });
  };
};
