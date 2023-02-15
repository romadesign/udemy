import {useLocalStorage}  from '@/hooks/useLocalStorage'
import React, { Suspense, useEffect, useState } from 'react'

const Cart = () => {
  const { getValue} = useLocalStorage()
 
  const [itemsCart, setItemsCart] = useState(getValue('itemsCart'))
  return (
    <div>
      <ul>
        {
          itemsCart !== undefined ? itemsCart.map(item => (
            <div>
              {item.id}
            </div>
          )) : 
          (
            <div>
              tu carrito esta vacio
            </div>
          )
        }
      </ul>
    </div>
  );
};

export default Cart;
