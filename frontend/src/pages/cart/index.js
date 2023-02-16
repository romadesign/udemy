import { useLocalStorage } from '@/hooks/useLocalStorage'
import React, { Suspense, useEffect, useState } from 'react'
import { Api } from '@/hooks/api'
import styles from '@/styles/cart.module.css'
import { useRouter } from 'next/router'
import Rating from '@/components/GeneralCardComponent/stars'

const Cart = () => {
  const router = useRouter()
  const { apiGetImage } = Api()
  const { getValue, saveValue } = useLocalStorage()

  function truncate (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const [itemsCart, setItemsCart] = useState(getValue('itemsCart') || [])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    // Calcular el precio total cada vez que se actualiza itemsCart
    const price = itemsCart.reduce(
      (total, course) => total + parseFloat(course.price),
      0
    )
    setTotalPrice(price)
  }, [itemsCart])

  const removeItem = courseId => {
    const newItemsCart = itemsCart.filter(i => i.id !== courseId)
    setItemsCart(newItemsCart)
    saveValue('itemsCart', newItemsCart)
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>Shopping Cart</h2>
        <span>
          {itemsCart !== undefined && itemsCart.length} Courses in Cart
        </span>
        {itemsCart !== undefined ? (
          <div className={styles.row}>
            <div className={styles.content_one}>
              {itemsCart.map(course => (
                <div className={styles.content_data}>
                  <div className={styles.contnet_img_text}>
                    <div>
                      <img src={apiGetImage(course.image)} />
                    </div>
                    <div>
                      <h4>{truncate(course.title, 60)}</h4>
                      <h5>By {course.author.name}</h5>
                      <Rating rating={course.rating} />
                    </div>
                  </div>
                  <div className={styles.contnet_option_price}>
                    <div className={styles.content_options}>
                      <button onClick={() => removeItem(course.id)}>
                        Remove
                      </button>
                      <button>Save for later</button>
                      <button>Move to wishlist</button>
                    </div>
                    <div className={styles.content_price}>
                      <p className={styles.price}>{course.price}$</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.content_two}>
              <h6>Total</h6>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <div>tu carrito esta vacio</div>
        )}
      </div>
    </div>
  )
}

export default Cart
