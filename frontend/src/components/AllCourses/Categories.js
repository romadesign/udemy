import styles from '@/styles/category.module.css'
import CardCourse from './CardCourse'
import { Api } from '@/hooks/api'
import { useEffect, useState } from 'react'

const Categories = ({ category }) => {
  const { apiGetCoursesByCategories } = Api()
  const [courses, setCourses] = useState()

  const captureId = category_id => {
    apiGetCoursesByCategories(category_id)
      .then(function (res) {
        setCourses(res.results.data)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  return (
    <div>
      <ul className={styles.content}>
        {category != undefined &&
          category.map(cat => (
            <li key={cat.id} onClick={() => captureId(cat.id)}>
              {cat.name}
            </li>
          ))}
      </ul>
      <div className={styles.content_card_course}>
        <CardCourse
          data={apiGetCoursesByCategories}
          courses={courses}
          setCourses={setCourses}
        />
      </div>
    </div>
  )
}

export default Categories
