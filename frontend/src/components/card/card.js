import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import Rating from './stars'

const Card = ({ course }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const { apiGetImage } = Api()
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img src={apiGetImage(course.image)} />
        <h4>{truncate(course.title, 53)}</h4>
        <h5>{course.author.name}name</h5>
        <span className={styles.content_rating}>
          {course.rating}
          <Rating rating={course.rating} />
        </span>
        <p className={styles.price}>{course.price}$</p>
      </div>
    </div>
  )
}

export default Card
