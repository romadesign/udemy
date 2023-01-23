import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import styles from '@/styles/login.module.css'

const Login = () => {
  const { login } = useAuth()

  const [email, setEmail] = useState('romacode@gmail.com')
  const [password, setPassword] = useState('romacode')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)
  console.log(errors)

  const submitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Log in to your Udemy account</h3>

        <form onSubmit={submitForm} className={styles.form}>
          <div>
            <input
            className={styles.inputs}
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
            className={styles.inputs}
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button>Log in</button>
        </form>
        <span>
          or <Link href='/login'>Forgot Password</Link>
        </span>
        <div className={styles.authseparator}></div>
      </div>
    </div>
  )
}

export default Login
