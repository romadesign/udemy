import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

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
    <div>
      <form onSubmit={submitForm}>
        {/* username */}
        <div>
          <input
            id='username'
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)}
            required
          />
        </div>

        {/* Name */}
        <div>
          <input
            id='name'
            type='text'
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <input
            id='email'
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <input
            id='password'
            type='password'
            value={password}
            className='block mt-1 w-full'
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
