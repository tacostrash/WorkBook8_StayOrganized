window.onload = () => {
  let registerUser = document.getElementById("registerBtn");

  registerUser.onclick = () => {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;

    let user = {
      name: name,
      username: username,
    };

    console.log(user);
  };
};
