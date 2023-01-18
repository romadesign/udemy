import styles from '@/styles/Navbar.module.css'

const Navbar = () => (
  <div className={styles.content}>
    <div className={styles.row}>
      <div className={styles.content_one}>
        <img width={100} src='/img/logo-udemy.svg' />
        <span>Categories</span>
        <input type='search' placeholder='Search' />
      </div>
      <div className={styles.content_two}>
        <span>teach on udemy</span>
        <img width={30} src='/img/carrito.svg' />
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  </div>
)

export default Navbar
