import Link from 'next/link'
import { useEffect, useState, useRef, useMemo } from 'react'
import Card from '../GeneralCardComponent/card'
import Pagination from '../Pagination/Pagination'
import { useRouter } from 'next/router'
import styles from '@/styles/course.module.css'

const CardCourse = ({ data, user }) => {
  const slider = useRef()
  const router = useRouter()
  const [courses, setCourses] = useState([])
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()
  const [categoryList, setCategoryList] = useState([])
  const [payload, setPayload] = useState({
    p: 1,
    page_size: 8,
    sort: 'id',
    category: ''
  })

  useEffect(() => {
    getData()
  }, [payload])

  const getData = async () => {
    data(user, payload)
      .then(res => {
        setCourses(res.results.data)
        setNext(res.next)
        setPrevious(res.previous)
        setCategoryList(res.results.categoryList)
      })
      .catch(error => {
        console.error(error)
      })
  }
  const onchangeSelectCategory = e => {
    //change value payload.category
    setPayload({ ...payload, category: e })
  }

  const onchangeSelectectOrder = e => {
    //change value payload.sort
    setPayload({ ...payload, sort: e })
  }

  return (
    <div className={styles.container}>
      {router.pathname == '/my-courses/learning' && (
        <div className={styles.content_options}>
          <div>
            <div>Sort by</div>
            <div>
              <select
                onChange={event => onchangeSelectectOrder(event.target.value)}
              >
                <option value='id'>Recently Accessed</option>
                <option value='course__title'>Title A-to Z</option>
                <option value='-course__title'>Title Z-to A</option>
              </select>
            </div>
          </div>
          <div>
            <div>Filter by</div>
            <div>
              <select
                onChange={event => onchangeSelectCategory(event.target.value)}
              >
                <option value=''>Select option</option>

                {categoryList !== undefined &&
                  categoryList.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      )}
      <div
        className={
          router.pathname == '/'
            ? styles.button_left_rigth
            : styles.button_left_rigth_learning_wishlist
        }
      >
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => <Card key={id} course={course} />)}
        </div>
        <Pagination
          next={next}
          setNext={setNext}
          previous={previous}
          setPrevious={setPrevious}
          setCourse={setCourses}
        />
      </div>
    </div>
  )
}

export default CardCourse
