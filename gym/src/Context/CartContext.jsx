import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider =({children}) =>{
const[cart,setCart] = useState([])
console.log("cart",cart)
const addToCart = (item,userQuantity) => {
setCart((prev) => {

const existed =prev.find((cartItem) => cartItem.id === item.id); 
if (existed){

return prev.map((cartItem) =>{

cartItem.id === item.id ?{...cartItem , userQuantity: userQuantity + 1}:cartItem



})


}

else{
  return  [...prev , {...item ,userQuantity : 1 }]
}








})

}


return(<>

<CartContext.Provider value={cart ,addToCart}>{children}</CartContext.Provider>

</>)


};