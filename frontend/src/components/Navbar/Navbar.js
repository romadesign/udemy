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
        <Link href='/login'>
          <button className={styles.login}>Log in</button>
        </Link>
        <Link href='/register'>
          <button className={styles.register}>Sign up</button>
        </Link>
      </div>
    </div>
  </div>
)

export default Navbar
