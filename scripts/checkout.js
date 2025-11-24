import { cart  as carte, removeFromCart} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utiles/money.js";

let AllOrders = '';
carte.forEach((CartItem) => {
    const productId  = CartItem.productId;
    let Matchingproduct;
    products.forEach((product) => {
        if(product.id === productId){
            Matchingproduct = product;
        }
    })
  AllOrders +=`
<div class="cart-item-container js-cart-item-container-${Matchingproduct.id}">
    <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${Matchingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${Matchingproduct.name}
                </div>
                <div class="product-price">
                  ${formatCurrency(Matchingproduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${CartItem.Quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link" data-product-id="${Matchingproduct.id}">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${Matchingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${Matchingproduct.name}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-${Matchingproduct.name}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${Matchingproduct.name}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
});
document.querySelector('.js-order-summary').innerHTML = AllOrders;
document.querySelectorAll('.js-update-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productlink = link.dataset.productId;
            console.log(productlink);
        })
    })
    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {  
            const productlink =  link.dataset.productId;
            removeFromCart(productlink);
            let kk = document.querySelector(`.js-cart-item-container-${productlink}`);
            kk.remove();
            })
        })
