import styles from '@/styles/cardDetail.module.css'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import { Api } from '@/hooks/api'
import { useCartItems} from '@/context/cartItemsContext'

import Link from 'next/link'

const CardDetail = ({
  courseId,
  course,
  setModalDetail,
  courseExistsInWishlist,
  fCourseDetail,
  courseExistsinlearning,
  modalDetail
}) => {
  const { addCourseToMyLibrary, deleteCourseToMyLibrary } = Api()
  const { itemsCart, addItem} = useCartItems()

  const { getCookie } = useAuth()
  const router = useRouter()
  const [date, setDate] = useState()

  const [courseExistsInCart, setCourseExistsInCart] = useState(
    itemsCart !== undefined && itemsCart.some(item => item.id === courseId)
  )

  const [userId, setUserId] = useState(getCookie('account'))
  const month = course != undefined && course.created.slice(5, 7)
  const day = course != undefined && course.created.slice(8, 10)

  const mes = [
    { mes: 'January', id: '01' },
    { mes: 'February', id: '02' },
    { mes: 'March', id: '03' },
    { mes: 'April', id: '04' },
    { mes: 'May', id: '05' },
    { mes: 'June', id: '06' },
    { mes: 'July', id: '07' },
    { mes: 'August', id: '08' },
    { mes: 'September', id: '09' },
    { mes: 'Octuber', id: '10' },
    { mes: 'November', id: '11' },
    { mes: 'December', id: '12' }
  ]

  const onMouse = () => {
    setModalDetail(false)
    course = ''
  }

  const showDate = () => {
    const result = mes.filter(item => item.id == month)
    setDate(result)
  }

  const addWishlist = () => {
    const options = { course: course.id, user: parseInt(userId) }
    addCourseToMyLibrary(options)
    fCourseDetail(courseId)
  }

  const deletedWishlist = () => {
    const options = { course: course.id, user: parseInt(userId) }
    deleteCourseToMyLibrary(options)
    fCourseDetail(courseId)
  }

  const addItems = () => {
    
    var option = 1
    setModalDetail(false)
    addItem(course, option)
    if (modalDetail === false) {
      showDate()
      fCourseDetail(courseId)
      setModalDetail(true)
    }
  }


  return (
    <>
      {router.pathname !== '/my-courses/learning' && (
        <div
          key={course != undefined && course.id}
          onMouseEnter={showDate}
          onMouseLeave={onMouse}
          className={styles.content}
        >
          {courseExistsinlearning !== 'true' ? (
            <div>
              <h6
                className={styles.title}
                onClick={() => {
                  router.push(
                    router.pathname == '/'
                      ? {
                          pathname: '/course/[id]',
                          query: { id: course.id },
                          as: 'asdas'
                        }
                      : {
                          pathname: '/course/[id]',
                          query: { id: course.course.id },
                          as: 'asdasdasasdaas'
                        }
                  )
                }}
              >
                {course != undefined && course.title}
              </h6>
              <div>
                {date !== undefined &&
                  date.map(item => (
                    <div className={styles.date} key={item.id}>
                      {item.mes} {day}
                    </div>
                  ))}
              </div>
              <span className={styles.description}>
                {course != undefined && course.description}
              </span>
              <div className={styles.what_learnt}>
                {course != undefined &&
                  course.what_learnt.slice(0, 3).map(item => (
                    <>
                      <div className={styles.what_learnt_list}>
                        {' '}
                        &#10003; {item.title}
                      </div>
                    </>
                  ))}
              </div>
              <div className={styles.content_heart}>
                {courseExistsInCart ? (
                  <Link className={styles.button} href={'/cart'}>
                    Go to cart
                  </Link>
                ) : (
                  <button
                    className={
                      courseExistsinlearning !== 'true'
                        ? styles.button
                        : styles.button_learning
                    }
                    onClick={addItems}
                  >
                    Add cart
                  </button>
                )}
                {courseExistsInWishlist == 'false' ? (
                  <span className={styles.icon} onClick={addWishlist}>
                    &#x2661;{' '}
                  </span>
                ) : (
                  <span className={styles.icon2} onClick={deletedWishlist}>
                    {' '}
                    &#x2665;{' '}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div>
              You enrolled in this course on Apr 6, 2022
              <button
                className={
                  courseExistsinlearning !== 'true'
                    ? styles.button
                    : styles.button_learning
                }
              >
                Go to course
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default CardDetail
