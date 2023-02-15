import styles from '@/styles/cardDetail.module.css'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import { Api } from '@/hooks/api'
import {useLocalStorage}  from '@/hooks/useLocalStorage'

const CardDetail = ({
  courseId,
  course,
  setModalDetail,
  courseExistsInWishlist,
  fCourseDetail,
  courseExistsinlearning
}) => {
  const { addCourseToMyLibrary, deleteCourseToMyLibrary } = Api()
  const { getValue, saveValue } = useLocalStorage()
  const { getCookie } = useAuth()
  const router = useRouter()
  const [date, setDate] = useState()
  const [item, setItem] = useState([]);
  const [userId, setUserId] = useState(getCookie('account'))
  const month = course != undefined && course.created.slice(5, 7)
  const day = course != undefined && course.created.slice(8, 10)

  console.log(course)

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
    const data = mes.filter(item => item.id == month)
    setDate(data)
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


  //add items cart localstorage
  useEffect(() => { //utilizar useEffect para que actulice la data si no solo lo remplaza en ves de agregar
    const data = getValue('itemsCart');
    setItem(data || []);
  }, []);

  const addItem = () => {
    const newData = [...item, course];
    saveValue('itemsCart', newData);
  };

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
                <button
                  className={
                    courseExistsinlearning !== 'true'
                      ? styles.button
                      : styles.button_learning
                  }
                  onClick={addItem}
                >
                  Add cart
                </button>
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
              >Go to course</button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default CardDetail
