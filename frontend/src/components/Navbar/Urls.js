import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'

const Urls = ({ cartCount }) => {
  const { logout, user } = useAuth()
  console.log(user)
  const router = useRouter()

  const [modalProfile, setModalProfile] = useState(false)

  const logOut = () => {
    logout()
    window.location.reload('/')
  }

  const onMouseEnter = () => setModalProfile(true)
  const onMouseLeave = () => setModalProfile(false)

  return (
    <div className={styles.content_two}>
      <Link href='/login'>
        <span>Teach on udemy</span>
      </Link>
      {user != undefined ? (
        <>
          <Link href='/my-courses/learning'>
            <span>My learning</span>
          </Link>
          <Link href='/my-courses/wishlist' className={styles.heart}>
            &#9825;
          </Link>
          <Link href='/cart'>
            <div className={styles.cart_text}>
              <img width={25} src='/img/carrito.svg' />
              <span>{cartCount != undefined && cartCount}</span>
            </div>
          </Link>
          <Link className={styles.circulo} href='/' onMouseEnter={onMouseEnter}>
            <h2>{user.name[0]}</h2>
          </Link>
        </>
      ) : (
        <>
          <Link href='/cart'>
            <div className={styles.cart_text}>
              <img width={25} src='/img/carrito.svg' />
              <span>{cartCount != undefined && cartCount}</span>
            </div>
          </Link>
          <Link href='/login'>
            <button className={styles.login}>Log in</button>
          </Link>
          <Link href='/register'>
            <button className={styles.register}>Sign up</button>
          </Link>
        </>
      )}

      {modalProfile !== false && (
        <div className={styles.content_profile} onMouseLeave={onMouseLeave}>
          <div className={styles.content_profile_name}>
            <Link className={styles.circulo_profile} href='/'>
              <h2>{user.name[0]}</h2>
            </Link>
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <div className={styles.authseparator}></div>
          <div className={styles.content_options_profile}>
            <span onClick={logOut}>Log out</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Urls
