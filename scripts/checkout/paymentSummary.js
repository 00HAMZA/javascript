import { cart } from "../../data/cart.js";
export function renderPaymentSummary(){
    cart.forEach((cartItem) => {
        let priceDollar = cartItem.priceCents;
        });
}