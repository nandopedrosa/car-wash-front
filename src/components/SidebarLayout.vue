<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const pageTitle = ref('Home')

function updatePageTitle(newPageTitle: string) {
  pageTitle.value = newPageTitle
}
</script>

<template>
  <div class="min-h-screen flex relative lg:static surface-ground">
    <div
      id="app-sidebar-1"
      class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
      style="width: 280px"
    >
      <div class="flex flex-column h-full">
        <div class="flex align-items-center px-5 pt-3 flex-shrink-0" style="height: 60px">
          <img src="images/logo.png" alt="Image" height="120" />
        </div>
        <div class="overflow-y-auto">
          <ul class="list-none pt-5 pl-3 pr-3 pb-1 m-0">
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-book mr-2"></i>
                <span class="font-medium">{{ $t('nav.bookings') }}</span>
              </a>
            </li>
          </ul>

          <ul class="list-none pl-3 pr-3 m-0">
            <li>
              <div
                v-ripple
                class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                v-styleclass="{
                  selector: '@next',
                  enterClass: 'hidden',
                  enterActiveClass: 'slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'slideup'
                }"
              >
                <span class="font-semibold">{{ $t('nav.admin') }}</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                  <a
                    v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i class="pi pi-car mr-2"></i>
                    <span class="font-medium">{{ $t('nav.company') }}</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i class="pi pi-bars mr-2"></i>
                    <span class="font-medium">{{ $t('nav.branches') }}</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i class="pi pi-wrench mr-2"></i>
                    <span class="font-medium">{{ $t('nav.serviceTypes') }}</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i class="pi pi-users mr-2"></i>
                    <span class="font-medium">{{ $t('nav.users') }}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div
        class="flex justify-content-between align-items-center px-3 surface-0 border-bottom-1 surface-border relative lg:static"
        style="height: 60px"
      >
        <a
          v-ripple
          class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
          v-styleclass="{
            selector: '#app-sidebar-1',
            enterClass: 'hidden',
            enterActiveClass: 'fadeinleft',
            leaveToClass: 'hidden',
            leaveActiveClass: 'fadeoutleft',
            hideOnOutsideClick: true
          }"
        >
          <i class="pi pi-bars text-4xl"></i>
        </a>
        <ul
          class="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto"
        >
          <li class="px-2">
            <span class="text-600 white-space-nowrap">{{ pageTitle }}</span>
          </li>
        </ul>

        <ul
          class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
        >
          <li class="border-top-1 surface-border lg:border-top-none">
            <RouterLink class="no-underline" to="/">
              <div class="block mr-4">
                <div class="text-900 font-medium">Fernando Pedrosa</div>
                <span class="text-600 font-medium text-sm">fpedrosa@gmail.com</span>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="p-5 flex flex-column flex-auto">
        <div class="border-2 surface-border border-round surface-section flex-auto">
          <RouterView class="p-3" v-on:updatePageTitle="updatePageTitle" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
