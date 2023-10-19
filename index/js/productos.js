const formProduct = document.getElementById("formProductos");
const mensajeForm = document.getElementById("mensajeForm");

async function insertarProductos() {
  try {
    const datos = new FormData(formProduct);
    const response = await fetch(
      "http://localhost/prueba-projec_final/index/php/productos.php",
      {
        method: "POST",
        body: datos,
      }
    );
    const results = await response.json();

    if (results === "exito") {
      mensajeForm.innerHTML = ` <p class="mensaje-form-exito">Producto Agregado Correctamente</p>`;

      setTimeout(() => {
        mensajeForm.style.display = "none";
      }, 2000);
      form.reset();
    }

    if (results === "error") {
      mensajeForm.innerHTML = ` <p class="mensaje-form-error">El producto no se almaceno</p>`;
      setTimeout(() => {
        mensajeForm.style.display = "none";
      }, 2000);
      form.reset();
    }
  } catch (error) {
    console.log(error);
  }
}

formProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  insertarProductos();
});
