import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const { login } = useAuth()

  const [email, setEmail] = useState('romacode@gmail.com')
  const [password, setPassword] = useState('romacode')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <>
      <section>
        <div>
          <h4>Iniciar sesión</h4>

          <form onSubmit={submitForm}>
            <input
              type='email'
              placeholder='Dirección de correo electronico'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button>Iniciar sesión</button>
          </form>
          <div>
            <div>
              <input type='checkbox' />
              <span>Recúerdame</span>
            </div>
            <h6>¿Necesitas ayuda? </h6>
          </div>
          <h5>
            ¿Todavía sin Netflix? <a href='/'>Suscríbete ya.</a>
          </h5>
          <h6>
            Esta página utiliza Google reCAPTCHA para garantizar que no eres un
            robot.
          </h6>
        </div>
      </section>
    </>
  )
}

export default Login
