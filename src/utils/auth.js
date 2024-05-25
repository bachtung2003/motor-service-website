import { loginUser, getUserInfo, updatedUserInfo } from '../utils/userService'

export default {
  data() {
    return {
      accessToken: localStorage.getItem('accessToken') || null,
      userData: localStorage.getItem('userData') || null
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.accessToken
    }
  },
  methods: {
    async login(loginData) {
      try {
        const response = await loginUser(loginData)

        if (response && response.data.status) {
          const { user } = response.data
          if (user && user.accessToken) {
            this.accessToken = user.accessToken
            localStorage.setItem('accessToken', this.accessToken)
            this.$emit('loginStateChange', true)
            await this.fetchUserInfo(this.accessToken)
            localStorage.setItem('userData', JSON.stringify(this.userData))
          }
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error('Error during login:', error)
        return false
      }
    },
    async fetchUserInfo(accessToken) {
      try {
        const userInfoResponse = await getUserInfo(accessToken)
        this.userData = userInfoResponse.data
        localStorage.setItem('userData', JSON.stringify(this.userData))
      } catch (error) {
        console.error('Error fetching user info:', error)
      }
    },
    async updateUser(userId, userData) {
      try {
        const response = await updatedUserInfo(this.accessToken, userId, userData)
        this.userData = response.data
        localStorage.setItem('userData', JSON.stringify(this.userData))
        this.$emit('userInfoUpdated', this.userData)
        return true
      } catch (error) {
        console.error('Error updating user info:', error)
        return false
      }
    },
    logout() {
      this.accessToken = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userData')
      this.$emit('loginStateChange', false)
      this.userData = null
    }
  },
  created() {
    if (this.accessToken) {
      this.$emit('loginStateChange', true)
      this.fetchUserInfo(this.accessToken)
    }
  }
}
