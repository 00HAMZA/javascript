export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart = [];
}


function SaveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function AddToCart(productId){
        let MatchingItem;
        cart.forEach((cartItem) =>{
          if(productId === cartItem.productId){
            MatchingItem = cartItem;
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
      SaveToStorage();
    }
    export function removeFromCart(productId) {
      let  newCart = [];

      cart.forEach(cartitem => {
        if (cartitem.productId !== productId) {
          newCart.push(cartitem);
        }
      });
      cart  = newCart;
      SaveToStorage();
}
 export function UpdateCartQuantity(){
        let totalorders = 0;
        cart.forEach((item) => {
            totalorders += item.Quantity;
        })
        document.querySelector('.js-checkout-middle')
                .querySelector('.js-return-to-home-link')
                    .innerHTML = totalorders;
        return totalorders;
    }
