<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['updatePageTitle'])
emit('updatePageTitle', t('messages.pageNotFound'))
</script>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div style="background: radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%);" class="text-center">
        <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
    </div>
    <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">{{$t('messages.pageNotFound')}}</div>
    <p class="text-700 text-3xl mt-0 mb-6 text-center">{{$t('messages.sorryWeCouldNotFindThePage')}}</p>
    <div class="text-center">
        <Button class="p-button-text mr-2" :label="$t('buttons.goBack')" icon="pi pi-arrow-left"></Button>
        <Button :label="$t('buttons.goToHome')" icon="pi pi-home"></Button>
    </div>
</div>
</template>

<style scoped></style>
