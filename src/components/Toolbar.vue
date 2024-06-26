<template>
  <div :class="['toolbar-wrapper', { 'dark-toolbar': isDarkMode }]">
    <div :class="['logo mb-4 mt-4 ml-0 left-0', { 'dark-logo': isDarkMode }]">
      <img
        :src="isDarkMode ? '/logo-dark.png' : '/logo.png'"
        class="logo-image"
        style="transition: filter 0.001ms"
        @load="handleLoad"
      />
      <a href="/" :class="{ 'dark-text': isDarkMode }">AHAMAY</a>
    </div>
    <div class="container mt-4" :class="[{ dark: isDarkMode }]">
      <TabMenu :model="navigation" :class="['navigation w-full', { 'dark-tabmenu': isDarkMode }]" />

      <div class="cart">
        <button class="btn-cart" @click="toggleCart">
          <svg
            class="icon-cart"
            viewBox="0 0 24.38 30.52"
            height="30.52"
            width="24.38"
            xmlns="http://www.w3.org/2000/svg"
            :class="{dark: isDarkMode}"
          >
            <title>icon-cart</title>
            <path
              transform="translate(-3.62 -0.85)"
              d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
            ></path>
          </svg>
        </button>
        <div v-if="showCart" class="cart-dropdown" :style="{ width: '26rem' }">
          <div class="data-view-container">
            <DataView :value="flatCartItems" class="m-0 pr-3 pl-3 pt-3">
              <template #list="slotProps">
                <div class="grid grid-nogutter">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                    <div
                      class="flex flex-column sm:flex-row sm:align-items-center p-2 gap-3"
                      :class="{ 'border-top-1 surface-border': index !== 0 }"
                    >
                      <div class="md:w-10rem relative">
                        <img
                          class="block xl:block mx-auto border-round w-full"
                          :src="`${item.image}`"
                          :alt="item.name"
                        />
                      </div>
                      <div
                        class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"
                      >
                        <div
                          class="flex flex-row md:flex-column justify-content-between align-items-start gap-2"
                        >
                          <div>
                            <span class="font-medium text-secondary text-sm"
                              >Category: {{ item.category }}</span
                            >
                            <div class="text-lg font-medium text-900 mt-2">
                              Name: {{ item.label }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </DataView>
          </div>
          <div class="flex align-items-center justify-content-between mt-3">
            <Button
              @click="clearCart"
              :style="{
                backgroundColor: isDarkMode ? '#6E6E6D' : '#FE7A36',
                border: 'none',
                height: '2.5rem'
              }"
              >Clear Cart</Button
            >
            <Button
              @click="redirectToCheckout"
              class="btn-stripe-checkout flex"
              :style="{
                backgroundColor: isDarkMode ? '#6E6E6D' : '#FE7A36',
                border: 'none',
                height: '2.5rem'
              }"
            >
              Checkout with Stripe
            </Button>
          </div>
        </div>
      </div>
      <Button
        v-if="isLoggedIn"
        @click="menuVisible = !menuVisible"
        rounded
        :class="['account-menu', { 'dark-button': isDarkMode }]"
      >
        <div class="flex w-full justify-content-center">
          <i
            class="pi pi-user"
            :style="{ color: isDarkMode ? 'white' : 'black' }"
            style="font-size: 2rem"
          ></i>
        </div>
      </Button>
      <Button
        v-if="!isLoggedIn"
        label="Login"
        @click="showDialog = true"
        :class="['login-menu', { 'dark-button': isDarkMode }]"
      />
      <Menu v-if="menuVisible" class="card absolute right-0 border-transparent" :model="item"
        ><template #item="{ item }">
          <a href="/user" v-ripple class="flex align-items-center">
            <span class="ml-2">{{ item.label }}</span>
          </a>
          <a class="flex align-content-start align-items-center w-full pl-3" @click="logout"
            >Logout</a
          >
        </template>
      </Menu>
      <Dialog
        ref="dialog"
        v-model:visible="showDialog"
        modal
        header="Login"
        :style="{ width: '30rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        :dismissableMask="true"
      >
        <div class="flex align-items-center justify-content-center">
          <img src="/logo.png" style="width: 90px" />
        </div>
        <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
          <InputText
            v-model="loginData.username"
            id="username"
            class="flex h-2rem mt-3"
            autocomplete="off"
          />
          <label :class="['left-auto text-lg', { 'dark-text': isDarkMode }]" for="username"
            >Username
          </label>
        </FloatLabel>
        <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
          <InputText
            v-model="loginData.password"
            :feedback="false"
            class="flex h-2rem mt-3"
            toggleMask
            type="password"
          />
          <label :class="[' flex left-auto text-lg', { 'dark-text': isDarkMode }]" for="password">
            Password
          </label>
        </FloatLabel>
        <div class="flex justify-content-end gap-3 h-2rem">
          <Button
            class="w-4rem"
            type="button"
            label="Cancel"
            severity="secondary"
            @click="showDialog = false"
            :class="{ 'dark-button': isDarkMode }"
          ></Button>
          <Button
            class="w-4rem bg-orange-500 border-orange-500"
            type="button"
            label="Login"
            @click="handleLogin()"
            :class="{ 'dark-button': isDarkMode }"
          ></Button>
        </div>
        <div>
          <small class="flex justify-content-end mt-1">
            <a
              @click="entryRegister()"
              :class="[
                'text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer	',
                { 'dark-link': isDarkMode }
              ]"
              >Doesn't have account? Click me!</a
            >
          </small>
        </div>
      </Dialog>
      <Dialog
        ref="dialog"
        v-model:visible="showDialogRegister"
        modal
        header="Register"
        :style="{ width: '30rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        :dismissableMask="true"
      >
        <div class="flex align-items-center justify-content-center">
          <img src="/logo.png" style="width: 90px" />
        </div>
        <form @submit.prevent="handleRegister">
          <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
            <InputText
              v-model="registerData.username"
              id="register-username"
              class="flex h-2rem mt-3 w-7"
              autocomplete="off"
              required
              :class="{ 'p-invalid': !isUsernameValid && isSubmitted }"
            />
            <label
              :class="['left-auto text-lg', { 'dark-text': isDarkMode }]"
              for="register-username"
            >
              Username
            </label>
            <small v-if="!isUsernameValid && isSubmitted" class="p-error"
              >Username is required.</small
            >
          </FloatLabel>
          <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
            <InputText
              v-model="registerData.fullname"
              id="register-fullname"
              class="flex h-2rem mt-3 w-7"
              autocomplete="off"
              required
              :class="{ 'p-invalid': !isFullnameValid && isSubmitted }"
            />
            <label
              :class="['left-auto text-lg', { 'dark-text': isDarkMode }]"
              for="register-fullname"
            >
              Your Full Name
            </label>
            <small v-if="!isUsernameValid && isSubmitted" class="p-error"
              >Username is required.</small
            >
          </FloatLabel>
          <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
            <InputText
              v-model="registerData.password"
              :feedback="false"
              class="flex h-2rem mt-3 w-7"
              toggleMask
              required
              type="password"
              :class="{ 'p-invalid': !isPasswordValid && isSubmitted }"
            />
            <label
              :class="[' flex left-auto text-lg', { 'dark-text': isDarkMode }]"
              for="register-password"
            >
              Password
            </label>
            <small v-if="!isPasswordValid && isSubmitted" class="p-error"
              >Password is required.</small
            >
          </FloatLabel>
          <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
            <InputText
              v-model="registerData.email"
              class="flex h-2rem mt-3 w-7"
              required
              :class="{ 'p-invalid': !isEmailValid && isSubmitted }"
            />
            <label
              :class="[' flex left-auto text-lg', { 'dark-text': isDarkMode }]"
              for="register-email"
            >
              Email
            </label>
            <small v-if="!isEmailValid && isSubmitted" class="p-error">Email is required.</small>
          </FloatLabel>
          <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
            <InputText
              v-model="registerData.phoneNumber"
              class="flex h-2rem mt-3 w-7"
              required
              :class="{ 'p-invalid': !isPhoneNumberValid && isSubmitted }"
            />
            <label
              :class="[' flex left-auto text-lg', { 'dark-text': isDarkMode }]"
              for="register-phone"
            >
              Phone Number
            </label>
            <small v-if="!isPhoneNumberValid && isSubmitted" class="p-error"
              >Phone number is required.</small
            >
          </FloatLabel>
          <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
            <input
              type="date"
              v-model="registerData.dateOfBirth"
              id="register-dateOfBirth"
              class="flex h-2rem mt-3 w-7 justify-content-center"
              required
              :class="{ 'p-invalid ': !isDateOfBirthValid && isSubmitted }"
            />
            <small v-if="!isDateOfBirthValid && isSubmitted" class="p-error"
              >Date of birth is required.</small
            >
          </FloatLabel>
          <div class="flex justify-content-end gap-3 h-2rem">
            <Button
              class="w-4rem"
              type="button"
              label="Cancel"
              severity="secondary"
              @click="showDialogRegister = false"
              :class="{ 'dark-button': isDarkMode }"
            ></Button>
            <Button
              class="w-4rem bg-orange-500 border-orange-500"
              type="submit"
              label="Register"
              :class="{ 'dark-button': isDarkMode }"
            ></Button>
          </div>
        </form>
      </Dialog>
    </div>
    <stripe-checkout
      ref="checkoutRef"
      mode="subscription"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successUrl"
      :cancel-url="cancelUrl"
    ></stripe-checkout>
  </div>
  <Toast ref="toast" :group="false" position="top-right" />
</template>
<script>
import Menu from 'primevue/menu'
import TabMenu from 'primevue/tabmenu'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataView from 'primevue/dataview'
import FloatLabel from 'primevue/floatlabel'
import Password from 'primevue/password'
import Toast from 'primevue/toast'
import authMixin from '../utils/auth.js'
import { registerUser } from '../utils/userService.js'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

import 'primevue/resources/themes/lara-light-indigo/theme.css'

export default {
  components: {
    TabMenu,
    Menu,
    Dialog,
    Button,
    InputText,
    FloatLabel,
    Password,
    Toast,
    DataView,
    StripeCheckout
  },
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  mixins: [authMixin],
  data: () => ({
    showDialogRegister: false,
    menuVisible: false,
    accouuntVisible: false,
    loginvisible: true,
    cartItems: [],
    lineItems: [],
    showCart: false,
    showDialog: false,
    loginData: {
      username: null,
      password: null
    },
    registerData: {
      username: '',
      fullname: '',
      password: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: ''
    },
    publishableKey:
      'pk_test_51PIpED01HTEsX8gXhs9HBmHQl16bAZYyvArNfoLvILs5DO7IoIC6uqG7uqiHMkjCwu5EZF5VYu9JSvkBJoALW0kw00qNCZMn76',
    successUrl: 'https://localhost:5173',
    cancelUrl: 'http://localhost:5173/services',
    navigation: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Services', url: '/services' }
    ],
    item: [
      {
        items: [
          {
            label: 'Account Settings',
            url: '/user'
          }
        ]
      }
    ]
  }),
  mounted() {
    try {
      const storedCartItems = localStorage.getItem('cart')
      if (storedCartItems) {
        this.cartItems = JSON.parse(storedCartItems)
      } else {
        this.cartItems = []
      }
    } catch (error) {
      console.error('Error parsing cart items from localStorage:', error)
      localStorage.removeItem('cart')
      this.cartItems = []
    }
  },
  computed: {
    isUsernameValid() {
      return this.registerData.username.trim() !== ''
    },
    isFullnameValid() {
      return this.registerData.fullname.trim() !== ''
    },
    isPasswordValid() {
      return this.registerData.password.trim() !== ''
    },
    isEmailValid() {
      return this.registerData.email.trim() !== ''
    },
    isPhoneNumberValid() {
      return this.registerData.phoneNumber.trim() !== ''
    },
    isDateOfBirthValid() {
      return this.registerData.dateOfBirth.trim() !== ''
    },
    flatCartItems() {
      return this.cartItems.reduce((acc, curr) => acc.concat(curr), [])
    },
    flatLineItems() {
      const lineItems = this.flatCartItems.map((item) => ({
        price: item.selectedBrand.priceId,
        quantity: 1
      }))
      return lineItems
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    toggleLogin() {
      this.showDialog = false
      this.loginvisible = !this.loginvisible
      this.accouuntVisible = !this.accouuntVisible
    },
    async handleLogin() {
      const success = await this.login(this.loginData)
      if (success) {
        this.showDialog = false
        this.$refs.toast.add({
          severity: 'success',
          summary: 'Login Successful',
          life: 1200
        })
        if (this.$route.path.includes('/user')) {
          setTimeout(() => {
            window.location.href = '/user'
          }, 1500)
        }
      } else {
        this.$refs.toast.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Invalid username or password',
          life: 3000
        })
      }
    },
    logout() {
      if (this.$route.path.includes('/user')) {
        window.location.href = '/user'
      }
      this.$options.mixins[0].methods.logout.call(this)
      this.menuVisible = false
    },
    entryRegister() {
      this.showDialog = false
      this.showDialogRegister = true
    },
    async handleRegister() {
      this.isSubmitted = true
      if (
        this.isUsernameValid &&
        this.isFullnameValid &&
        this.isPasswordValid &&
        this.isEmailValid &&
        this.isPhoneNumberValid
      ) {
        const success = await registerUser(this.registerData)
        if (success) {
          this.showDialogRegister = false
          this.registerData = {
            username: '',
            fullname: '',
            password: '',
            phoneNumber: '',
            email: ''
          }
          this.isSubmitted = false
        }
      }
    },
    isUserPage() {
      return this.$route.path.includes('/user')
    },
    toggleCart() {
      this.showCart = !this.showCart
    },
    edit() {
      this.lineItems = this.flatLineItems
      console.log(this.lineItems)
    },
    clearCart() {
      localStorage.removeItem('cart')
      this.cartItems = []
    },
    async redirectToCheckout() {
      try {
        this.lineItems = this.flatLineItems
        this.$refs.checkoutRef.redirectToCheckout({
          lineItems: this.lineItems,
          mode: 'payment',
          successUrl: this.successUrl,
          cancelUrl: this.cancelUrl
        })
      } catch (e) {
        console.log('Error during checkout:', e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@layer primevue;
@font-face {
  font-family: '_pepsi_regular';
  src:
    url('/src/assets/font/pepsi_pl-webfont.woff2') format('woff2'),
    url('/src/assets/font/pepsi_pl-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.toolbar-wrapper {
  width: 100%;
  display: flex;
  left: 0;
  top: 0%;
  justify-content: space-around;
  transition: background-color 0.001ms;
}
.toolbar-wrapper.dark-toolbar {
  background: #212121;
}

.container {
  display: flex;
  width: 40%;
  padding-right: 4%;
  right: 0;
}

.container .account-menu {
  margin-top: 18px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: #ffffff;
  border: 3px solid black;
}
.container .account-menu.dark-button {
  background: #212121;
  border: 3px solid white;
}

.container .login-menu {
  margin-top: 18px;
  margin-left: 10px;
  height: 40px;
  width: 25%;
  border-radius: 20px;
  background-color: #fe7a36;
  border: none;
}
.container .login-menu.dark-button {
  background-color: #c94d0d;
}

.container .p-button:focus {
  box-shadow: 0 0 0 2px #ffffff;
}

.logo {
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
  width: 76px !important;
  height: 76px;
  border-radius: 50%;
  padding-left: 2rem;
  transition: background-color 0.001ms;
}
.logo.dark-logo {
  color: #212121;
}

.logo a {
  font-size: 18px;
  color: #3e3e3e;
  font-family: '_pepsi_regular' !important;
  font-style: normal;
  font-weight: normal;
  color: #fe7a36;
}
.logo a.dark-text {
  color: #ffffff;
}

.logo-image {
  width: 76px !important;
  height: 76px;
}

.p-dialog .p-dialog-content.dark- {
  background-color: #212121;
}

.btn-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 50px;
  padding-right: 3%;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  position: relative;
  cursor: pointer;
}

.btn-cart::after {
  content: attr(data-quantity);
  width: fit-content;
  height: fit-content;
  position: absolute;
  font-size: 15px;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s linear;
  top: 115%;
}

.icon-cart {
  width: 24.38px;
  height: 30.52px;
  transition: 0.2s linear;
}

.icon-cart path {
  fill: dark;
  transition: 0.2s linear;
}

.icon-cart.dark path {
  fill: white;
  transition: 0.2s linear;
}

.btn-cart:hover > .icon-cart {
  transform: scale(1.2);
}

.btn-cart:hover > .icon-cart path {
  fill: #fe7a36;
}

.btn-cart:hover::after {
  visibility: visible;
  top: 105%;
}

.cart {
  position: relative;
}

.cart-dropdown {
  position: absolute;
  top: 58%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  z-index: 1000; 
}

.data-view-container {
  max-height: 200px;
  overflow-y: auto;
}

.cart-item {
  margin-bottom: 5px;
}

::v-deep(.p-menu) {
  top: 11.9% !important;
  right: 6.9% !important;
  z-index: 10;
  padding: 0;
  border: 2px solid #fe7a36 !important;
  border-radius: 10px;
}

::v-deep(.p-menu) .p-submenu-header {
  display: none;
}

::v-deep(.p-menu) .p-menuitem {
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content {
  background-color: white;
  border-radius: 10px;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content button {
  padding: 0.5rem 0 0.5rem 1.1rem;
  background-color: white;
  color: #fe7a36;
  border: none;
  border: none;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 17px;
  cursor: pointer;
  line-height: 1.6;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content button:hover {
  background-color: #fe7a36;
  color: white;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content button:focus-visible {
  box-shadow: none;
}

// ::v-deep(.p-menu) .p-menuitem:hover {
//   background-color: #fe7a36;
// }

::v-deep(.p-menu) .p-menuitem .p-menuitem-content .p-menuitem-link {
  transition: none;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content .p-menuitem-link:hover {
  background-color: #fe7a36;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content a {
  color: #fe7a36;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

::v-deep(.p-menu) .p-menuitem:hover .p-menuitem-content a:hover {
  background-color: #fe7a36;
  color: white;
  cursor: pointer;
}

::v-deep(.p-tabmenu) .p-tabmenu-nav {
  padding: 20px 148px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  list-style-type: none;
  font-size: 1.2rem;
  border: none;
  padding-left: 0%;
  padding-right: 0;
  transition: background-color 0.001ms;
}
::v-deep(.p-tabmenu.dark-tabmenu) .p-tabmenu-nav {
  background-color: #212121;
}

::v-deep(.p-tabmenu) .p-tabmenuitem .p-menuitem-link {
  padding: 0.55rem 1rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #0c0c0c;
  transition: background-color 0.001ms;
  @media only screen and (max-width: 576px) {
    padding: 0.55rem;
  }
}
::v-deep(.p-tabmenu.dark-tabmenu) .p-tabmenuitem .p-menuitem-link {
  color: #ffffff;
}

::v-deep(.p-tabmenu) .p-tabmenuitem .p-menuitem-link .p-menuitem-text {
  font-weight: 600;
}

::v-deep(.p-tabmenu) .p-tabmenu-ink-bar {
  display: none;
}

::v-deep(.p-tabmenu) {
  font-size: 0.9rem;
  @media only screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
}

::v-deep(.p-tabmenu) .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
  background: none;
}

::v-deep(.p-tabmenu) .p-tabmenuitem .p-menuitem-link {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

::v-deep(.p-icon-field) .p-input-icon {
  top: 30%;
}
</style>
