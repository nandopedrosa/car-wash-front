<script setup lang="ts">
   import { useI18n } from "vue-i18n";
    const { t } = useI18n();    
    const emit = defineEmits(['updatePageTitle']);
    emit('updatePageTitle', t('pageTitles.signup'));
</script>

<template>
  <div>
    <h1>Sign Up</h1>
  </div>
</template>

<style scoped></style>
