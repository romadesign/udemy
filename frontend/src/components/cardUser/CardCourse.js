import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import { useRouter } from 'next/router'
import styles from '@/styles/course.module.css'

const CardCourse = ({ data, user }) => {
  const router = useRouter()
  const [courses, setCourse] = useState()
  const payload = {
    p: 1,
    page_size: 4,
    sort: 'course__title'
  }


  const slider = useRef()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    data(user, payload)
      .then(function (res) {
        setCourse(res.results.data)
        console.log(res)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      {router.pathname == '/my-courses/learning' && (
        <div  className={styles.content_options}>
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
