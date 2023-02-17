import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

export const useCartItems = () =>{
  return useContext(UserContext)
}

export const CartItemsProvider = ({ children }) => {
  // const [value,  setValue ] = useState();
  const getValue = (key, defaultValue) => {
    try {
      const item = window.localStorage.getItem(key)
      // setValue(JSON.parse(item))
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(error)
      return defaultValue
    }
  }

  const saveValue = (key, newValue) => {
    try {
      const serializedValue = JSON.stringify(newValue);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(error);
    }
  }


  return <UserContext.Provider value={{getValue, saveValue}}>{children}</UserContext.Provider>
}
