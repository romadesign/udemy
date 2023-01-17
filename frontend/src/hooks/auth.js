import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({} = {}) => {
  const router = useRouter()

  //cookies save
  const setCookie = (key, value) => {
    if (getCookie('id') == null) {
      document.cookie = key + '=' + value + '; Path=/;'
    }
    if (getCookie('type') == null) {
      document.cookie = key + '=' + value + '; Path=/;'
    } else {
      document.cookie = key + '=' + value + '; Path=/;'
    }
  }

  //cookie delete
  const deleteCookie = name => {
    if (getCookie('id')) {
      document.cookie =
        name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }
    if (getCookie('type')) {
      document.cookie =
        name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }
  }

  //cookie getdata
  function getCookie (name) {
    if (typeof window !== 'undefined') {
      var value = '; ' + document.cookie
      var parts = value.split('; ' + name + '=')
      if (parts.length >= 2) return parts.pop().split(';').shift()
    }
  }

  //Get user data
  const { data: user, error } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => {
        setCookie('status_code_lg', res.status)
      })
      .catch(error => {
        if(error.response.status == 403){
          setCookie('status_code_lg', error.response.status)
          logout()
        }
      })
  )

  const register = async ({ setErrors, ...props }) => {
    setErrors([])
    axios
      .post('/api/register', props)
      .then(res => {
        console.log('llegue')
        if(res.data.status_code == 201){
          router.push('/login')
        }
      })
      .catch(error => {
        setErrors(error.response.data)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }) => {
    setErrors(null)
    setStatus(null)
    axios
      .post('/api/login', props)
      .then(res => {
        console.log('token', res.data.jwt)
        router.push('/')
      })
      .catch(error => {
        setErrors(error.response.data.detail)
      })
  }

  const logout = async () => {
    deleteCookie('jwt')
    deleteCookie('status_code_lg')
    await axios.post('/api/logout').then(() => {
      setCookie('status_code_lg', 403)
    })
  }


  return {
    user,
    login,
    register,
    logout,
    getCookie
  }
}
