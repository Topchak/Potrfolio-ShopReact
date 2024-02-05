import { useState, useEffect, createContext } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);


const getDefaultCart = () =>{
  let cart = {};
  for(let i = 0; i < all_product.length + 1; i++){
    cart[i] = 0;
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [products, setProducts] = useState([]);
  const [openBurger, setOpenBurger] = useState(false);
  console.log(openBurger);



  useEffect(() => {
    setProducts(all_product);
  }, []);


  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  }
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const getTotoalCartAmont = () =>{
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let itemInfo = all_product.find((p) => p.id === +item)
        totalAmount += itemInfo.new_price * cartItem[item]
      }
    }
    return totalAmount
  }

  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        totalItem += cartItem[item]
      }
    }
    return totalItem
  }

  const handleOpenMobileMenu = () => {
    setOpenBurger((prevOpenBurger) =>!prevOpenBurger);
    document.body.style.overflow = !openBurger ? 'hidden' : 'auto';
  };

  const contextvalue = {
    products, 
    cartItem, 
    openBurger,
    setOpenBurger,
    handleOpenMobileMenu, 
    addToCart, 
    removeFromCart, 
    getTotoalCartAmont, 
    getTotalCartItems};
  

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider