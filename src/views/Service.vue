<template>
  <div class="section2-wrapper">
    <div class="image2" :style="backgroundImageStyle2">
      <p class="flex relative justify-content-center text-xs">GREAT CAR SERVICE</p>
      <h1 class="about2-header flex justify-content-center text-white text-5xl text-center">
        Premium car service matched with great workmanship. Best services you can count on
      </h1>
    </div>
    <div class="services-content">
      <Breadcrumb :home="home" :model="items" class="pl-7"></Breadcrumb>
      <div>
        <h1 class="content_header flex justify-content-center text-blue-700 text-5xl">
          All SERVICES
        </h1>
        <DataView :value="filteredServices">
          <template #header>
            <Dropdown
              :options="filterOptions"
              v-model="selectedFilter"
              optionLabel="label"
              placeholder="All Services"
            />
          </template>
          <template #list="slotProps">
            <div v-for="(item, index) in slotProps.items" :key="index">
              <div
                class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3 border-1 mt-2"
              >
                <div class="md:w-10rem relative">
                  <img
                    class="block xl:block mx-auto border-round w-full"
                    :src="item.image"
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
                      <div class="text-5xl font-medium text-900 mt-2">{{ item.label }}</div>
                      <span class="font-medium text-secondary text-base">{{
                        item.description
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <Button
                    class="w-full h-3rem text-xl font-semibold text-blue-700 bg-white border-round-xs border-1 border-orange-500"
                    >Ask For Price</Button
                  >
                  <Button
                    class="text-xl h-3rem font-semibold text-white bg-orange-500 border-orange-500"
                    @click="navigateRoute"
                    >Set Appointment</Button
                  >
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import DataView from 'primevue/dataview'
import Dropdown from 'primevue/dropdown'
import servicesData from '@/services/data'
export default {
  components: {
    Breadcrumb,
    DataView,
    Dropdown
  },
  data() {
    return {
      imgURL2: '/src/assets/img/banner2.png',
      home: { icon: 'pi pi-home', url: '/' },
      items: [{ label: 'Services', url: '/#' }],
      services: [],
      filterOptions: [
        { label: 'All Service', value: 'all' },
        { label: 'Car Service', value: 'car' },
        { label: 'Tire Service', value: 'tire' }
      ],
      selectedFilter: ''
    }
  },
  mounted() {
    this.services = servicesData
  },
  computed: {
    backgroundImageStyle2() {
      return {
        backgroundImage: `url(${this.imgURL2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }
    },
    filteredServices() {
      console.log('Selected filter:', this.selectedFilter)

      if (!this.selectedFilter || Object.keys(this.selectedFilter).length === 0) {
        return this.services
      } else {
        return this.services.filter((service) => {
          if (this.selectedFilter.value === 'all') {
            return this.services
          } else {
            return service.category === this.selectedFilter.value
          }
        })
      }
    }
  },
  methods: {
    navigateRoute() {
      this.$router.push('/appointment')
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
.image2 {
  height: 19rem;
}

.image2 .p-breadcrumb {
  background-color: transparent;
  border: 0px transparent;
}

.p-breadcrumb {
  border: none;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:hover {
  background-color: #fe7a36;
}

.p-dataview {
  margin: 0 10rem 0 10rem;
}

.p-dataview-header {
  background-color: #fe7a36;
  margin-bottom: 3rem;
}
.image2 p {
  top: 50px;
  letter-spacing: 2px;
  color: #ffff;
}

.section2-wrapper .info-wrapper {
  height: 27rem;
}

.section2-wrapper {
  width: 100vw;
}
.section2-wrapper div .about2-header {
  font-weight: 600;
  padding-left: 16rem !important;
  padding-right: 14rem !important;
  padding-top: 4rem;
}
.section2-wrapper div .about2-button {
  letter-spacing: 3px;
  top: 3rem;
  left: 42rem;
  background-color: #ffff;
  border: solid 1px #ffff;
}

.section2-wrapper .image2 .about2-button .p-button-label {
  color: #fe7a36;
}

.section2-wrapper div .about2-button span {
  color: #fe7a36;
}
</style>
