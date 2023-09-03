import { createContext, useContext, useEffect, useState } from 'react'
import { Api } from '@/hooks/api'
import { useAuth } from '@/hooks/auth'

export const UserContext = createContext()

export const useCartItems = () => {
  return useContext(UserContext)
}

export const CartItemsProvider = ({ children }) => {
  const { apiGetMyLibrary } = Api()
  const { getCookie } = useAuth()
  const [payload, setPayload] = useState({
    p: 1,
    page_size: 8,
    sort: 'id',
    category: ''
  })

  const [data, setData] = useState({});
  const [itemsCart, setItemsCart] = useState([]);
  const [save_later, setSave_later] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)

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
    getDatawishlist()
  }, [payload])
  const getDatawishlist = async () => {
    apiGetMyLibrary(getCookie('account'), payload)
      .then(res => {
        console.log(res, 'res nuevop')

      })
      .catch(error => {
        console.error(error)
      })
  }



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


  const addItem = (item, option) => {
    removeItem(item.id, 2)//remove  item de item_save_later cuando agregamos a la lista
    // Obtener el objeto de datos del localStorage
    const data = JSON.parse(localStorage.getItem('myData')) || {};
    if (option == 1) {
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
    } else if (option = 2) {
      const item_save_later = data.save_later || [];
      item_save_later.push(item);
      data.save_later = item_save_later;
      setSave_later(item_save_later);

    }
    // Guardar los datos actualizados en el localStorage
    localStorage.setItem('myData', JSON.stringify(data));
  };

  const removeItem = (courseId, option) => {
    // Obtener el objeto de datos del localStorage
    const data = JSON.parse(localStorage.getItem('myData')) || {};
    if (option == 1) {
      // Obtener el array itemsCart del objeto de datos (o crearlo si no existe)
      const itemsCart = data.itemsCart || [];
      // Actualizar el objeto de datos con el nuevo array itemsCart
      const newItemsCart = itemsCart.filter((i) => i.id !== courseId);
      data.itemsCart = newItemsCart;
      setItemsCart(newItemsCart);

      //Restar count
      const count = newItemsCart.reduce((total, course) => total + 1, 0);
      setCartCount(count);
    } else if (option = 2) {
      const save_later = data.save_later || [];
      const newItemssaveLater = save_later.filter((i) => i.id !== courseId);
      data.save_later = newItemssaveLater;
      setSave_later(newItemssaveLater);
    }
    localStorage.setItem('myData', JSON.stringify(data));
  };



  return <UserContext.Provider value={{ itemsCart, save_later, setItemsCart, setCartCount, cartCount, addItem, removeItem, totalPrice }}>{children}</UserContext.Provider>
}
