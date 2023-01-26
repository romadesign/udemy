import { Api } from '@/hooks/api'
import { useEffect, useState } from 'react'
import Categories from './Categories'
import styles from '@/styles/category.module.css'

const AllCourses = () => {
  const { apiGetCategories } = Api()

  const [categories, setCategories] = useState()

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
        <p>
          Choose from 213,000 online video courses with new additions published
          every month
        </p>
        <div>
          <Categories category={categories} />
        </div>
      </div>
    </div>
  )
}

export default AllCourses
