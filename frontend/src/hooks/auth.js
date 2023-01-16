import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter()

  //Get user data
  const { data: user, error } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.response.data.detail)
      })
  )

  const register = async ({ setErrors, ...props }) => {
    setErrors([])
    axios
      .post('/api/register', props)
      .then(res => {
        console.log('llegue')
        console.log(res.data, message)
      })
      .catch(error => {
        console.log(error.response.data)
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
        console.log('llegue')
      })
      .catch(error => {
        setErrors(error.response.data.detail)
      })
  }

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated)
    }
    if (middleware === 'auth' && error) {
      logout()
    }
  }, [user, error])

  return {
    user,
    login,
    register
  }
}
