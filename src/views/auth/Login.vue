<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['updatePageTitle'])
emit('updatePageTitle', t('pageTitles.login'))
</script>

<template>
  <div class="center surface-card p-4 shadow-2 border-round lg:w-6">
    <div class="text-center mb-5">
      <img src="/images/logo.png" alt="Image" height="100" class="mb-3" />
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

      <label for="password1" class="block text-900 font-medium mb-2">Password</label>
      <InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
          >Forgot password?</a
        >
      </div>
      <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
  </div>
</template>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
