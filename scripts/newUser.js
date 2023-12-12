// Carlos M Code

window.onload = () => {
  let registerUserBtn = document.getElementById("registerationForm");

  registerUserBtn.onsubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = {
      name: name,
      username: username,
      password: password,
    };

    fetch(`http://localhost:8083/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(async (res) => {
        if (res.status === 200) {
          // Check if the response has content
          const contentLength = res.headers.get("Content-Length");
          if (contentLength && contentLength !== "0") {
            return res.json();
          } else {
            // Treat an empty response as a successful registration
            return {};
          }
        } else {
          throw new Error(`Server responded with status ${res.status}`);
        }
      })
      .then((data) => {
        console.log("User Registered:", data);
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
      });
  };
};
