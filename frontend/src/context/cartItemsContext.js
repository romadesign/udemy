import { addRequestMeta } from 'next/dist/server/request-meta'
import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const useCartItems = () => {
  return useContext(UserContext)
}

export const CartItemsProvider = ({ children }) => {


  const [data, setData] = useState({});
  const [itemsCart, setItemsCart] = useState([]);
  const [save_later, setSave_later] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)

<<<<<<< HEAD
  console.log(itemsCart)
  console.log(cartCount)
=======
>>>>>>> 7ef3b34442c9bb245d7a11786cbb2aba9e700856

  useEffect(() => {
    const myData = JSON.parse(localStorage.getItem('myData')) || {};
    setData(myData)
    setItemsCart(myData.itemsCart)
    setSave_later(myData.save_later)
    if (Array.isArray(myData.itemsCart)) {
      const count = myData.itemsCart.reduce((total, course) => total + 1, 0);
      setCartCount(count);
    }

  }, []);

  useEffect(() => {
    // Calcular el precio total cada vez que se actualiza itemsCart
    if (Array.isArray(itemsCart)) {
      const price = itemsCart.reduce(
        (total, course) => total + parseFloat(course.price),
        0
      )
      setTotalPrice(price)
    }

  }, [itemsCart])


  const addItem = (item, typedatesave) => {
    // Obtener el objeto de datos del localStorage
    const data = JSON.parse(localStorage.getItem('myData')) || {};
    if (typedatesave == 1) {
      // Obtener el array itemsCart del objeto de datos (o crearlo si no existe)
      const items = data.itemsCart || [];
      // Agregar el nuevo elemento al array
      items.push(item);
      // Actualizar el objeto de datos con el nuevo array itemsCart
      data.itemsCart = items;
      // Actualizar el estado si es necesario
      setItemsCart(items);
      const count = data.itemsCart.reduce((total, course) => total + 1, 0);
      setCartCount(count);
    } else if (typedatesave = 2) {
      const item_save_later = data.save_later || [];
      item_save_later.push(item);
      data.save_later = item_save_later;
      setSave_later(item_save_later);

    }
    // Guardar los datos actualizados en el localStorage
    localStorage.setItem('myData', JSON.stringify(data));
  };

  const removeItem = (courseId) => {
    const data = JSON.parse(localStorage.getItem('myData')) || {};

    const itemsCart = data.itemsCart || [];

    const newItemsCart = itemsCart.filter((i) => i.id !== courseId);
    data.itemsCart = newItemsCart;
    setItemsCart(newItemsCart);

    //Restar count
    const count = newItemsCart.reduce((total, course) => total + 1, 0);
    setCartCount(count);
    localStorage.setItem('myData', JSON.stringify(data));
  };



  return <UserContext.Provider value={{ itemsCart, save_later, setItemsCart, setCartCount, cartCount, addItem, removeItem, totalPrice }}>{children}</UserContext.Provider>
}
