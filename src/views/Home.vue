<script setup lang="ts">
// Page title
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['updatePageTitle'])
emit('updatePageTitle', t('pageTitles.home'))
</script>

<template>
  <div>
    <h1>Home View</h1>
  </div>
</template>

<style scoped></style>
