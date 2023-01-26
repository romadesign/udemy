import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'

import styles from '@/styles/course.module.css'

const CardCourse = ({ title, data, user }) => {
  const [courses, setCourse] = useState()

  const payload = {
    'p' : 1,
    'page_size' : 4,
    'sort' : 'course__title'
  }

  const slider = useRef()

  useEffect(() => {
    getMyLibrary()
  }, [])

  const getMyLibrary = async () => {
    data(user, payload)
      .then(function (res) {
        setCourse(res.results.data)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.button_left_rigth}>
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => <Card key={id} course={course} />)}
        </div>
      </div>
    </div>
  )
}

export default CardCourse
