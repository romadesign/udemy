import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import Rating from '../GeneralCardComponent/stars'
import { useRouter } from 'next/router'
import CardDetail from '../CardDetail/CardDetail'
import { useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const Card = ({ course }) => {
  const { apiGetImage, apiGetCourseDetailCard } = Api()
  const router = useRouter()
  const [modalDetail, setModalDetail] = useState(false)
  const [courseD, setCourseD] = useState()
  const [courseId, setCourseId] = useState(course.id)
  const [courseExistsInWishlist, setCourseExistsInWishlist] = useState()
  const [courseExistsinlearning, setCourseExistsinlearning] = useState()
 
  function truncate (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  const courseDetail = (course )=> {
    if (router.pathname != '/my-courses/learning') {
      setModalDetail(true)
      apiGetCourseDetailCard(course)
        .then(function (res) {
          console.log(res)
          setCourseExistsInWishlist(res.courseExistsInWishlist)
          setCourseExistsinlearning(res.courseExistsinlearning)
          setCourseD(res.course)
          // router.push("/")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  return (
    <>
      <div  className={styles.wrapper}>
        <div
          onMouseEnter={() =>
            courseDetail(router.pathname == '/' ? (course.id)  : (course.course.id)   )
          }
          className={styles.carousel}
        >
          <img
            src={apiGetImage(
              router.pathname == '/' ? course.image : course.course.image
            )}
          />

          <h4>
            {truncate(
              router.pathname == '/' ? course.title : course.course.title,
              40
            )}
          </h4>

          <h5>
            {router.pathname == '/'
              ? course.author.name
              : course.course.author.name}
          </h5>
          {router.pathname === '/' && (
            <>
              <span className={styles.content_rating}>
                {course.rating !== 0 && course.rating}
                <Rating rating={course.rating} />
              </span>
              <p className={styles.price}>{course.price}$</p>
            </>
          )}
          {router.pathname === '/my-courses/wishlist' && (
            <div>
              <span className={styles.content_rating}>
                {course.course.rating !== 0 && course.course.rating}
                <Rating rating={course.course.rating} />
              </span>
              <p className={styles.price}>{course.course.price}$</p>
            </div>
          )}
          {router.pathname === '/my-courses/learning' &&
            course.rating != undefined && (
              <span className={styles.content_rating}>
                {course.rating.rate_number}
                <Rating rating={course.rating.rate_number} />
              </span>
            )}
            {modalDetail == true && (
          <div className={styles.poppover}>
            <CardDetail 
            fCourseDetail={courseDetail} 
            courseId={courseId} 
            course={courseD} 
            modalDetail={modalDetail}
            setModalDetail={setModalDetail} 
            courseExistsInWishlist={courseExistsInWishlist}
            courseExistsinlearning={courseExistsinlearning}
            />
          </div>
        )}
        </div>
        
      </div>
    </>
  )
}

export default Card
