import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'

const Urls = () => {
	const { logout } = useAuth()
	const router = useRouter()

	const [status, setStatus] = useState()
	const [user, setUser] = useState()
	const [modalProfile, setModalProfile] = useState(false)

	useEffect(() => {
		const getUser = () => {
			axios.get('/api/user')
				.then(res => {
					setStatus(res.status)
					setUser(res.data)
				})
				.catch(error => {
					setStatus(error.response.status)
				})
		}
		getUser()
	}, [])

	const logOut = () => {
		logout()
		window.location.reload('/')
	}

	const onMouseEnter = () => setModalProfile(true)
	const onMouseLeave = () => setModalProfile(false)


	return (
		<div className={styles.content_two}>
			<Link href='/login'>
				<span>Teach on udemy</span>
			</Link>
			{
				status === 200 ?
					(
						<>
							<Link href='/my-courses/learning'>
								<span>My learning</span>
							</Link>
							<Link href='/my-courses/wishlist' className={styles.heart}>
								&#9825;
							</Link>
							<Link href='/'>
								<img width={25} src='/img/carrito.svg' />
							</Link>
							<Link className={styles.circulo} href='/' onMouseEnter={onMouseEnter}>
								<h2>{user !== undefined && user.name[0]}</h2>
							</Link>
						</>
					) : (
						<>
							<Link href='/'>
								<img width={25} src='/img/carrito.svg' />
							</Link>
							<Link href='/login'>
								<button className={styles.login}>Log in</button>
							</Link>
							<Link href='/register'>
								<button className={styles.register}>Sign up</button>
							</Link>
						</>
					)
			}

			{
				modalProfile !== false &&
				<div className={styles.content_profile} onMouseLeave={onMouseLeave}>
					<div className={styles.content_profile_name}>
						<Link className={styles.circulo_profile} href='/'>
							<h2>{user !== undefined && user.name[0]}</h2>
						</Link>
						<div>
							<h3>{user !== undefined && user.name}</h3>
							<p>{user !== undefined && user.email}</p>
						</div>
					</div>
					<div className={styles.authseparator}></div>
					<div className={styles.content_options_profile}>
						<span onClick={logOut} >
							Log out
						</span>
					</div>
				</div>
			}

		</div>
	)
}





export default Urls
