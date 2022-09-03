import axios from 'axios'

const API_URL = '/api/users/'

// REGISTER USER
const register = async (formData) => {
  const response = await axios.post(API_URL, formData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// LOGIN USER
const login = async (formData) => {
  const response = await axios.post(API_URL + 'login', formData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// LOGOUT USER
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
