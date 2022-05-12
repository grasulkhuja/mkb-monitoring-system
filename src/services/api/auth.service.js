import axios from '@/libs/axios'

const AuthService = {
  login: async (user) => {
    const { data } = await axios.post('/api/auth/login', user)
    return data
  },
}

export default AuthService
