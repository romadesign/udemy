import styles from '@/styles/category.module.css'
import CardCourse from './CardCourse'
import { Api } from '@/hooks/api'
import { useEffect, useState } from 'react'

const Categories = ({ category }) => {
  const { apiGetCoursesByCategories } = Api()
  const [courses, setCourses] = useState()
  const [next, setNext] = useState()
  console.log(next)

  const [previous, setPrevious] = useState()
  const [count, setCount] = useState()
  const [categorySelected, setCategorySelected] = useState()
  const [statusData, setStatusData] = useState(false)
  console.log(statusData)
  useEffect(() => {
    if (courses == undefined) {
      apiGetCoursesByCategories(1)
        .then(function (res) {
          setCourses(res.results.data)
          setNext(res.next)
          setPrevious(res.previous)
          setStatusData(true)
        })
        .catch(function (error) {
          // console.log(error)
        })
    }
  }, [])

  const captureId = category_id => {
    apiGetCoursesByCategories(category_id)
      .then(function (res) {
        setCourses(res.results.data)
        setNext(res.next)
        setPrevious(res.previous)
        setCount(res.count)
        setCategorySelected(category_id)
        setStatusData(false)
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
          statusData={statusData}
          courses={courses}
          next={next}
          previous={previous}
          setCourses={setCourses}
          setNext={setNext}
          setPrevious={setPrevious}
          categoryId={categorySelected}
        />
      </div>
    </div>
  )
}

export default Categories
