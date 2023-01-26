import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import Rating from '../GeneralCardComponent/stars'
import { useRouter } from 'next/router'

const Card = ({ course }) => {
  const router = useRouter()
  function truncate (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const { apiGetImage } = Api()
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img
          src={apiGetImage(
            router.pathname == '/' ? course.image : course.course.image
          )}
        />

        <h4>
          {truncate(
            router.pathname == '/' ? course.title : course.course.title,
            40
          )}
        </h4>

        <h5>
          {router.pathname == '/'
            ? course.author.name
            : course.course.author.name}
        </h5>
        {router.pathname === '/' && (
          <>
            <span className={styles.content_rating}>
              {course.rating}
              <Rating rating={course.rating} />
            </span>
            <p className={styles.price}>{course.price}$</p>
          </>
        )}
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
          course.rating != undefined && (
            <span className={styles.content_rating}>
              {course.course.rating}
              <Rating rating={course.rating.rate_number} />
            </span>
          )}
      </div>
    </div>
  )
}

export default Card
