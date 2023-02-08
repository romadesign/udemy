import styles from '@/styles/content.module.css'
import CardCourseUser from '@/components/cardUser/CardCourse'
import { Api } from '@/hooks/api'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Content = ({ title }) => {
  const router = useRouter()
  const { apiMyAcquiredCourses, apiGetMyLibrary } = Api()
  const { getCookie } = useAuth()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>{title}</h1>
          <div className={styles.navbar}>
            <ul>
              <li
                className={
                  router.pathname == '/my-courses/learning'
                    ? styles.link
                    : styles.linkNone
                }
              >
                <Link href='/my-courses/learning'>All courses</Link>
              </li>
              <li
                className={
                  router.pathname == '/my-courses/wishlist'
                    ? styles.link
                    : styles.linkNone
                }
              >
                <Link href='/my-courses/wishlist'>Wishlist</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {router.pathname == '/my-courses/wishlist' && (
        
        <CardCourseUser data={apiGetMyLibrary} user={getCookie('account')} />
      )}
      {router.pathname == '/my-courses/learning' && (
        <CardCourseUser
          data={apiMyAcquiredCourses}
          user={getCookie('account')}
        />
      )}
    </>
  )
}

export default Content
