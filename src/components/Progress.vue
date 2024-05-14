<template>
  <div>
    <div id="big-container" class="container-center">
      <div v-if="showConfirmation">
        <div class="container">
          <div class="card">
            <ProgressBar :value="progress[0]" class="custom-progress-bar"></ProgressBar>
            <div class="topic">SELECT SERVICE</div>
          </div>
          <div class="card">
            <ProgressBar :value="progress[1]" class="custom-progress-bar"></ProgressBar>
            <div class="topic">CHOOSE AN AGENT</div>
          </div>
          <div class="card">
            <ProgressBar :value="progress[2]" class="custom-progress-bar"></ProgressBar>
            <div class="topic">PERSONAL INFORMATION</div>
          </div>
        </div>

        <div class="second-container">
          <div v-if="step === 0">
            <div class="message">Message</div>
            <textarea class="input" v-model="userInfo.message"></textarea>
            <div class="buttons">
              <Button class="next-button" @click="nextStep">Next ></Button>
            </div>
          </div>
          <div v-else-if="step === 1">
            <p>AGENT LIST</p>
            <div class="buttons">
              <Button class="back-button" @click="prevStep">< Back</Button>
              <Button class="next-button" @click="nextStep">Next ></Button>
            </div>
          </div>
          <div v-else-if="step === 2">
            <div class="form-container">
              <div class="input-group">
                <label for="fullname">Name:</label>
                <InputText id="fullname" v-model="userInfo.name" />
              </div>
              <div class="input-group">
                <label for="phone">Phone:</label>
                <InputText id="phone" v-model="userInfo.phone" />
              </div>
              <div class="input-group">
                <label for="email">E-mail:</label>
                <InputText id="email" v-model="userInfo.email" />
              </div>
              <div class="input-group">
                <label for="address">Address:</label>
                <InputText id="address" v-model="userInfo.address" />
              </div>
              <div class="input-group">
                <label for="dob">Appointment Date:</label>
                <InputText id="dob" v-model="userInfo.dateOfBirth" />
              </div>
            </div>
            <div class="buttons">
              <Button class="back-button" @click="prevStep">< Back</Button>
              <Button class="submit-button" @click="submitForm">Submit</Button>
            </div>
          </div>
          <div v-else>
            <h1 class="content_header flex justify-content-center text-blue-700 text-5xl">
              SUMMARY
            </h1>
            <p class="bottom-border">NAME: {{ userInfo.name }}</p>
            <p class="bottom-border">PHONE: {{ userInfo.phone }}</p>
            <p class="bottom-border">E-MAIL: {{ userInfo.email }}</p>
            <p class="bottom-border">ADDRESS: {{ userInfo.address }}</p>
            <p class="bottom-border">APPOINTMENT DATE: {{ userInfo.dateOfBirth }}</p>
            <p>MESSAGE:</p>
            <p class="sum-message">{{ userInfo.message }}</p>

            <div class="summary">
              <Button class="reset-button" @click="confirmStages">Confirm</Button>
              <a class="reorder-link" @click="resetStages">Change the appointment</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="second-container">
          <h1 class="content_header flex justify-content-center text-grey-700 text-2xl">
            THANK YOU FOR YOUR REQUEST, WE HAVE SENT THE RECEIPT TO YOUR EMAIL.
          </h1>
        </div>
        <div class="summary">
          <Button class="reset-button" @click="returnToHome">Return </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default {
  components: {
    ProgressBar,
    Button,
    InputText
  },
  data() {
    return {
      step: 0,
      progress: [0, 0, 0],
      userInfo: {
        name: '',
        dateOfBirth: '',
        address: '',
        email: '',
        phone: '',
        message: ''
      },
      showConfirmation: true
    }
  },
  methods: {
    nextStep() {
      this.progress[this.step] = 100
      this.step++
    },
    prevStep() {
      this.step--
      this.progress[this.step] = 0
    },
    submitForm() {
      this.progress = [100, 100, 100]
      this.step++
    },
    resetStages() {
      this.step = 0
      this.progress = [0, 0, 0]
    },
    confirmStages() {
      this.showConfirmation = false
    },
    returnToHome() {
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
* {
  color: #303f9f;
}

#big-container {
  width: 1200px;
  height: 600px;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  margin: auto;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fe7a36;
  padding-top: 10px;
  padding-bottom: 20px;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.card:last-child {
  margin-right: 0;
}

.custom-progress-bar {
  width: 247px;
  height: 10px;
  font-size: 9px;
}

.topic {
  margin-top: 10px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding-top: 20px;
}

.second-container {
  width: 100%;
  background-color: #f9f9f9;
  padding: 20px;
}

.message {
  font-size: 16px;
  color: #545454;
  text-align: left;
  font-weight: bold;
}

.input {
  width: 100%;
  height: 107px;
  background-color: white;
  color: black;
  font-family: Arial, sans-serif;
  font-size: 13px;
  margin-top: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.summary-board {
  background-color: #fe7a36;
  padding: 20px;
  margin-top: 20px;
  color: white;
}


.p-button {
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #fe7a36;
  background-color: white;
  border: 1px solid #fe7a36;
  border-radius: 0px;
  padding: 10px 20px;
  cursor: pointer;
  width: 120px;
  height: 35px;
}

.p-button:hover {
  background-color: #fe7a36;
  color: white;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.second-container > div:not(.card) {
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}

.second-container > div:not(.card) p {
  font-size: 16px;
  color: #545454;
  font-weight: 600;
  padding-left: 20px;
  padding-bottom: 20px;
}

.bottom-border {
  border-bottom: 1px solid #e2d9d9;
  margin-bottom: 30px;
}

.text-5xl {
  font-size: 3rem !important;
  font-weight: 700;
}

.summary {
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  align-items: center;
}

.sum-message {
  background-color: #d9d9d9;
  padding: 20px;
  margin-left: 30px;
  margin-right: 30px;
}

.reorder-link {
  color: grey;
  text-decoration: underline;
  cursor: pointer;
}

.text-2xl {
  font-size: 1.5rem !important;
  color: #545454;
  font-weight: 600;
}


</style>
<style>
.p-progressbar .p-progressbar-value {
    border: 0 none;
    background: black;
}
</style>