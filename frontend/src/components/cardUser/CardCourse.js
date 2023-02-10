import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Card from '../GeneralCardComponent/card'
import { useRouter } from 'next/router'
import styles from '@/styles/course.module.css'
import stylesP from '@/styles/pagination.module.css'

const CardCourse = ({ data, user }) => {
  const slider = useRef()
  const router = useRouter()
  const [courses, setCourse] = useState()
  const payload = {
    p: 1,
    page_size: 8,
    sort: 'id'
  }



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
        <div className={stylesP.container}>
          <div>
          <button className={stylesP.button_left} >
              &#60;
            </button>
          </div>
          <div>
            1 - 2 -3 4
          </div>
          <div>
          <button className={stylesP.button_rigth} >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCourse
