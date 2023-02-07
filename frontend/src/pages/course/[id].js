import { Api } from '@/hooks/api'
import axios from '@/lib/axios'

const CourseDetail = ({ course }) => {


  console.log(course)

  return (
    <>
      <div>{course.course.title}</div>
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
