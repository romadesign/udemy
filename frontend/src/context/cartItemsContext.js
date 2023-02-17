import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const useCartItems = () =>{
  return useContext(UserContext)
}

export const CartItemsProvider = ({ children }) => {

  const [itemsCart, setItemsCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  console.log(itemsCart)

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('itemsCart')) || [];
    const count = cartItems.reduce((total, course) => total + 1, 0);
    setItemsCart(cartItems);
    setCartCount(count);
  }, []);

  const addItem = (item) => {
    const newItemsCart = [...itemsCart, item];
    const count = newItemsCart.reduce((total, course) => total + 1, 0);
    setItemsCart(newItemsCart);
    setCartCount(count);
    localStorage.setItem('itemsCart', JSON.stringify(newItemsCart));
  };

  const removeItem = (courseId) => {
    const newItemsCart = itemsCart.filter((i) => i.id !== courseId);
    const count = newItemsCart.reduce((total, course) => total + 1, 0);
    setItemsCart(newItemsCart);
    setCartCount(count);
    localStorage.setItem('itemsCart', JSON.stringify(newItemsCart));
  };



  return <UserContext.Provider value={{ itemsCart, setItemsCart, setCartCount,  cartCount, addItem, removeItem }}>{children}</UserContext.Provider>
}
