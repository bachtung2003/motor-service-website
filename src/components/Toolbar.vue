<template>
  <div id="toolbar-wrapper">
    <div class="logo">
      <img class="logo-image" :src="`/src/assets/img/logo.png`" style="width: 32px" />
      <a href="#">AHAMAY</a>
    </div>
    <div class="container">
      <TabMenu :model="navigation" class="navigation" />
      <Button label="Login" @click="showDialog = true" />
      <Dialog
        ref="dialog"
        v-model:visible="showDialog"
        modal
        header="Login"
        :style="{ width: '25rem' }"
      >
        <div class="flex align-items-center justify-content-center">
          <img :src="`/src/assets/img/logo.png`" style="width: 90px" />
        </div>
        <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
          <InputText id="username" class="flex h-2rem mt-3" autocomplete="off" />
          <label class="left-auto text-lg" for="username">Username</label>
        </FloatLabel>
        <FloatLabel class="flex align-items-center justify-content-center gap-3 mb-3">
          <InputText id="password" class="flex h-2rem mt-3" autocomplete="off" />
          <label class="left-auto text-lg" for="password">Password</label>
        </FloatLabel>
        <div class="flex justify-content-end gap-3 h-2rem">
          <Button
            class="w-4rem"
            type="button"
            label="Cancel"
            severity="secondary"
            @click="showDialog = false"
          ></Button>
          <Button
            class="w-4rem bg-orange-500 border-orange-500"
            type="button"
            label="Login"
            @click="visible = false"
          ></Button>
        </div>
        <div>
          <small class="flex justify-content-end mt-1"
            ><a href="#" class="text-orange-500">Doesn't have account ? Click me !</a></small
          >
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
  data: () => ({
    showDialog: false, // Add this line
    password: {
      show: false,
      current: null,
      new: null,
      verify: null
    },
    navigation: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' }
    ]
  })
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
#toolbar-wrapper {
  position: absolute;
  width: 100%;
  display: flex;
  left: 0;
  top: 0%;
  justify-content: space-between;
  padding: 20px 148px;
  background: #ffff;
}

.container {
  display: flex;
}

.container .p-button {
  margin-top: 18px;
  height: 38px;
  width: 70px;
  border-radius: 20px;
  background: #fe7a36;
  border: 1px solid #fe7a36;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 76px !important;
  height: 76px;
  border-radius: 50%;
}

.logo a {
  font-size: 18px;
  color: #3e3e3e;
  font-family: '_pepsi_regular' !important;
  font-style: normal;
  font-weight: normal;
  color: #fe7a36;
}

.logo-image {
  width: 76px !important;
  height: 76px;
}

.p-tabmenu {
  overflow: hidden;
}

::v-deep(.p-tabmenu) .p-tabmenu-nav {
  padding: 20px 148px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  list-style-type: none;
  font-size: 1.2rem;
  border: none;
  padding-left: 0;
  padding-right: 0;
}

::v-deep(.p-tabmenu) .p-tabmenuitem .p-menuitem-link {
  padding: 0.55rem 1rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #0c0c0c;
  @media only screen and (max-width: 576px) {
    padding: 0.55rem;
  }
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
