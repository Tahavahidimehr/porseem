<script setup>
    import Logo from '../components/Logo.vue';
    import {ref} from "vue";
    import { useRouter } from 'vue-router'
    import { useAuthStore } from "@/stores/AuthStore";
    import LoaderIcon from "@/components/icons/LoaderIcon.vue";
    let email = ref(null)
    let password = ref(null)

    const router = useRouter()
    const authStore = useAuthStore()

    const loginHandler = () => {
      authStore.login({ email: email.value, password: password.value })
    }
</script>

<template>
    <div v-on:submit.prevent="loginHandler" class="w-full h-screen flex flex-col justify-center items-center">
        <form class="w-96 p-7 text-gray-700 rounded border border-gray-300 flex flex-col justify-start items-center">
            <Logo />
            <div class="w-full my-6"><h1 class="text-xl text-right font-bold">ورود</h1></div>
            <span v-if="authStore.error" class="text-red-500 text-sm mt-2">{{ authStore.error }}</span>
            <div class="w-full my-2">
                <div class="w-full mb-2 text-sm">ایمیل</div>
                <input name="email" :class="{'border border-red-500': authStore.errors.value && authStore.errors.value.email}" v-model="email" type="email" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                <span v-if="authStore.errors.value" class="text-red-500 text-sm mt-2">{{ authStore.errors.value.email && authStore.errors.value.email[0] }}</span>
            </div>
            <div class="w-full my-2">
                <div class="w-full mb-2 text-sm">رمز عبور</div>
                <input name="password" :class="{'border border-red-500': authStore.errors.value && authStore.errors.value.password}" v-model="password" type="password" class="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                <span v-if="authStore.errors.value" class="text-red-500 text-sm mt-2">{{ authStore.errors.value.password && authStore.errors.value.password[0] }}</span>
            </div>
            <div class="w-full my-3">
                <button type="submit" :class="{'cursor-not-allowed': authStore.loading}" class="w-full py-2 px-3 rounded bg-gray-800 text-white flex justify-center items-center transition hover:bg-gray-700 focus:outline-none">
                    <span v-if="! authStore.loading">ورود</span>
                    <LoaderIcon v-else class="animate-spin fill-white h-6"/>
                </button>
            </div>
            <div class="w-full flex justify-between items-center text-gray-600" style="font-size: 13px">
                <RouterLink :to="{ name: 'register' }">ایجاد حساب کاربری</RouterLink>
                <RouterLink to="/">فراموشی رمز عبور</RouterLink>
            </div>
        </form>
    </div>
</template>