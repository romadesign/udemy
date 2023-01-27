import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import axios from '@/lib/axios'

const CardCourse = ({
  statusData,
  courses,
  next,
  previous,
  setCourses,
  setNext,
  setPrevious,
  categoryId
}) => {
  const slider = useRef()

  const { apiGetCoursesByCategories } = Api()

  const sliderLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 1200
  }

  const getCousePaginationNext = async () => {
    if (statusData == true) {
      const formData = new FormData()
      formData.append('category', 1)
      const data = await axios.post(next, formData)
      setCourses(data.data.results.data)
      setNext(data.data.next)
      setPrevious(data.data.previous)
    } else {
      const formData = new FormData()
      formData.append('category', categoryId)
      const data = await axios.post(next, formData)
      setCourses(data.data.results.data)
      setNext(data.data.next)
      setPrevious(data.data.previous)
    }
  }

  const sliderRigth = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 1200
    getCousePaginationNext()
  }

  return (
    <div className={styles.container}>
      <div className={styles.button_left_rigth}>
        <div>
          {previous !== null && (
            <button className={styles.button_left} onClick={sliderLeft}>
              &#60;
            </button>
          )}
        </div>
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => <Card key={id} course={course} />)}
        </div>
        <div>
          {next != null && (
            <button className={styles.button_rigth} onClick={sliderRigth}>
              &#62;
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardCourse
