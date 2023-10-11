const validarUrl = "http://localhost/prueba-projec_final/index/php/validar.php";
const sesionInit = document.getElementById("close");

async function validar() {
  try {
    const response = await fetch(validarUrl);
    const results = await response.json();

    if (results === "error") {
      sesionInit.textContent = "Iniciar sesion";
    }
  } catch (error) {
    console.log(error);
  }
}

validar();
