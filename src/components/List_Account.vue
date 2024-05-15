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
      <DataTable :value="products">
        <template #header>
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Products</span>
            <button @click="editBtn()">Edit</button>
          </div>
        </template>
        <Column field="label" header="Name"></Column>
        <Column field="image" header="Image">
          <template #body="slotProps">
            <img :src="slotProps.data.image" alt="Product Image" width="50" />
          </template>
        </Column>
        <Column field="category" header="Category"></Column>
        <Column field="rating" header="Reviews">
          <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
          </template>
        </Column>
        <Column field="selectedBrand.brand" header="Brand"></Column>
        <Column field="selectedBrand.price" header="Price"></Column>
        <template #footer>
          In total there are {{ products ? products.length : 0 }} products.
        </template>
      </DataTable>
    </div>

    <div class="info" v-if="displayLogout">
      <p style="color: black">LOGING OUT...</p>
    </div>
  </div>
</template>

<script>
import Account from './Account.vue'
import Breadcrumb from 'primevue/breadcrumb'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Rating from 'primevue/rating'
import servicesData from '../services/data'
import EventBus from '@/utils/Eventbus'
export default {
  components: {
    Account,
    Breadcrumb,
    DataTable,
    Column,
    Rating
  },
  data() {
    return {
      displayAccount: true,
      displayOrders: false,
      displayLogout: false,
      activeElement: 'item_1',
      products: servicesData
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
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    editBtn() {
      console.log(this.products)
    },
    addProductToCart(product) {
      this.products.push(product)
    }
  },
  created() {
    EventBus.on('add-to-cart', this.addProductToCart)
  },
  beforeDestroy() {
    EventBus.off('add-to-cart', this.addProductToCart)
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
