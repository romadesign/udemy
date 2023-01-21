import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import CardCourse from '@/components/card/CardCourse'
import CardCourseUser from '@/components/cardUser/CardCourse'
import styles from '@/styles/course.module.css'
import { Api } from '@/hooks/api'


export default function Home() {
  const { apiGetCourses, apiGetMyLibrary, apiMyAcquiredCourses } = Api()
  const { user, getCookie} = useAuth()
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          {user ? (
                  <a >no login</a>
              ) : (
                <>
                    <a >login</a>
                </>
              )}
        </div>
      <CardCourse title={'Cursos'} data={apiGetCourses}/>
      <CardCourseUser title={'mi libreria'} data={apiGetMyLibrary} user={getCookie('account')}/>
      <CardCourseUser title={'mis cursos comprados'} data={apiMyAcquiredCourses} user={getCookie('account')}/>
    </>
  )
}
