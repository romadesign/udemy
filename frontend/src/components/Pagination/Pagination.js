import stylesP from '@/styles/pagination.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'

const Pagination = ({ next, setNext, previous, setPrevious, setCourse, page, setPage }) => {
  const router = useRouter()
  const { logout, user } = useAuth()

  const getCousePaginationNext = async () => {
    setCourse([])
    console.log('hice click')

    const formData = new FormData()
    formData.append('user', user.data.id)
    const data = await axios.post(`${next}`, formData)
    setCourse(data.data.results.data)
    setNext(data.data.next)
    setPrevious(data.data.previous)
    setPage(page + 1)
  }

  const getCousePaginationPrevious = async () => {
    console.log('hice click')
    setCourse([])
    const formData = new FormData()
    formData.append('user', user.data.id)
    const data = await axios.post(`${previous}`, formData)
    setCourse(data.data.results.data)
    setNext(data.data.next)
    setPrevious(data.data.previous)
    setPage(page - 1)
  }

  return (
    <div className={stylesP.container}>
      {previous !== null && (
        <div>
          <button
            className={stylesP.button_left}
            onClick={getCousePaginationPrevious}
          >
            &#60;
          </button>
        </div>
      )}

      <div className={stylesP.content_page}>{page}</div>
      <div>
        {next != null && (
          <button
            className={stylesP.button_rigth}
            onClick={getCousePaginationNext}
          >
            &#62;
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
