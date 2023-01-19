import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => (
  <div className={styles.content}>
    <div className={styles.row}>
      <div className={styles.content_one}>
        <Link href='/'>
          <img width={90} src='/img/logo-udemy.svg' />
        </Link>
        <span>Categories</span>
        <input
          type='search'
          placeholder='	
&#128269; Search'
        />
      </div>
      <div className={styles.content_two}>
        <span>teach on udemy</span>
        <Link href='/'>
          <img width={25} src='/img/carrito.svg' />
        </Link>
        <button className={styles.login}>
          <Link href='/login'>Log in</Link>
        </button>
        <button className={styles.register}>
          <Link href='/register'>Sign up</Link>
        </button>
      </div>
    </div>
  </div>
)

export default Navbar
