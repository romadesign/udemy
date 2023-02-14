import { Api } from '@/hooks/api'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import Categories from './Categories'
import styles from '@/styles/category.module.css'

const AllCourses = () => {
  const { apiGetCategories, apiGetCoursesByCategories } = Api()
  const { getCookie } = useAuth()

  const [categories, setCategories] = useState()
  const [user, setUser] = useState()

  console.log(getCookie('account'))

  useEffect(() => {
    getAllCategories()
  }, [])

  const getAllCategories = async () => {
    apiGetCategories()
      .then(function (res) {
        setCategories(res)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }
  return (
    <div className={styles.container}>
      <div>
        <h1>A broad selection of courses</h1>
        <p className={styles.content_category_text_p}>
          Choose from 213,000 online video courses with new additions published
          every month
        </p>
        <div>
          <Categories category={categories} getData={apiGetCoursesByCategories}/>
        </div>
      </div>
    </div>
  )
}

export default AllCourses
