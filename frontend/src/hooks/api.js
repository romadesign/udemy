import axios from '@/lib/axios'

export const Api = () => {
  //CLIENT OPTIONS//
  //get Films
  const apiGetCourses = async () => {
    const data = await axios.get('/api/get-courses')
    return data.data
  }

  const getStudentsAreViewing = async (option, page_size) => {
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post(`/api/getstudents-are-viewing?p=1&${page_size}`, formData)
    console.log(data.data, 'hello')

    return data.data
  }

  const getMySearch = async (option, page_size) => {
    const formData = new FormData()
    formData.append('option', option)
    const data = await axios.post(`/api/get-my-search?p=1&${page_size}`, formData)
    return data.data
  }

  

  const apiGetCourseDetail = async (course) => {
    const id = course
    const data = await axios.get(`/api/course/${id}`)
    return data.data
  }

  const apiGetCourseDetailCard = async (course) => {
    const id = course
    const data = await axios.get(`/api/course-detail/${id}`)
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

  const apiGetMyLibrary = async (user, payload) => {
    const formData = new FormData()
    formData.append('user', user)
    const data = await axios.post(`/api/my-library?p=${payload.p}&page_size=${payload.page_size}&sort=${payload.sort}`, formData,)
    return data.data
  }

  const apiMyAcquiredCourses = async (user, payload) => {
    const formData = new FormData()
    formData.append('user', user)
    const data = await axios.post(`/api/my-acquired-courses?p=${payload.p}&page_size=${payload.page_size}&sort=${payload.sort}&category=${payload.category}`, formData,)
    return data.data
  }

  const apiGetImage = (img) => {
    const data = `http://localhost:8000${img}`
    return data
  }

  
  const addCourseToMyLibrary = async (options) => {
    const formData = new FormData()
    formData.append('user', options.user)
    formData.append('course', options.course)
    const data = await axios.post(`/api/add-courses-library`, formData)
    return data.data
  }

  const deleteCourseToMyLibrary = async (options) => {
    const formData = new FormData()
    formData.append('user', options.user)
    formData.append('course', options.course)
    const data = await axios.post(`/api/remove-course-wishlist`, formData)
    return data.data
  }

  return {
    apiGetCourses,
    apiGetCourseDetail,
    apiGetCourseDetailCard,
    getStudentsAreViewing,
    getMySearch,
    apiGetMyLibrary,
    apiMyAcquiredCourses,
    apiGetCategories,
    apiGetCoursesByCategories,
    apiGetImage,
    addCourseToMyLibrary,
    deleteCourseToMyLibrary
  }
} 