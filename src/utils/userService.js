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

export const getUserInfo = async (accessToken) => {
  try {
    const response = await axios.get('/user/info', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
  } catch (error) {
    console.error('Error getting user info:', error)
    throw error
  }
}

export const updatedUserInfo = async (accessToken, userId, userData) => {
  try {
    const response = await axios.put(`/user/${userId}`, userData, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
  } catch (error) {
    console.error('Error updating user info:', error)
    throw error
  }
}
