import { AddToCart, cart, loadFromStorage } from "../../../data/cart.js";
import { products } from "../../../data/products.js";
describe("test suite AddtoCart:", () => {
  it("add an existing product to the cart:", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          product: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
          quantity: 1,
          dliceryOptionsId: "1",
        },
      ]);
    });
    loadFromStorage();
    AddToCart("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('8c9c52b5-5a19-4bcb-a5d1-158a74287c53');
    //console.log(cart[0].productId);
    expect(cart[0].Quantity).toEqual(2);
  });
  it("add a new product to the cart:", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    AddToCart("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart[0].Quantity).toEqual(1);
  });
});
