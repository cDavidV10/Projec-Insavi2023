const carritoBtn = document.getElementById("carrito");
const cart = document.querySelector(".cart");
const closeCart = document.getElementById("closeCart");

carritoBtn.addEventListener("click", () => {
  cart.classList.add("cart-active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//? Remover Items del carrito
function ready() {
  const removeCartButtons = document.getElementsByClassName("cart__remove");
  for (let i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //? Cambio de cantidads
  const quantityInputs = document.getElementsByClassName("cart__quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //? Añadir al carrito
  var addCart = document.getElementsByClassName("add__cart");
  for (let i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
}

//? Remover Items del carrito
function removeCartItem(e) {
  const buttonClicked = e.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

//? Cambiando Cantidad
function quantityChanged(e) {
  const input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updateTotal();
}

//? Añadir al Carrito
function addCartClicked(e) {
  var button = e.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("card__title")[0].innerText;
  var price = shopProducts.getElementsByClassName("card__precio")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("card__img")[0].src;
  console.log(title, price, productImg);
}

function addProductToCart(title, price, img) {
  var cartShopBox = document.createElement("article");
  cartShopBox.classList.add("cart__box");
  var cardItems = document.getElementsByClassName("cart__content")[0];
  var cartItemsNames = cardItems.getElementsByClassName("cart__product-title");

  for (let i = 0; i < cartItemsNames.length; i++) {
    alert("Producto Añadido al carrito");
    return;
  }
}

var cartBoxContent = `
         <figure class="card__img-cont">
            <img
              class="card__img cart__img"
              src="${img}"
              alt=""
            />
          </figure>
          <div class="detail__box">
            <p class="cart__product-title">${title}</p>
            <p class="cart__price">${price}</p>
            <input type="number" value="1" class="cart__quantity" />
          </div>
          <i class="fa-solid fa-trash cart__remove"></i>
  `;

cartShopBox.innerHTML = cartBoxContent;
cardItems.appendChild(cartShopBox);
cartShopBox
  .getElementsByClassName("cart__remove")[0]
  .addEventListener("click", removeCartItem);
cartShopBox
  .getElementsByClassName("cart__quantity")[0]
  .addEventListener("change", quantityChanged);

//? Actualizar Total
function updateTotal() {
  const cartContent = document.getElementsByClassName("cart__content")[0];
  const cartBoxes = cartContent.getElementsByClassName("cart__box");
  var total = 0;

  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName("cart__price")[0];
    const quatityElement = cartBox.getElementsByClassName("cart__quantity")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quatityElement.value;
    total = total + price * quantity;
    // ? Si el precio tiene algun valor decimal
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total__price")[0].innerText = `$ ${total}`;
  }
}
