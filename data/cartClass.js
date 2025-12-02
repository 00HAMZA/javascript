import { loadFromStorage } from "./cart.js";
class Cart {
  cartVar = undefined;
  localStorageKey = undefined;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }
  loadFromStorage() {
    this.cartVar = JSON.parse(localStorage.getItem(this.loadFromStorage));
    if (!this.cartVar) {
      this.cartVar = [
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
  SaveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartVar));
  }
  AddToCart(productId) {
    let MatchingItem;
    this.cartVar.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        MatchingItem = cartItem;
      }
    });
    if (MatchingItem) {
      MatchingItem.Quantity += 1;
    } else {
      this.cartVar.push({
        productId: productId,
        Quantity: 1,
        deliveryOptionsId: "1",
      });
    }
    this.SaveToStorage();
  }
  removeFromCart(productId) {
    let newCart = [];

    this.cartVar.forEach((cartitem) => {
      if (cartitem.productId !== productId) {
        newCart.push(cartitem);
      }
    });
    this.cartVar = newCart;
    this.SaveToStorage();
  }
  UpdateCartQuantity() {
    let totalorders = 0;
    this.cartVar.forEach((item) => {
      totalorders += item.Quantity;
    });
    let finalres = `${totalorders} items`;
    document
      .querySelector(".js-checkout-middle")
      .querySelector(".js-return-to-home-link").innerHTML = finalres;
  }
  UpdateDeliveryOptions(productId, DeliveryOptionId) {
    let MatchingItem;
    this.cartVar.forEach((item) => {
      if (productId === item.productId) {
        MatchingItem = item;
      }
    });
    MatchingItem.deliveryOptionsId = DeliveryOptionId;
    this.SaveToStorage();
  }
}
const cart = new Cart('cartoop');
const businessCart = new Cart('businesscart');

localStorage.clear();
cart.AddToCart("hamza1234");
console.log(cart);
console.log(businessCart);
