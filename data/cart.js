export const cart = [];

export function AddToCart(productId){
        let MatchingItem;
        cart.forEach((cartItem) =>{
          if(productId === cartItem.productId){
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
      console.log(cart);
    }