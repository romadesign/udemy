import axios from '@/lib/axios'

export const Api = () => {
  //CLIENT OPTIONS//
  //get Films
  const apiGetCourses = async () => {
    const data = await axios.get('/api/get-courses')
    return data
  }

  const apiGetImage = (img) => {
    const data = `http://localhost:8000/${img}`
    return data
  }


  return {
    apiGetCourses,
    apiGetImage,
  }
}