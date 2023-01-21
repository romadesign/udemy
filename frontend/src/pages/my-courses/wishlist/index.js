import CardCourseUser from '@/components/cardUser/CardCourse'
import { Api } from '@/hooks/api'
import { useAuth } from '@/hooks/auth'


const Learning = () => {
    const { apiGetMyLibrary } = Api()
  const { user, getCookie} = useAuth()


    return (
        <div >
            <CardCourseUser title={'mi libreria'} data={apiGetMyLibrary} user={getCookie('account')} />
        </div>
    )
}

export default Learning
