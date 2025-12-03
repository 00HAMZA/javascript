import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOptions } from "../../data/DeliveiryOptions.js";
import { formatCurrency } from "../utiles/money.js"
export function renderPaymentSummary() {
  let total = 0;
  let shipping = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    let ss = product.priceCents * cartItem.Quantity;
    const DeliveryOptions = getDeliveryOptions(cartItem.deliveryOptionsId);
    shipping += DeliveryOptions.priceCents;
    total += ss;
  });
  const TotalBeforeTax = shipping + total;
  const Tax = TotalBeforeTax * 0.1;
  const Total = TotalBeforeTax + Tax;
  const html = `
          <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(TotalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shipping)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(TotalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(Tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(Total)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>`
    document.querySelector('.payment-summary').innerHTML = html; 
}