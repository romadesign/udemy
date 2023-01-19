import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { Api } from '@/hooks/api'
import Card from './card'
import styles from '@/styles/course.module.css'

const CardCourse = ({title}) => {
  const { apiGetCourses } = Api()
  const [courses, setCourse] = useState()
  console.log(courses)

  const slider = useRef()

  useEffect(() => {
    getCourse()
  }, [])

  const getCourse = async () => {
    apiGetCourses()
      .then(function (res) {
        setCourse(res.data.courses)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const sliderLeft = () => {
    // var slider = document.getElementById('slider' + rowId)
    // slider.scrollLeft = slider.scrollLeft - 1200
    slider.current.scrollLeft = slider.current.scrollLeft - 1200
  }

  const sliderRigth = () => {
    // var slider = document.getElementById('slider' + rowId)
    // slider.scrollLeft = slider.scrollLeft + 1200
    console.log('click', slider.scrollLeft + 1200)
    slider.current.scrollLeft = slider.current.scrollLeft + 1200
  }

  return (
    <div>
    <h3>{title}</h3>
      <div className={styles.button_left_rigth}>
      <div>
        <button className={styles.button_left} onClick={sliderLeft}>&#60;</button>
      </div>
      <div ref={slider} className={styles.content}>
        {courses != undefined &&
          courses.map((course, id) => <Card key={id} course={course} />)}
      </div>
      <div>
        <button className={styles.button_rigth}  onClick={sliderRigth}>&#62;</button>
      </div>
    </div>
    </div>
  )
}

export default CardCourse
