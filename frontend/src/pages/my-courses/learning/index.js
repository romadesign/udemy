import CardCourseUser from '@/components/cardUser/CardCourse'
import { Api } from '@/hooks/api'
import { useAuth } from '@/hooks/auth'


const Learning = () => {
    const { apiMyAcquiredCourses } = Api()
    const { getCookie } = useAuth()

    return (
        <div >
            <CardCourseUser title={'mis cursos comprados'} data={apiMyAcquiredCourses} user={getCookie('account')} />
        </div>
    )
}

export default Learning
