import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'

const CardCourse = ({ courses, setCourses }) => {
  const { apiGetCoursesByCategories } = Api()

  useEffect(() => {
    if (courses == undefined) {
      apiGetCoursesByCategories(1)
        .then(function (res) {
          setCourses(res.results.data)
        })
        .catch(function (error) {
          // console.log(error)
        })
    }
  }, [])

  const slider = useRef()

  return (
    <div className={styles.container}>
      <div className={styles.button_left_rigth}>
        <div>
          <button className={styles.button_left}>
            &#60;
          </button>
        </div>
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => <Card key={id} course={course} />)}
        </div>
        <div>
          <button className={styles.button_rigth} >
            &#62;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCourse
