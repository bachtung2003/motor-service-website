<template>
  <div :class="['toolbar-wrapper', { 'dark-toolbar': isDarkMode }]">
    <div :class="['logo mb-4 mt-4 ml-0 left-0', { 'dark-logo': isDarkMode }]">
      <img
        :src="isDarkMode ? '/src/assets/img/logo-dark.png' : '/src/assets/img/logo.png'"
        class="logo-image"
        style="transition: filter 0.001ms"
        @load="handleLoad"
      />
      <a href="/" :class="{ 'dark-text': isDarkMode }">AHAMAY</a>
    </div>
    <div class="container mt-4">
      <TabMenu :model="navigation" :class="['navigation w-full', { 'dark-tabmenu': isDarkMode }]" />
      <Button
        v-if="accouuntVisible"
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
        v-if="loginvisible"
        label="Login"
        @click="showDialog = true"
        :class="['login-menu', { 'dark-button': isDarkMode }]"
      />
      <Menu v-if="menuVisible" class="card absolute right-0 border-transparent" :model="item" />
      <Dialog
        ref="dialog"
        v-model:visible="showDialog"
        modal
        header="Login"
        :style="{ width: '30rem', backgroundColor: '#212121' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        :dismissableMask="true"
      >
        <div class="flex align-items-center justify-content-center">
          <img
            :src="isDarkMode ? '/src/assets/img/logo-dark.png' : '/src/assets/img/logo.png'"
            style="width: 90px"
          />
        </div>
        <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
          <InputText id="username" class="flex h-2rem mt-3" autocomplete="off" />
          <label :class="['left-auto text-lg', { 'dark-text': isDarkMode }]" for="username"
            >Username</label
          >
        </FloatLabel>
        <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
          <InputText id="password" class="flex h-2rem mt-3" autocomplete="off" />
          <label :class="['left-auto text-lg', { 'dark-text': isDarkMode }]" for="password"
            >Password</label
          >
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
            @click="toggleLogin()"
            :class="{ 'dark-button': isDarkMode }"
          ></Button>
        </div>
        <div>
          <small class="flex justify-content-end mt-1">
            <a href="#" :class="['text-orange-500', { 'dark-link': isDarkMode }]"
              >Doesn't have account? Click me!</a
            >
          </small>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script>
import Menu from 'primevue/menu'
import TabMenu from 'primevue/tabmenu'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

export default {
  components: {
    TabMenu,
    Menu,
    Dialog,
    Button,
    InputText,
    FloatLabel
  },
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    menuVisible: false,
    accouuntVisible: false,
    loginvisible: true,
    showDialog: false,
    password: {
      show: false,
      current: null,
      new: null,
      verify: null
    },
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
          },
          {
            label: 'Log Out',
            url: '/'
          }
        ]
      }
    ]
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    toggleLogin() {
      this.showDialog = false
      this.loginvisible = !this.loginvisible
      this.accouuntVisible = !this.accouuntVisible
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

.p-dialog .p-dialog-content.dark-toolbar {
  background-color: #212121;
}

::v-deep(.p-menu) {
  top: 11.4% !important;
  right: 3.9% !important;
  z-index: 10;
  padding: 0;
  border: 2px solid #fe7a36 !important;
  border-radius: 10px;
}

::v-deep(.p-menu) .p-submenu-header {
  display: none;
}

::v-deep(.p-menu) .p-menuitem {
  padding: 0.7rem;
}

::v-deep(.p-menu) .p-menuitem:hover {
  background-color: #fe7a36;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content .p-menuitem-link {
  transition: none;
}

::v-deep(.p-menu) .p-menuitem .p-menuitem-content .p-menuitem-link:hover {
  background-color: #fe7a36;
}

::v-deep(.p-menu) .p-menuitem:hover .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: white;
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
</style>
