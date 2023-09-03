import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'
import Rating from '../GeneralCardComponent/stars'
import { useRouter } from 'next/router'
import CardDetail from '../CardDetail/CardDetail'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useCartItems } from '@/context/cartItemsContext'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const Card = ({ course }) => {
  const { getCookie } = useAuth()
  const {
    apiGetImage,
    apiGetCourseDetailCard,
    addCourseToMyLibrary,
    deleteCourseToMyLibrary
  } = Api()
  const router = useRouter()
  const [modalDetail, setModalDetail] = useState(false)
  const [courseD, setCourseD] = useState()
  console.log(courseD)
  // const [courseId, setCourseId] = useState(router.pathname !== '/wishlist' ?  course.id : course.course.id)
  const [courseId, setCourseId] = useState(
    router.pathname !== '/my-courses/wishlist' ? course.id : course.course.id
  )

  const [userId, setUserId] = useState(getCookie('account'))

  const { itemsCart, addItem } = useCartItems()
  const [courseExistsInCart, setCourseExistsInCart] = useState(false)

  const [courseExistsInWishlist, setCourseExistsInWishlist] = useState('false')
  const [courseExistsinlearning, setCourseExistsinlearning] = useState()

  function truncate (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  useEffect(() => {
    //update botton add cart
    if (itemsCart && itemsCart.some(item => item.id === courseId)) {
      setCourseExistsInCart(true)
    } else {
      setCourseExistsInCart(false)
    }
  }, [itemsCart, courseId])

  const courseDetail = course => {
    if (router.pathname != '/my-courses/learning') {
      // setModalDetail(true)
      apiGetCourseDetailCard(course)
        .then(function (res) {
          setCourseExistsInWishlist(res.courseExistsInWishlist)
          setCourseExistsinlearning(res.courseExistsinlearning)
          setCourseD(res.course)
          console.log(res)

          // router.push("/")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const addWishlist = () => {
    const options = { course: course.id, user: parseInt(userId) }
    addCourseToMyLibrary(options)
    if (courseExistsInWishlist == 'false') {
      setCourseExistsInWishlist('true')
    } else {
      setCourseExistsInWishlist('false')
    }
  }

  const deletedWishlist = () => {
    const options = { course: course.id, user: parseInt(userId) }
    deleteCourseToMyLibrary(options)
    if (courseExistsInWishlist == 'true') {
      setCourseExistsInWishlist('false')
    } else {
      setCourseExistsInWishlist('true')
    }
  }

  const addItems = () => {
    var option = 1
    addItem(course, option)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div
          onMouseEnter={() =>
            courseDetail(router.pathname == '/' ? course.id : course.course.id)
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
              <div className={styles.what_learnt_hover}>
                {courseExistsinlearning !== 'true' ? (
                  <>
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
                          <span
                            className={styles.icon2}
                            onClick={deletedWishlist}
                          >
                            {' '}
                            &#x2665;{' '}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
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
