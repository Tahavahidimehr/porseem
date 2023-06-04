<script setup>
  import { RouterLink } from 'vue-router';
  import Logo from './Logo.vue';
  import {useAuthStore} from "@/stores/AuthStore";
  import {onMounted} from "vue";

  const authStore = useAuthStore()

  onMounted(() => {
    authStore.check()
  })
</script>

<template>
    <nav class="h-20 px-10 flex justify-between items-center bg-white shadow-md">
        <Logo />
        <div class="flex items-center">
          <ul class="flex items-center">
            <li class="ml-7 text-lg text-gray-700"><RouterLink :to="{ name: 'forums' }">فروم ها</RouterLink></li>
          </ul>
          <template v-if="authStore.loading">
            <div  class="animate-pulse h-8 w-28 rounded bg-gray-200"></div>
          </template>
          <template v-else>
            <RouterLink v-if="! authStore.isLoggedIn" :to="{ name: 'login' }" class="px-4 py-2 rounded text-gray-700 border border-gray-700">ثبت نام یا ورود</RouterLink>
            <h1 v-else v-on:click="authStore.logout()">{{ authStore.userData && authStore.userData.value.name }}</h1>
          </template>
        </div>
    </nav>
</template>