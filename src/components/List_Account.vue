<template>
    <div class="container-wrapper">
      <div id="container_list">
        <div class="element" @click="changeBackground($event,'Account')">
          Account details
        </div>
        <div class="element" @click="changeBackground($event, 'Orders')">
          My Orders
        </div>
        <div class="element" @click="changeBackground($event, 'Logout')">
          Logout
        </div>
      </div>

      <div class="info" v-if="displayAccount">
        <Account></Account>
      </div>

      <div class="info" v-if="displayOrders">
        <p style="color:black">SHOW LIST OF ORDERS</p>
      </div>

      <div class="info" v-if="displayLogout">
        <p style="color:black">LOGING OUT...</p>
      </div>
    </div>
</template>

<script>
import Account from './Account.vue';

export default {
  components: {
    Account
  },
  data() {
    return {
      displayAccount: false,
      displayOrders: false,
      displayLogout: false
    };
  },
  methods: {
    changeBackground(event, type) {
      const clickedElement = event.target;
      const elements = document.querySelectorAll('.element');

      // Reset background and font color of all elements
      elements.forEach(function(element) {
        element.style.background = 'linear-gradient(to right, white, white)';
        element.style.color = 'black';
      });

      // Change background and font color of the clicked element
      clickedElement.style.background = 'linear-gradient(to right, rgba(189,80,19,1) 3%, rgba(254,106,55,1) 3%, rgba(254,156,106,1) 37%, rgba(254,181,143,1) 60%, rgba(255,243,237,1) 84%, rgba(255,255,255,1) 96%';  
      clickedElement.style.color = 'white';
    
      if (type === 'Account') {
        this.showAccount();
      } else if (type === 'Orders') {
        this.showOrders();
      } else if (type === 'Logout') {
        this.showLogout();
      }
    },
    showAccount() {
      this.displayAccount = true;
      this.displayOrders = false;
      this.displayLogout = false;
    },
    showOrders() {
      this.displayAccount = false;
      this.displayOrders = true;
      this.displayLogout = false;
    },
    showLogout() {
      this.displayAccount = false;
      this.displayOrders = false;
      this.displayLogout = true;
    }
  }
}
</script>

<style scoped>
.container-wrapper {
  display: flex;
  padding-top: 50px;
  width: 1440px;
  padding-left: 40px;
}

#container_list {
  flex: 1;
  padding-right: 20px;
}

.info {
  flex: 2;
}

.element {
  padding: 20px;
  padding-left: 40px;
  font-size: 30px;
  font-weight: 600;
  width: 384px;
}

.element:hover {
  color: red;
}
</style>
