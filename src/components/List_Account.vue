<template>
  <div class="container-wrapper">
    <div id="container_list">
      <div
        class="element item_1"
        v-on:click="setActiveElement('item_1')"
        v-bind:class="{ active: activeElement === 'item_1' }"
      >
        Account details
      </div>
      <div
        class="element item_2"
        v-on:click="setActiveElement('item_2')"
        v-bind:class="{ active: activeElement === 'item_2' }"
      >
        My Orders
      </div>
      <div
        class="element item_3"
        v-on:click="setActiveElement('item_3')"
        v-bind:class="{ active: activeElement === 'item_3' }"
      >
        Logout
      </div>
    </div>

    <div class="info" v-if="displayAccount">
      <Account></Account>
    </div>

    <div class="info" v-if="displayOrders">
      <p style="color: black">SHOW LIST OF ORDERS</p>
    </div>

    <div class="info" v-if="displayLogout">
      <p style="color: black">LOGING OUT...</p>
    </div>
  </div>
</template>

<script>
import Account from './Account.vue'
import Breadcrumb from 'primevue/breadcrumb'

export default {
  components: {
    Account,
    Breadcrumb
  },
  data() {
    return {
      displayAccount: true,
      displayOrders: false,
      displayLogout: false,
      activeElement: 'item_1'
    }
  },
  methods: {
    setActiveElement(element) {
      this.activeElement = element

      this.displayAccount = false
      this.displayOrders = false
      this.displayLogout = false

      if (element === 'item_1') {
        this.displayAccount = true
      } else if (element === 'item_2') {
        this.displayOrders = true
      } else if (element === 'item_3') {
        this.displayLogout = true
      }
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
.active {
  background: linear-gradient(
    to right,
    rgba(189, 80, 19, 1) 3%,
    rgba(254, 106, 55, 1) 3%,
    rgba(254, 156, 106, 1) 37%,
    rgba(254, 181, 143, 1) 60%,
    rgba(255, 243, 237, 1) 84%,
    rgba(255, 255, 255, 1) 96%
  );
  color: white !important;
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
  color: black;
}

.element:hover {
  color: red;
}
</style>
