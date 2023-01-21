import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import Rating from './stars'

const Card = ({ course }) => {
  console.log(course.rating)

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const { apiGetImage } = Api()
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img src={apiGetImage(course.course.image)} />
        <h4>{truncate(course.course.title, 53)}</h4>
        {/* <h5>{course.author.name}name</h5> */}
        <span className={styles.content_rating}>
          {course.course.rating}
          <Rating rating={course.course.rating} />
        </span>
        <p className={styles.price}>{course.course.price}$</p>
        {
          course.rating != undefined && (
            <span className={styles.content_rating}>
              {course.course.rating}
              <Rating rating={course.rating.rate_number} />
            </span>
          )
        }
      </div>
    </div>
  )
}

export default Card
