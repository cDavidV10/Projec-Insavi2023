const cardContent = document.getElementById("productos");

function mostrarProductos(title, description, price) {
  const card = document.createElement("article");
  const cardTitle = document.createElement("h3");
  const cardFigure = document.createElement("figure");
  const cardImg = document.createElement("img");
  const cardDescription = document.createElement("p");
  const cardPrice = document.createElement("p");
  const cardBtn = document.createElement("button");

  cardFigure.appendChild(cardImg);
  cardTitle.textContent = title;
  cardDescription.textContent = description;
  cardPrice.textContent = price;
  cardBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Añadir al carrito`;

  card.classList.add("card");
  cardTitle.classList.add("card__title");
  cardDescription.classList.add("card__description");
  cardImg.classList.add("card__img");
  cardFigure.classList.add("card__img-cont");
  cardPrice.classList.add("card__precio");
  cardBtn.classList.add("btn");

  card.appendChild(cardTitle);
  card.appendChild(cardFigure);
  card.appendChild(cardDescription);
  card.appendChild(cardPrice);
  card.appendChild(cardBtn);
  cardContent.append(card);
}

async function productos() {
  try {
    const response = await fetch(
      "http://localhost/prueba-projec_final/index/php/mostrarProductos.php"
    );
    const results = await response.json();
    const datos = results;

    for (let i = 0; i < datos.length; i++) {
      console.log(datos[i].nombre, datos[i].description, datos[i].precio);
      mostrarProductos(datos[i].nombre, datos[i].description, datos[i].precio);
    }
  } catch (error) {}
}

productos();
