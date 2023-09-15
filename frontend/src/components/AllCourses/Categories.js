import styles from '@/styles/category.module.css'
import CardCourse from './CardCourse'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Categories = ({ category, getData }) => {
  const [courses, setCourses] = useState()
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()
  const [count, setCount] = useState()
  const [categorySelected, setCategorySelected] = useState()
  const [statusData, setStatusData] = useState(false)
  const [page, setPage] = useState(1)
  const [activateLinkClick, setActivateLinkClick] = useState(false)

  const captureId = category_id => {
    setCourses([])
    let page = 1
    setPage(page)
    getData(category_id, page)
      .then(function (res) {
        setCourses(res.results.data)
        setNext(res.next)
        setPrevious(res.previous)
        setCount(res.count)
        setCategorySelected(category_id)
        setStatusData(false)
        setActivateLinkClick(true)
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  return (
    <div>
      <ul className={styles.content}>
        {category != undefined &&
          category.map(cat => (
            <li
              key={cat.id}
              className={
                activateLinkClick === true
                  ? (categorySelected === cat.id ? styles.statusOptionTrue : "")
                  : cat.id === 1 ? styles.statusOptionTrue : ""
              }
              onClick={() => captureId(cat.id)}
            >
              {cat.name}
            </li>
          ))}
      </ul>
      <div className={styles.content_card_course}>
        <CardCourse
          getData={getData}
          page={page}
          setPage={setPage}
          statusData={statusData}
          courses={courses}
          next={next}
          previous={previous}
          setCourses={setCourses}
          setNext={setNext}
          setPrevious={setPrevious}
          categoryId={categorySelected}
          setStatusData={setStatusData}
        />
      </div>
    </div>
  )
}

export default Categories
