import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import axios from '@/lib/axios'

const CardCourse = ({
  data,
  page,
  statusData,
  setStatusData,
  courses,
  next,
  previous,
  setCourses,
  setNext,
  setPrevious,
  categoryId
}) => {
  const slider = useRef()

  useEffect(() => {
    if (courses == undefined) {
      data(1, page)
        .then(function (res) {
          setCourses(res.results.data)
          setNext(res.next)
          setPrevious(res.previous)
          setStatusData(true)
          console.log('llegue')
        })
        .catch(function (error) {
          // console.log(error)
        })
    }
  }, [])

  const sliderLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 1200
  }

  const getCousePaginationNext = async () => {
    page = page + 1
    console.log(page)
    if (statusData == true) {
      data(1, page)
        .then(function (res) {
          setCourses(res.results.data)
          setNext(res.next)
          setPrevious(res.previous)
        })
        .catch(function (error) {
          // console.log(error)
        })
    } else {
      data(categoryId, page)
        .then(function (res) {
          setCourses(res.results.data)
          setNext(res.next)
          setPrevious(res.previous)
        })
        .catch(function (error) {
          // console.log(error)
        })
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
