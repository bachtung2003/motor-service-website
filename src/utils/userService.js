import axios from './axios'

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/user/create', userData)
    return response
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('/user/login', userData)
    return response
  } catch (error) {
    console.error('Error logging in user:', error)
    throw error
  }
}
