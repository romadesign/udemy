import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import styles from '@/styles/course.module.css'
import axios from '@/lib/axios'

const CardCourse = ({ title, data, option }) => {
  const slider = useRef()
  const [courses, setCourse] = useState()
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()

  useEffect(() => {
    getCourse()
  }, [])

  const getCourse = async () => {
    data(option)
      .then(function (res) {
        setCourse(res.results.data)
        setNext(res.next)
        console.log(res)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  const getCousePaginationNext = async () => {
    console.log('llegue')
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post(next, formData)
    console.log(data)
  }

  const sliderLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 1200
  }

  const sliderRigth = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 1200
    getCousePaginationNext()
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.button_left_rigth}>
        <div>
          <button className={styles.button_left} onClick={sliderLeft}>
            &#60;
          </button>
        </div>
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => <Card key={id} course={course} />)}
        </div>
        <div>
          <button className={styles.button_rigth} onClick={sliderRigth}>
            &#62;
          </button>
        </div>
        aqui
      </div>
    </div>
  )
}

export default CardCourse
