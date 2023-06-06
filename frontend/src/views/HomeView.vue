<script setup>
  import Benefits from '../components/Benefits.vue';
  import OurTeam from '../components/OurTeam.vue';
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  import {useAuthStore} from "@/stores/AuthStore";

  const store = useAuthStore()
</script>

<template>
    <DefaultLayout>
        <header class="h-screen">
            <div class="h-full flex">
                <div class="w-2/4 h-full flex flex-col justify-center items-center">
                  <h1 class="text-5xl">با پرسیم بی جواب نمیمونی!</h1>
                  <p class="text-2xl mt-10 text-gray-500">همین حالا فروم کسب و کار خودتو ایجاد کن</p>
                  <RouterLink v-if="!store.isLoggedIn" :to="{ name: 'register' }" class="px-6 py-4 mt-10 rounded text-white bg-gray-900 text-2xl">عضویت در پرسیم</RouterLink>
                </div>
                <div class="w-2/4 h-full flex justify-center items-center">
                  <img class="h-3/4" src="/Asset3.svg" alt="">
                </div>
            </div>
        </header>
        <main>
            <Benefits />
            <OurTeam />
        </main>
    </DefaultLayout>
</template>
