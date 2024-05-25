<template>
  <div id="container" class="container" :class="[{ dark: isDarkMode }]">
    <div class="in4_Board">
      <div class="topic">BASIC INFORMATION</div>
      <div class="body">
        <table>
          <tr>
            <td style="width: 500px">Full Name: {{ userData ? userData.fullname : '' }}</td>
            <td>Date Of Birth: {{ userData ? userData.dateOfBirth : '' }}</td>
          </tr>
          <tr>
            <td style="width: 500px">Email address: {{ userData ? userData.email : '' }}</td>
            <td>Phone number: {{ userData ? userData.phoneNumber : '' }}</td>
          </tr>
          <tr>
            <Button
              label="Update Basic Information"
              @click="openDialog"
              class="bg-orange-500 border-orange-500"
            />
          </tr>
        </table>
      </div>
    </div>
    <Dialog
      header="Update Information"
      v-model:visible="showDialog"
      modal
      :style="{ width: '35rem' }"
    >
      <form @submit.prevent="handleUpdate">
        <div class="field grid h-3rem">
          <label for="username" class="col-12 mb-2 md:col-4 md:mb-0">Full Name:</label>
          <InputText v-model="updatedUserData.fullname" id="fullname" class="col-12 md:col-8" />
        </div>
        <div class="field grid h-3rem">
          <label for="dateOfBirth" class="col-12 mb-2 md:col-4 md:mb-0">Date Of Birth:</label>
          <InputText
            v-model="updatedUserData.dateOfBirth"
            type="date"
            id="dateOfBirth"
            class="col-12 md:col-8"
          />
        </div>
        <div class="field grid h-3rem">
          <label for="email" class="col-12 mb-2 md:col-4 md:mb-0">Email address:</label>
          <InputText
            v-model="updatedUserData.email"
            type="email"
            id="email"
            class="col-12 md:col-8"
          />
        </div>
        <div class="field grid h-3rem">
          <label for="phoneNumber" class="col-12 mb-2 md:col-4 md:mb-0">Phone number:</label>
          <InputText
            v-model="updatedUserData.phoneNumber"
            type="text"
            id="phoneNumber"
            class="col-12 md:col-8"
          />
        </div>
        <div class="flex justify-content-between">
          <Button
            label="Cancel"
            class="p-button-text text-orange-500"
            @click="showDialog = false"
          />
          <Button label="Save Changes" type="submit" class="bg-orange-500 border-orange-500" />
        </div>
      </form>
    </Dialog>

    <div class="body" style="border-radius: 10px">
      <a href="#">Delete my account</a>
    </div>
  </div>
</template>

<script>
import authMixin from '../utils/auth.js'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import DataView from 'primevue/dataview'
export default {
  components: {
    Dialog,
    InputText,
    Button,
    DataView
  },
  mixins: [authMixin],
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      updatedUserData: {}
    }
  },
  watch: {
    userData: {
      handler(newVal) {
        console.log('User data changed:', newVal)
      },
      deep: true
    }
  },
  methods: {
    openDialog() {
      this.updatedUserData = { ...this.userData }
      this.showDialog = true
    },
    async handleUpdate() {
      const userId = this.userData ? this.userData._id : null
      if (userId) {
        const finalUserData = {
          username: this.updatedUserData.username || this.userData.username,
          dateOfBirth: this.updatedUserData.dateOfBirth || this.userData.dateOfBirth,
          email: this.updatedUserData.email || this.userData.email,
          phoneNumber: this.updatedUserData.phoneNumber || this.userData.phoneNumber
        }
        const success = await this.updateUser(userId, finalUserData)
        if (success) {
          alert('User information updated successfully')
          this.showDialog = false
        } else {
          alert('Failed to update user information')
        }
      } else {
        alert('User ID is missing')
      }
    }
  }
}
</script>

<style scoped>
#container {
  display: block;
  background-color: white;
  padding-right: 40px;
}

.container.dark {
  background-color: #212121 !important;
}

table {
  border-radius: 20px; /* Set border-radius to 20px */
}

.th,
td {
  text-align: left;
  padding: 8px;
}

.in4_Board {
  padding-bottom: 20px;
}

.in4_Contact {
  padding-top: 10px;
  padding-bottom: 20px;
}

.body {
  padding: 15px;
  padding-left: 25px;
  background-color: lightgray;
  color: black;
  border-bottom-left-radius: 10px; /* Rounded top-left corner */
  border-bottom-right-radius: 10px; /* Rounded top-right corner */
  font-size: 20px;
}

.topic {
  padding: 10px;
  padding-left: 30px;
  background-color: #4d4d4d;
  color: white;
  font-size: 30px;
  font-weight: 600;
  border-top-left-radius: 20px; /* Rounded top-left corner */
  border-top-right-radius: 20px; /* Rounded top-right corner */
}

a {
  text-decoration: underline; /* Underline links */
  color: black; /* Set color to black */
}
</style>
