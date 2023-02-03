import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import CardCourse from '@/components/card/CardCourse'
import { Api } from '@/hooks/api'
import AllCourses from '@/components/AllCourses/AllCourses'
import Banner from '@/components/Banner/Banner'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const { getStudentsAreViewing, getMySearch  } = Api()
  const { user } = useAuth()
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner user={user} />
      <AllCourses />
      <CardCourse title={'Students are viewing'} data={getStudentsAreViewing} option={5}/>
      {/* guardar en el localstorage el dato que ingreso en el buscador y cuando hace click en un curso */} 
      <CardCourse title={'Because you searched for'} data={getMySearch} option={'django'}/>
      {/*crear nueva columna en user y crear nueva tabla con los tipos de profesión*/}
      {/*capturar la profesión del user y buscar cursos relacionandos*/}
      <CardCourse title={'Popular for aspiring'} data={getMySearch} option={'development'}/>
    </>
  )
}
