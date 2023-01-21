import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import Rating from './stars'
import { useRouter } from 'next/router'


const Card = ({ course }) => {
  const router = useRouter()
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const { apiGetImage } = Api()
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img src={apiGetImage(course.course.image)} />
        <h4>{truncate(course.course.title, 53)}</h4>
        {course.course.author != undefined && <h5>{course.course.author.name}</h5>}
        {router.pathname === '/my-courses/wishlist' && (
          <div>
            <span className={styles.content_rating}>
              {course.course.rating}
              <Rating rating={course.course.rating} />
            </span>
            <p className={styles.price}>{course.course.price}$</p>
          </div>
        )}
        {router.pathname === '/my-courses/learning' &&
          (course.rating != undefined && (
            <span className={styles.content_rating}>
              {course.course.rating}
              <Rating rating={course.rating.rate_number} />
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Card

