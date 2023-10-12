const form = document.getElementById("form");
const apiUrl = "http://localhost/prueba-projec_final/login/bd/login.php";
const respuesta = document.getElementById("respuesta");
const password = document.getElementById("password");
const ocultar = document.getElementById("ocultar");
const svg = document.getElementById("svg");
const svg2 = document.getElementById("svg2");

async function ingresar() {
  try {
    const datos = new FormData(form);
    const response = await fetch(apiUrl, {
      method: "POST",
      body: datos,
    });
    const results = await response.json();

    if (results === "admin") {
      location.href =
        "http://localhost/prueba-projec_final/index/index-admin.html";

      return;
    }

    if (results === "exito") {
      location.href =
        "http://localhost/prueba-projec_final/index/index-usuario.html";
    }
  } catch (error) {
    respuesta.innerHTML = `<p class="mensaje__error">El usuario o la contraseña esta incorrecta</p>`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ingresar();
});

mostrar.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    svg.classList.add("oculto");
    svg2.classList.remove("oculto");
  }
});

ocultar.addEventListener("click", () => {
  if (password.type == "text") {
    password.type = "password";
    svg2.classList.add("oculto");
    svg.classList.remove("oculto");
  }
});
