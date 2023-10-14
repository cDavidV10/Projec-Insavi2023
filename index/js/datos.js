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
    console.log(results);

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

async function eliminarApi(user) {
  try {
    const response = await fetch(
      "http://localhost/prueba-projec_final/index/php/eliminar.php",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );
    const results = await response.json();
    if (results === "exito") {
      const contenedor = document.getElementById("cont");
      const mensajeExito = document.createElement("p");
      mensajeExito.textContent = "Usuario Eliminado correctamente";
      mensajeExito.classList.add("mensaje-eliminar");
      contenedor.appendChild(mensajeExito);
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 2000);
    }
  } catch (error) {
    console.log("fallo");
  }
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
  const modifcarSVG = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 16.5V21a1 1 0 0 1-1 1h-3.25"></path>
  <path d="M20 8V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3"></path>
  <path d="M8 8h7"></path>
  <path d="M11.5 22 20 11.5"></path>
  <path d="M8 12h4"></path>
</svg>`;
  const eliminarSVG = `
  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15"></path>
  <path d="M3.75 5.25h16.5"></path>
  <path d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.121 1.121 0 0 1 15 3.375V5.25"></path>
  <path d="M12 8.25v10.5"></path>
  <path d="M8.625 8.25 9 18.75"></path>
  <path d="M15.375 8.25 15 18.75"></path>
</svg>
  `;
  const usuario = document.createElement("p");
  usuario.textContent = user;
  usuario.classList.add("info__item");
  infoUser.appendChild(usuario);

  const contra = document.createElement("p");
  contra.textContent = password;
  contra.classList.add("info__item");
  infoPassword.appendChild(contra);

  const articleAccion = document.createElement("article");
  const eliminar = document.createElement("p");
  const modificar = document.createElement("p");

  articleAccion.classList.add("accion");
  articleAccion.classList.add("info__item");
  eliminar.classList.add("accion__item");
  modificar.classList.add("accion__item");

  modificar.innerHTML = modifcarSVG;
  eliminar.innerHTML = eliminarSVG;

  articleAccion.appendChild(modificar);
  articleAccion.appendChild(eliminar);

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

  eliminar.addEventListener("click", () => {
    const eliminarMensaje = document.getElementById("mensajeEliminar");
    const btnEliminar = document.getElementById("btnEliminar");
    eliminarMensaje.style.display = "flex";
    btnEliminar.addEventListener("click", () => {
      eliminarApi({ user });
    });
    const cerrarModal = document.getElementById("cerrar__modal-eliminar");

    cerrarModal.addEventListener("click", () => {
      eliminarMensaje.style.display = "none";
      location.reload();
    });
  });
}

async function info() {
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

info();
