<script setup>
  import { RouterLink } from 'vue-router';
  import Logo from './Logo.vue';
  import {useAuthStore} from "@/stores/AuthStore";
  import {onMounted, ref} from "vue";
  import UserIcon from "@/components/icons/UserIcon.vue";
  import AngleDownIcon from "@/components/icons/AngleDownIcon.vue";

  const authStore = useAuthStore()

  let isMenuOpen = ref(false)
  let menuBtn = ref(null)
  let menu = ref(null)

  const menuHandler = () => {
    if (!isMenuOpen.value) {
      menuBtn.value.classList.add('bg-gray-100')
      isMenuOpen.value = true
    }
    else {
      menuBtn.value.classList.remove('bg-gray-100')
      isMenuOpen.value = false
    }
  }

  onMounted(() => {
    authStore.check()
  })
</script>

<template>
    <nav class="h-20 px-10 flex justify-between items-center bg-white shadow-md relative">
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
            <div v-else>
              <div @click="menuHandler" ref="menuBtn" class="px-4 py-3 flex items-center rounded fill-gray-700 hover:bg-gray-100 transition cursor-pointer">
                <UserIcon class="h-5"/>
                <AngleDownIcon class="h-3 mr-3 mt-1"/>
              </div>
              <div ref="menu" v-if="isMenuOpen" class="w-48 h-28 z-50 bg-white rounded shadow-md absolute left-10 top-16 border-t border-gray-50">
                <div class="w-full h-2/4 rounded flex items-center px-5 border-b border-gray-100 text-sm">{{ authStore.userData && authStore.userData.value.name }}</div>
                <div v-on:click="authStore.logout()" class="w-full h-2/4 rounded flex items-center px-5 text-sm hover:bg-gray-50 transition cursor-pointer">خروج</div>
              </div>
            </div>
          </template>
        </div>
    </nav>
</template>