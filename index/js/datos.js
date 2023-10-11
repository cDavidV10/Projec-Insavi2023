const apiUrl = "http://localhost/prueba-projec_final/index/php/info.php";
const form = document.getElementById("form");
const infoUser = document.getElementById("info-user");
const infoPassword = document.getElementById("info-password");
const span = document.getElementById("span");

function mostrar(user, password) {
  const usuario = document.createElement("p");
  usuario.textContent = user;
  usuario.classList.add("info__item");
  infoUser.appendChild(usuario);

  const contra = document.createElement("p");
  contra.textContent = password;
  contra.classList.add("info__item");
  infoPassword.appendChild(contra);
}

async function user() {
  try {
    const value = new FormData(form);
    const response = await fetch(apiUrl, {
      method: "POST",
      body: value,
    });
    const results = await response.json();

    console.log(results);

    mostrar(results.user, results.password);
    form.reset();
  } catch (error) {
    console.log(error);
    const body = document.querySelector("body");
    const mensajeError = document.createElement("p");
    mensajeError.textContent = "El usuario no existe";
    mensajeError.classList.add("mensaje__error");

    body.appendChild(mensajeError);

    setTimeout(() => {
      mensajeError.style.display = "none";
    }, 3000);

    form.reset();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user();
});
