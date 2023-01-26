import styles from '@/styles/course.module.css'
import stylesCategory from '@/styles/category.module.css'
import { Api } from '@/hooks/api'
import Rating from './stars'
import { useRouter } from 'next/router'

const Card = ({ course }) => {
  console.log(course)
  const router = useRouter()
  function truncate (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const { apiGetImage } = Api()
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img src={apiGetImage(course.image)} />
        <h4>{truncate(course.title, 40)}</h4>
        {course.author != undefined && <h5>{course.author.name}</h5>}
        {router.pathname === '/' && (
          <div>
            <span className={styles.content_rating}>
              {course.rating}
              <Rating rating={course.rating} />
            </span>
            <p className={styles.price}>{course.price}$</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
