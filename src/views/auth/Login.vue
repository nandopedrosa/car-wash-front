<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['updatePageTitle'])
emit('updatePageTitle', t('pageTitles.login'))
</script>

<template>
  <div>
    <h1>Login</h1>
  </div>
</template>

<style scoped></style>
