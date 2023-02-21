import { Api } from '@/hooks/api'

import axios from '@/lib/axios'
import Rating from '@/components/GeneralCardComponent/stars'
import styles from '@/styles/detail.module.css'

const CourseDetail = ({ course }) => {
  const { apiGetImage } = Api()

  console.log(course)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content_one}>
            <div className={styles.content_title_description}>
              <h1>{course.course.title}</h1>
              <p>{course.course.description}</p>
            </div>
            <div className={styles.ratings}>
              <span>{course.course.rating}</span>
              <span>
                <Rating rating={course.course.rating} />
              </span>
            </div>
            <div className={styles.content_data_course}>
              <span>Created by {course.course.author.name}</span>
              <div className={styles.language}>
                <span>Published: {course.course.created}</span>
                <span>Language: {course.course.language}</span>
              </div>
            </div>
            <div className={styles.course_landing_page_sidebar_container}>
              <div>
                <img src={apiGetImage(course.course.image)} />
                <div>
                  <p className={styles.price}>{course.course.price}$</p>
                </div>
                <div className={styles.content_button}>
                  <button>Go to cart</button>
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_two}>
            <div className={styles.content_two_title_learn}>
              <div className={styles.contet_what_learnt}>
                <h2>What you'll learn</h2>
                <div className={styles.content_title_what_learnt}>
                  {course.course.what_learnt.map(item => (
                    <>
                      <span> ✓ {item.title}</span>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_includes}>
              <div className={styles.content_includes_data}>
                <h2>This course includes:</h2>
                <div className={styles.content_span}>
                  <span>5 hours on-demand video</span>
                  <span>1 downloadable resource</span>
                  <span>Access on mobile and TV</span>
                  <span>1 article</span>
                  <span>Full lifetime access</span>
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_four}>
            <div className={styles.content_four_data}>
              <div className={styles.contet_four_data_requirements}>
                <h2>Requirements</h2>
                <div>
                  <ul>
                    <li>
                      This course is designed for users that already have a
                      basic working knowledge of Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_five}>
            <div className={styles.contet_five_row}>
              <div className={styles.content_five_data}>
                <h2>Instructor</h2>
                <div>
                  <span className={styles.content_five_data_author}>
                    {course.course.author.name}
                  </span>
                  <div className={styles.content_five_data_rating_img}>
                    <img src='https://www.seekpng.com/png/small/423-4230959_renders-esferas-del-dragn-taringa-render-de-esfera.png' />
                    <div className={styles.content_five_data_instructor}>
                      <span>
                        &#9733; {course.course.rating} Instructor Rating
                      </span>
                      <span>1,838,534 Students</span>
                      <span>45 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_sevent}>
            <div className={styles.content_sevent_row}>
              <div>
                <h2>
                  &#9733; {course.course.rating} course rating .{' '}
                  {course.course.instructor_rating} ratings
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async context => {
  const { data: course } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/course/` + context.query.id
  )
  return {
    props: {
      course
    }
  }
}

export default CourseDetail
