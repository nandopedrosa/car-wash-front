<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {UseAuthService} from '@/services/auth-service'
import SidebarLayout from '@/components/SidebarLayout.vue'
import Login from '@/views/auth/Login.vue'

const authService = UseAuthService();

const showLoginScreen = computed(() => {
  return !authService.isAuthenticated;
});

</script>

<template> 
<template v-if="showLoginScreen">
  <Login/>
</template>
<template v-else>
  <SidebarLayout/>
</template>

</template>


<style scoped>

</style>
