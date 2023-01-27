import axios from '@/lib/axios'

export const Api = () => {
  //CLIENT OPTIONS//
  //get Films
  const apiGetCourses = async () => {
    const data = await axios.get('/api/get-courses')
    return data.data
  }

  const getStudentsAreViewing = async (option) => {
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post('/api/getstudents-are-viewing', formData)
    return data.data
  }

  const getMySearch = async (option) => {
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post('/api/get-my-search', formData)
    return data.data
  }

  const apiGetMyLibrary = async (user) => {
    const formData = new FormData()
    formData.append('user', user)
    const data = await axios.post('/api/my-library', formData)
    return data.data
  }

  const apiGetCategories = async () => {
    const data = await axios.get('/api/get-category')
    return data.data
  }

  const apiGetCoursesByCategories = async (category, page) => {
    const formData = new FormData()
    formData.append('category', category)
    const data = await axios.post(`/api/get-course-by-category?p=${page}`, formData)
    return data.data
  }

  const apiMyAcquiredCourses = async (user, payload) => {
    const formData = new FormData()
    formData.append('user', user)
    const data = await axios.post(`/api/my-acquired-courses?p=${payload.p}&page_size=${payload.page_size}&sort=${payload.sort}`, formData,)
    return data.data
  }

  const apiGetImage = (img) => {
    const data = `http://localhost:8000${img}`
    return data
  }


  return {
    apiGetCourses,
    getStudentsAreViewing,
    getMySearch,
    apiGetMyLibrary,
    apiMyAcquiredCourses,
    apiGetCategories,
    apiGetCoursesByCategories,
    apiGetImage
  }
} 