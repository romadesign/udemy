import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import Urls from './Urls'

const Navbar = () => {

  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.content_one}>
          <Link href='/'>
            <img width={90} src='/img/logo-udemy.svg' />
          </Link>
          <span>Categories</span>
          <input type='search' placeholder=' &#128269; Search' />
        </div>
        <Urls />
      </div>
    </div>
  )
}





export default Navbar
