<template>
  <div id="big-container" class="container-center">
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
        <textarea class="input"></textarea>
        <div class="buttons">
          <Button class="next-button" @click="nextStep">Next</Button>
        </div>
      </div>
      <div v-else-if="step === 1">
        <p>AGENT LIST</p>
        <div class="buttons">
          <Button class="back-button" @click="prevStep">Back</Button>
          <Button class="next-button" @click="nextStep">Next</Button>
        </div>
      </div>
      <div v-else-if="step === 2">
        <p>CUSTOMER INFORMATION</p>
        <div class="buttons">
          <Button class="back-button" @click="prevStep">Back</Button>
          <Button class="submit-button" @click="submitForm">Submit</Button>
        </div>
      </div>
      <div v-else>
        <div class="message">Summary</div>
          <p>Name: ...</p>
          <p>Age: ...</p>
          <p>Order: ...</p>
          <div class="buttons">
          <Button class="reset-button" @click="resetStages">MAKE THE ORDER AGAIN</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

export default {
  components: {
    ProgressBar,
    Button
  },
  data() {
    return {
      step: 0,
      progress: [0, 0, 0],
      userInfo: {
        name: '',
        age: ''
      }
    };
  },
  methods: {
    nextStep() {
      this.progress[this.step] = 100;
      this.step++;
    },
    prevStep() {
      this.step--;
      this.progress[this.step] = 0;
    },
    submitForm() {
      this.progress = [100, 100, 100];
      this.step++;
    },
    resetStages() {
      this.step = 0;
      this.progress = [0, 0, 0];
    }
  }
}
</script>

<style scoped>
#big-container {
  width: 902px;
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
  background-color: #FE7A36;
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

/* .back-button,
.next-button,
.submit-button,
.reset-button {
  font-size: 16px;
  color: #FE7A36;
  background-color: white;
  border: 2px solid #FE7A36;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.back-button:hover,
.next-button:hover,
.submit-button:hover,
.reset-button:hover
{
  background-color: #FE7A36;
  color: white;
} */


.summary-board {
  background-color: #FE7A36;
  padding: 20px;
  margin-top: 20px;
  color: white;
}

p {
  color: black;
}

</style>
<style>
.p-progressbar-value{
  background-color: black;
}
.p-button {
  font-size: 16px;
  color: #FE7A36;
  background-color: white;
  border: 2px solid #FE7A36;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.p-button:hover {
  background-color: #FE7A36;
  color: white;
}

</style>
