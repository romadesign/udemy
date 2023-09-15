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
  const [count, setCount] = useState()
  const [page_size,  setPageSise ] = useState('page_size=5')


  console.log(count)
  useEffect(() => {
    getCourse()

  }, [])

  const getCourse = async () => {
    setCourse([])
    data(option, page_size)
      .then(function (res) {
        setCourse(res.results.data)
        setNext(res.next)
        setPrevious(res.previous)
        setCount(res.count)
        
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  const getCousePaginationPrevious = async () => {
    setCourse([])
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post(previous, formData)
    setCourse(data.data.results.data)
    setNext(data.data.next)
    setPrevious(data.data.previous)
  }

  const getCousePaginationNext = async () => {
    setCourse([])
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post(`${next}&${page_size}`, formData)
    setCourse(data.data.results.data)
    setNext(data.data.next)
    setPrevious(data.data.previous)
    
  }

  const sliderLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 1200
    getCousePaginationPrevious()
  }

  const sliderRigth = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 1200
    getCousePaginationNext()
  }

  

  return (
    <div  className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.button_left_rigth}>
        {/* Button */}
        <div>
          {( previous != null &&
            <button className={styles.button_left} onClick={sliderLeft}>
              &#60;
            </button>
          )}
        </div>
        {/* content */}
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => (
              <div key={id} className={styles.flexItem}>
                <Card key={id} course={course} />
              </div>
            ))}
        </div>
        {/* Button */}
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
