import { Api } from "@/hooks/api"
import { useEffect, useState } from "react"
import Categories from "./Categories"

const AllCourses = () => {
  const { apiGetCategories } = Api()

  const [categories, setCategories] = useState()
  console.log(categories)
  useEffect(() =>{
    getAllCategories()
  },[])

  const getAllCategories = async () => {
    apiGetCategories()
      .then(function (res) {
        setCategories(res)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }
  return (
    <div >
      <div>
        <h1>A broad selection of courses</h1>
        <p>Choose from 213,000 online video courses with new additions published every month</p>
        <div>
          <Categories category={categories}  />
        </div>
      </div>
    </div>
  )
}

export default AllCourses

