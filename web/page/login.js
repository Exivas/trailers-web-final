import  Users  from "../data/users.js";
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, completa ambos campos.");
      return;
    }

    Access(username,password)
  });
});



function Access(username, password) {
  const user = Users.find((u) => u.name === username && u.pass === password);

  if (user) {
    if (user.admin) {
      window.location.href = "./add.html"
      console.log("Inicio de sesión exitoso. Eres un administrador.");
    } else {
      console.log("Inicio de sesión exitoso. No eres un administrador.");
      window.location.href = "../index.html"
    }
  } else {
    console.log("Credenciales incorrectas. Inicio de sesión fallido.");
  }
}


