const closeUrl = "http://localhost/prueba-projec_final/index/php/close.php";
const sesionClose = document.getElementById("close");
const info = document.getElementById("info");

async function close() {
  try {
    const response = await fetch(closeUrl);
    const results = await response.json();
  } catch (error) {
    console.log(error);
  }
}

sesionClose.addEventListener("click", () => {
  location.href = "http://localhost/prueba-projec_final/Login/login.html";
  close();
});
