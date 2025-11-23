export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  }
];

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
      console.log(cart);
    }