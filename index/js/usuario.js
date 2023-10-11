const userUrl = "http://localhost/prueba-projec_final/index/php/sesion.php";
const user = document.getElementById("username");

async function datos() {
  try {
    const response = await fetch(userUrl);
    const results = await response.json();

    console.log(results);
    if (results == null || results == "") {
      location.href = "http://localhost/prueba-projec_final/Login/login.html";

      return;
    }
    user.innerHTML = `<h2>${results}</h2>`;
  } catch (error) {
    console.log(error);
  }
}

user.addEventListener("click", () => {
  info.classList.toggle("user__info--activo");
});

datos();
