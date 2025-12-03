export let cart;
loadFromStorage();
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        Quantity: 2,
        priceCents: 499,
        deliveryOptionsId: "3",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        Quantity: 1,
        priceCents: 299,
        deliveryOptionsId: "2",
      },
    ];
  }
}

function SaveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function AddToCart(productId) {
  let MatchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      MatchingItem = cartItem;
    }
  });
  if (MatchingItem) {
    MatchingItem.Quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionsId: "1",
    });
  }
  SaveToStorage();
}
export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartitem) => {
    if (cartitem.productId !== productId) {
      newCart.push(cartitem);
    }
  });
  cart = newCart;
  SaveToStorage();
}
export function UpdateCartQuantity() {
  let totalorders = 0;
  cart.forEach((item) => {
    totalorders += item.Quantity;
  });
  let finalres = `${totalorders} items`;
  document
    .querySelector(".js-checkout-middle")
    .querySelector(".js-return-to-home-link").innerHTML = finalres;
}
export function UpdateDeliveryOptions(productId, DeliveryOptionId) {
  let MatchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      MatchingItem = item;
    }
  });
  MatchingItem.deliveryOptionsId = DeliveryOptionId;
  SaveToStorage();
}