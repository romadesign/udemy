import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
const Card = ({ course }) => {
  const { apiGetImage } = Api()
  console.log(course)
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img width={230} height={140} src={apiGetImage(course.image)} />
        <h4>{course.title}</h4>
        <h5>{course.author.name}name</h5>
        <span>Rating {course.rating}</span>
        <p>Price {course.price}</p>
      </div>
    </div>
  )
}

export default Card
