let ProductsHtml = '';
products.forEach((product) => {
    const html =`
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${product.priceCents / 100}
          </div>

          <div class="product-quantity-container js-product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart-${product.id}">
            
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart
          " data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `
    ProductsHtml += html;
});
let ProductsGrid = document.querySelector('.products-grid')
    .innerHTML = ProductsHtml;
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) =>{
    button.addEventListener('click', () =>{
      const productId = button.dataset.productId;
      let MatchingItem;
      cart.forEach((item) =>{
        if(productId === item.productId){
          MatchingItem = item;
        }
      })
      if(MatchingItem){
        MatchingItem.Quantity += 1;
      }else{
        cart.push({
            productId : productId,
            Quantity : 1
          });
      }
      let TotalQuantity = 0;
      cart.forEach((item) =>{
        let select = document.querySelector(`.js-quantity-selector-${item.productId}`);
       // console.log(`productId : ${item.productId} quantity : ${select.value}`);
        if(select){
          TotalQuantity += Number(select.value);
        }
        document.querySelector('.js-cart-quantity')
        .innerHTML = TotalQuantity;
      })
        let added = document.querySelector(`.added-to-cart-${productId}`);
        added.innerHTML = `<img src="images/icons/checkmark.png">
            Added`;
      setTimeout(() =>{
         added.innerHTML = '';
      }, 2000);
      })
      
      })
