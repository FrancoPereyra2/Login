const $submit = document.getElementById("submit"),
  $password = document.getElementById("password"),
  $username = document.getElementById("username"),
  $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
  if (e.target === $visible) {
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
  }
});

document.addEventListener("click", (e) => {
  if (e.target === $submit) {
    e.preventDefault();
    const usernameValue = $username.value;
    const passwordValue = $password.value;


    if (usernameValue === "Fran" && passwordValue === "pereyra") {
        window.location.href = "index.html";
      alert("ingreso correctamente");
    } else {

      alert("Usuario o contraseña incorrectos");
    }
  }
});
