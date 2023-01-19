import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import styles from '@/styles/register.module.css'

const Register = () => {
  const { register } = useAuth()

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()

    register({
      username,
      name,
      email,
      password,
      role,
      setErrors
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Sign up and start learning</h3>
        <form onSubmit={submitForm} className={styles.form}>
          {/* username */}
          <div>
            <input
              className={styles.inputs}
              id='username'
              type='text'
              value={username}
              onChange={event => setUsername(event.target.value)}
              required
              placeholder='User name'
            />
          </div>

          {/* Name */}
          <div>
            <input
              className={styles.inputs}
              id='name'
              type='text'
              value={name}
              onChange={event => setName(event.target.value)}
              required
              placeholder='Full name'
            />
          </div>

          {/* Email Address */}
          <div>
            <input
              className={styles.inputs}
              id='email'
              type='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              placeholder='Email'
            />
          </div>

          {/* Password */}
          <div>
            <input
              className={styles.inputs}
              id='password'
              type='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              placeholder='Password'
            />
          </div>
          <button>Sing up</button>
        </form>
        <div class={styles.authseparator}></div>
        <span>
          Already have an account? <Link href='/login'>Log in</Link>
        </span>
      </div>
    </div>
  )
}

export default Register
