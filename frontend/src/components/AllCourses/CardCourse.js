import { useEffect, useState } from "react"

const CardCourse = ({data}) => {

  const [category, setCategory] = useState(2)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    data(category)
      .then(function (res) {
        setCategory(res.results.data)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  return (
    <div>
      <h3>asd</h3>
      <div >
        <div >
          hello
        </div>
      </div>
    </div>
  )
}

export default CardCourse
