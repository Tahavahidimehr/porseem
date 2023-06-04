import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('authStore', () => {
    const loading = ref(false)
    const isLoggedIn = ref(false)
    const userData = reactive({})
    const errors = reactive({})
    const error = ref(null)

    const router = useRouter()

    const baseURL = 'http://localhost:8000/api'

    async function check() {
        loading.value = true
        const token = localStorage.getItem('token')
        if (token) {
            await axios.get(`${baseURL}/user`, { headers: { 'Authorization': `Bearer ${token}` } })
                .then(res => {
                    if (res.data) {
                        isLoggedIn.value = true
                        userData.value = res.data
                    }

                })
                .catch(() => localStorage.removeItem('token'))
        }
        loading.value = false
    }

    async function register(data) {
        loading.value = true
        await axios.post(`${baseURL}/register`, data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                isLoggedIn.value = true
                userData.value = res.data.user
                router.push({ name: 'home' })
            })
            .catch(err => {
                console.log(err)
                if (err.response.data.errors) {
                    errors.value = err.response.data.errors
                }
                else {
                    error.value = err.response.data.message
                }
            })
        loading.value = false
    }

    async function login(data) {
        loading.value = true
        await axios.post(`${baseURL}/login`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                isLoggedIn.value = true
                userData.value = res.data.user
                router.push({ name: 'home' })
            })
            .catch(err => {
                console.log(err)
                if (err.response.data.errors) {
                    errors.value = err.response.data.errors
                }
                else {
                    error.value = err.response.data.message
                }
            })
        loading.value = false
    }

    async function logout() {
        loading.value = true
        await axios.post(`${baseURL}/logout`, null , { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(() => {
                localStorage.removeItem('token')
                isLoggedIn.value = false
                userData.value = {}
                errors.value = {}
                error.value = null
                router.push({ name: 'home' })
            })
        loading.value = false
    }

    return { loading, isLoggedIn, userData, errors, error, login, check, register, logout }
})
