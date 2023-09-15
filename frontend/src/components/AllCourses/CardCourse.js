import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import styles from '@/styles/course.module.css'

const CardCourse = ({
  getData,
  page,
  setPage,
  statusData,
  courses,
  next,
  previous,
  setCourses,
  setNext,
  setPrevious,
  categoryId,
  setStatusData
}) => {
  const slider = useRef()


  const getCousePaginationPrevious = async () => {
    page = page - 1
    setCourses([])
    setPage(page)
    if (statusData == 'true') {
      getData(1, page)
        .then(function (res) {
          setCourses(res.results.data)
          setNext(res.next)
          setPrevious(res.previous)
        })
        .catch(function (error) {
          // console.log(error)
        })
    } else {
      getData(categoryId, page)
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

  const sliderLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 1200
    getCousePaginationPrevious()
  }

  const getCousePaginationNext = async () => {
    page = page + 1
    setPage(page)
    setCourses([])
    if (statusData == true) {
      getData(1, page)
        .then(function (res) {
          setCourses(res.results.data)
          // setCourses(prevResults => [...prevResults, ...res.results.data]) 
          setNext(res.next)
          setPrevious(res.previous)
        })
        .catch(function (error) {
          // console.log(error)
        })
    } else {
      getData(categoryId, page)
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

  useEffect(() => {
    if (courses == undefined) {
      setCourses([])
      let categoryIdGet = 1
      getData(categoryIdGet, page)
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

  const sliderRigth = () => {
    getCousePaginationNext()
    const e = (slider.current.scrollLeft = slider.current.scrollLeft + 500)
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
            courses.map((course, id) => (
              <div key={id} className={styles.flexItem}>
                <Card key={id} course={course} />
              </div>
            ))}
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
