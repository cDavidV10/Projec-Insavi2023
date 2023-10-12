const apiUrl = "http://localhost/prueba-projec_final/index/php/info.php";
const formModificar = document.getElementById("formModificar");
const infoUser = document.getElementById("info-user");
const infoPassword = document.getElementById("info-password");
const accion = document.getElementById("accion");

async function modificarApi() {
  try {
    const datos = new FormData(formModificar);
    const response = await fetch(
      "http://localhost/prueba-projec_final/index/php/cambiarContra.php",
      {
        method: "POST",
        body: datos,
      }
    );
    const res = document.getElementById("mensaje");
    const results = await response.json();

    if (results === "exito") {
      const mensaje = document.createElement("p");
      mensaje.classList.add("mensaje__exito");
      mensaje.textContent = "Datos Actualizados correctamente";
      res.appendChild(mensaje);
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 2000);
    }

    if (results === "error") {
      const mensaje = document.createElement("p");
      mensaje.classList.add("mensaje__error");
      mensaje.textContent = "Las contraseñas no coinciden";
      res.appendChild(mensaje);
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 2000);
    }
  } catch (error) {}
}

function modificarForm() {
  formModificar.classList.add("form-modificar__activo");

  const cerrarModal = document.getElementById("cerrar__modal");

  cerrarModal.addEventListener("click", () => {
    formModificar.classList.remove("form-modificar__activo");
    location.reload();
  });
}

function mostrar(user, password) {
  const usuario = document.createElement("p");
  usuario.textContent = user;
  usuario.classList.add("info__item");
  infoUser.appendChild(usuario);

  const contra = document.createElement("p");
  contra.textContent = password;
  contra.classList.add("info__item");
  infoPassword.appendChild(contra);

  const articleAccion = document.createElement("article");
  const eliminrar = document.createElement("p");
  const modificar = document.createElement("p");

  articleAccion.classList.add("accion");
  articleAccion.classList.add("info__item");
  eliminrar.classList.add("accion__item");
  modificar.classList.add("accion__item");

  eliminrar.textContent = "Eliminar";
  modificar.textContent = "Modificar";

  articleAccion.appendChild(modificar);
  articleAccion.appendChild(eliminrar);

  accion.appendChild(articleAccion);

  modificar.addEventListener("click", () => {
    modificarForm();
    const inputUser = document.getElementById("inputUser");
    inputUser.value = user;
    formModificar.addEventListener("submit", (e) => {
      e.preventDefault();
      modificarApi();
    });
  });
}

async function user() {
  try {
    const response = await fetch(apiUrl);
    const results = await response.json();

    const datos = results;

    for (let i = 0; i < datos.length; i++) {
      mostrar(datos[i].user, datos[i].password);
    }
  } catch (error) {
    console.log(error);
  }
}

user();
