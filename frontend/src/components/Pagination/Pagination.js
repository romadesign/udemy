import stylesP from '@/styles/pagination.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'

const Pagination = ({ next, setNext, previous, setPrevious, setCourse}) => {
  const router = useRouter()
  const { logout, user } = useAuth()

  const getCousePaginationNext = async () => {
    const formData = new FormData()
    formData.append('user', user.data.id)
    const data = await axios.post(`${next}`, formData)
    setCourse(data.data.results.data)
    setNext(data.data.next)
    setPrevious(data.data.previous)
  }

  const getCousePaginationPrevious = async () => {
    const formData = new FormData()
    formData.append('user', user.data.id)
    const data = await axios.post(`${previous}`, formData)
    setCourse(data.data.results.data)
    setNext(data.data.next)
    setPrevious(data.data.previous)
  }

  return (
    <div className={stylesP.container}>
      {previous !== null &&
        (<div>
          <button className={stylesP.button_left} onClick={getCousePaginationPrevious} >
            &#60;
          </button>
        </div>)
      }

      <div>
        1 - 2 -3 4
      </div>
      <div>
        {
          next != null && (
            <button className={stylesP.button_rigth} onClick={getCousePaginationNext}>
              &#62;
            </button>
          )
        }

      </div>
    </div>
  )
}

export default Pagination
