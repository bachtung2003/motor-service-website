<template>
  <div id="toolbar-wrapper">
    <div class="footer-subcribe-content">
      <a href="#">Subcribe For Special Offers</a>
      <p>Get Weekly Newsletter</p>
    </div>
    <div class="footer-email-container align-items-center">
      <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
        <InputText id="email" class="flex h-3rem mt-3" autocomplete="off" style="width: 40vw" />
        <label class="left-auto text-lg" for="password">Enter your email</label>
      </FloatLabel>
      <Button class="" label="Subscribe" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'

export default {
  components: {
    Button,
    InputText,
    FloatLabel
  },
  methods: {
    isHome() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#toolbar-wrapper {
  width: 100vw;
  height: 100px;
  display: flex;
  background: #fe7a36;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
}

.footer-subcribe-content {
  position: relative;
  display: block;
  width: 30vw;
}

.footer-subcribe-content a {
  font-weight: 500;
  font-size: 2vw;
  color: #3e3e3e;
  font-style: normal;
  color: #ffff;
}

.footer-subcribe-content p {
  font-size: 1.5vw;
  color: #3e3e3e;
  font-style: normal;
  font-weight: normal;
  color: #ffff;
}

.footer-email-container {
  position: relative;
  display: flex;
}

.footer-email-container .p-button {
  height: 40px;
  width: 10vw;
  left: 5%;
  border-radius: 5px;
  background: #000000;
  color: #ffff;
  border: 1px solid #0000;
  font-size: 17px;
}

/* @media (min-width: 1500px) {
  #toolbar-wrapper {
    position: relative;
    width: 100vw;
    height: 100px;
    display: flex;
    left: 0;
    bottom: -25%;
    padding: 20px 148px;
    margin-top: 2rem;
    background: #fe7a36;
  }

  .footer-email-container .p-button {
    margin-top: 8px;
    height: 50px;
    width: 160px;
    left: 40%;
    border-radius: 5px;
    background: #000000;
    color: #ffff;
    border: 1px solid #0000;
    font-size: 17px;
  }
}
@media (min-width: 2000px) {
  #toolbar-wrapper {
    width: 100vw;
    height: 100px;
    display: flex;
    left: 0;
    bottom: -12%;
    padding: 20px 148px;
    margin-top: 5rem;
    background: #fe7a36;
  }
  .footer-subcribe-content {
    position: relative;
    display: block;
    gap: 10px;
    width: 600px !important;
    height: 75px;
  }

  .footer-email-container .p-button {
    margin-top: 8px;
    height: 50px;
    width: 160px;
    left: 80%;
    border-radius: 5px;
    background: #000000;
    color: #ffff;
    border: 1px solid #0000;
    font-size: 17px;
  }
}

@media (max-width: 1200px) {
  #toolbar-wrapper {
    width: 100vw;
    height: 100px;
    display: flex;
    left: 0;
    bottom: -30%;
    padding: 20px 148px;
    margin-top: 5rem;
    background: #fe7a36;
  }
} */
</style>
