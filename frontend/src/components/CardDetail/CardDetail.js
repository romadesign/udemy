import styles from '@/styles/cardDetail.module.css'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

const CardDetail = ({ course, setModalDetail, statusAddMyList }) => {
  const router = useRouter()

  const [date, setDate] = useState()

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
    const data = mes.filter(item => item.id == month)
    setDate(data)
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
          <h6 className={styles.title}>
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
            <button className={styles.button}>Add cart</button>
            {statusAddMyList == "false" ? (
              <span className={styles.icon}>&#x2661; </span>
            ) : (
              <span className={styles.icon2}> &#x2665; </span>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CardDetail
