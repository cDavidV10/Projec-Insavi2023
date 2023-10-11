const form = document.getElementById("formulario");
const almacenar = "http://localhost/prueba-projec_final/login/bd/almacenar.php";
const res = document.getElementById("res");
const password = document.getElementById("password");
const ocultar = document.getElementById("ocultar");
const svg = document.getElementById("svg");
const svg2 = document.getElementById("svg2");

async function api() {
  try {
    const datos = new FormData(form);
    const response = await fetch(almacenar, {
      method: "POST",
      body: datos,
    });

    const results = await response.json();
    console.log(results);

    if (results === "exito") {
      const mensaje = document.createElement("p");
      mensaje.classList.add("mensaje__exito");
      mensaje.textContent = "Datos Almacendos Correctamente";
      res.appendChild(mensaje);
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 2000);
      form.reset();
    }

    if (results === "fallo") {
      const mensaje = document.createElement("p");
      mensaje.classList.add("mensaje__error");
      mensaje.textContent = "El usuario ya existe";
      res.appendChild(mensaje);
      form.reset();
    }
  } catch (error) {
    res.innerHTML = `<p class="mensaje__error">Datos no almacenados</p>`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  api();
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
