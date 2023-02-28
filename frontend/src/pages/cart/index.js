import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useCartItems } from '@/context/cartItemsContext'

import React, { Suspense, useEffect, useState } from 'react'
import { Api } from '@/hooks/api'
import styles from '@/styles/cart.module.css'
import { useRouter } from 'next/router'
import Rating from '@/components/GeneralCardComponent/stars'

const Cart = () => {
  const router = useRouter()
  const { apiGetImage } = Api()

  const { itemsCart, save_later, removeItem, totalPrice, addItem } = useCartItems()

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const addItemsSaveLather = (course) => {
    var option = 2;
    addItem(course, option)
    removeItemsListCart(course)
  }
  
  const removeItemsListSaveLater = (course)=>{
    var option = 2;
    removeItem(course.id, option)
  }
  
  const moveCourseItemsCart = (course) => {
    var option = 1;
    addItem(course, option)
    removeItemsListSaveLater(course)
  }
  const removeItemsListCart = (course)=>{
    var option = 1;
    removeItem(course.id, option)
  }

  


  return (
    <div className={styles.container}>
      <div>
        <h2>Shopping Cart</h2>
        <span>
          {itemsCart !== undefined && itemsCart.length} Courses in Cart
        </span>
        {itemsCart !== undefined && itemsCart.length !== 0 ? (
          <>
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
                        <button onClick={() => removeItemsListCart(course)}>
                          Remove
                        </button>
                        <button onClick={() => addItemsSaveLather(course)}>Save for later</button>
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
                <span>${parseFloat(totalPrice).toFixed(2)}</span> <br />
                <button className={styles.checkout}>Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <div>tu carrito esta vacio</div>
        )}
      </div>
      <div>
        <span>
          Saved for later
        </span>
        {save_later !== undefined && save_later.length !== 0 ? (
          <>
            <div className={styles.row}>
              <div className={styles.content_one}>
                {save_later.map(course => (
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
                      <div className={styles.content_options_later}>
                        <button onClick={() => removeItemsListSaveLater(course)}>
                          Remove
                        </button>
                        <button onClick={() => moveCourseItemsCart(course)}>Move to cart</button>
                      </div>
                      <div className={styles.content_price}>
                        <p className={styles.price}>{course.price}$</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div>tu carrito esta vacio</div>
        )}
      </div>
    </div>
  )
}

export default Cart

//localstorage-hook-hydration-error
// https://stackoverflow.com/questions/73944543/react-custom-localstorage-hook-hydration-error-in-nextjs
