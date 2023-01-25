import styles from '@/styles/category.module.css'
import CardCourse from './CardCourse'
import { Api } from '@/hooks/api'

const Categories = ({ category }) => {
  const { apiGetCoursesByCategories } = Api()

  const captureId = (cat) => {
    console.log('hola')
    console.log(cat)
  }

  return (
    <div  >
      <ul className={styles.content}>
        {category != undefined &&
          category.map(cat => <li key={cat.id} onClick={captureId(cat.name)} >{cat.name}</li>)}
      </ul>
      <CardCourse data={apiGetCoursesByCategories} />
    </div>
  )
}

export default Categories
