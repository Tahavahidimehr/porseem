<script setup>
import {reactive, ref} from 'vue';
import Logo from '../components/Logo.vue';
import {useAuthStore} from "@/stores/AuthStore";
import LoaderIcon from "@/components/icons/LoaderIcon.vue";
import axios from "axios";

  const authStore = useAuthStore()

    const personsBtn = ref(null)
    const jobsBtn = ref(null)
    let registerType = ref('persons')
    let name = ref(null)
    let email = ref(null)
    let phone = ref(null)
    let password = ref(null)
    let password_confirmation = ref(null)

    const toggleBtn = (event) => {
        if(event.currentTarget.id === 'personsBtn') {
            registerType.value = 'persons'
            personsBtn.value.classList.add('border-gray-700')
            personsBtn.value.classList.remove('border-gray-300')
            jobsBtn.value.classList.add('border-gray-300')
            jobsBtn.value.classList.remove('border-gray-700')
        }
        else {
            registerType.value = 'jobs'
            personsBtn.value.classList.remove('border-gray-700')
            personsBtn.value.classList.add('border-gray-300')
            jobsBtn.value.classList.remove('border-gray-300')
            jobsBtn.value.classList.add('border-gray-700')
        }
        if (authStore.error)
          authStore.error.value = null
        if (authStore.errors)
          authStore.errors.value = {}
    }

    const registerHandler = () => {
      authStore.register({
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        register_type: registerType.value
      })
    }
</script>

<template>
    <div class="w-full flex flex-col justify-center items-center py-10">
        <form v-on:submit.prevent="registerHandler" enctype="multipart/form-data" class="w-96 p-7 text-gray-700 rounded border border-gray-300 flex flex-col justify-start items-center">
            <Logo />    
            <div class="w-full my-6"><h1 class="text-xl text-right font-bold">ثبت نام</h1></div>
            <span v-if="authStore.error" class="text-red-500 text-sm mt-2">{{ authStore.error }}</span>
            <div class="w-full flex items-end mb-7">
                <button type="button" @click="$event => toggleBtn($event)" id="personsBtn" ref="personsBtn" class="w-2/4 rounded-r py-3 border border-gray-700 text-sm">افراد</button>
                <button type="button" @click="$event => toggleBtn($event)" ref="jobsBtn" id="jobsBtn" class="w-2/4 rounded-l py-3 border text-sm border-gray-300">مشاغل</button>
            </div>
            <div class="w-full my-2">
                <div v-if="registerType === 'jobs'" class="w-full mb-2 text-sm">عنوان کسب و کار</div>
                <div v-else class="w-full mb-2 text-sm">نام</div>
                <input name="name" v-model="name" :class="{'border border-red-500': authStore.errors.value && authStore.errors.value.name}"  type="text" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                <span v-if="authStore.errors.value" class="text-red-500 text-sm mt-2">{{ authStore.errors.value.name && authStore.errors.value.name[0] }}</span>
            </div>
            <div class="w-full my-2">
                <div class="w-full mb-2 text-sm">ایمیل</div>
                <input name="email" v-model="email" :class="{'border border-red-500': authStore.errors.value && authStore.errors.value.email}"  type="email" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                <span v-if="authStore.errors.value" class="text-red-500 text-sm mt-2">{{ authStore.errors.value.email && authStore.errors.value.email[0] }}</span>
            </div>
            <div class="w-full my-2">
              <div class="w-full mb-2 text-sm">موبایل</div>
              <input name="phone" v-model="phone" :class="{'border border-red-500': authStore.errors.value && authStore.errors.value.phone}"  type="text" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
              <span v-if="authStore.errors.value" class="text-red-500 text-sm mt-2">{{ authStore.errors.value.phone && authStore.errors.value.phone[0] }}</span>
            </div>
            <div class="w-full my-2">
                <div class="w-full mb-2 text-sm">رمز عبور</div>
                <input name="password" v-model="password" :class="{'border border-red-500': authStore.errors.value && authStore.errors.value.password}"  type="password" class="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                <span v-if="authStore.errors.value" class="text-red-500 text-sm mt-2">{{ authStore.errors.value.password && authStore.errors.value.password[0] }}</span>
            </div>
            <div class="w-full my-2">
              <div class="w-full mb-2 text-sm">تکرار رمز عبور</div>
              <input name="password_confirmation" v-model="password_confirmation" type="password" class="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
            </div>
            <div class="w-full my-3">
                <button type="submit" :class="{'cursor-not-allowed': authStore.loading}" class="w-full py-2 px-3 rounded bg-gray-800 text-white flex justify-center items-center transition hover:bg-gray-700 focus:outline-none">
                    <span v-if="! authStore.loading">ثبت نام</span>
                    <LoaderIcon v-else class="animate-spin fill-white h-6"/>
                </button>
            </div>
            <div class="w-full flex justify-between items-center text-gray-600" style="font-size: 13px">
                <RouterLink :to="{ name: 'login' }">حساب کاربری دارید؟ وارد شوید</RouterLink>
            </div>
        </form>
    </div>
</template>