import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import Pagination from '../Pagination/Pagination'
import { useRouter } from 'next/router'
import styles from '@/styles/course.module.css'

const CardCourse = ({ data, user }) => {
  const slider = useRef()
  const router = useRouter()
  const [courses, setCourse] = useState()
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()

  const [payload, setPayload] = useState({
    p: 1,
    page_size: 8,
    sort: 'id',
    category: ""
  }) 


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    data(user, payload)
      .then(function (res) {
        setCourse(res.results.data)
        setNext(res.next)
        setPrevious(res.previous)
        console.log(res)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      {router.pathname == '/my-courses/learning' && (
        <div className={styles.content_options}>
          <div>
            <div>Sort by</div>
            <div>
              <select>
                <option>Recently Accessed</option>
                <option>Title A-to Z</option>
                <option>Title Z-to A</option>
              </select>
            </div>
          </div>
          <div>
            <div>Filter by</div>
            <div>
              <select>
                <option>Categories</option>
                <option>Title A-to Z</option>
                <option>Title Z-to A</option>
              </select>
            </div>
          </div>
        </div>
      )}
      <div className={router.pathname == '/' ? styles.button_left_rigth : styles.button_left_rigth_learning_wishlist}>
        <div ref={slider} className={styles.content}>
          {courses != undefined &&
            courses.map((course, id) => <Card key={id} course={course} />)}
        </div>
          <Pagination 
            next={next}
            setNext={setNext}
            previous={previous}
            setPrevious={setPrevious}
            setCourse={setCourse}
          />
      </div>
    </div>
  )
}

export default CardCourse
