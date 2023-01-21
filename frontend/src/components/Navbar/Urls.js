import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const Urls = () => {
	const [status, setStatus] = useState()
	const [user, setUser] = useState()

	useEffect(() => {
		const getUser = async => {
			axios.get('/api/user')
				.then(res => {
					setStatus(res.status)
					setUser(res.data.name[0].toUpperCase())
				})
				.catch(error => {
					setStatus(error.response.status)
				})
		}
		getUser()
	}, [])


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
							<Link className={styles.circulo} href='/'>
								<h2>{user}</h2>
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
		</div>
	)
}





export default Urls
