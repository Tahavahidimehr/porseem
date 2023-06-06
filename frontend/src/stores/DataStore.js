import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
    const benefits = ref([
        {
            id: 1,
            name: '',
            comment: ''
        },
        {
            id: 2,
            name: '',
            comment: ''
        },
        {
            id: 3,
            name: '',
            comment: ''
        },
        {
            id: 4,
            name: '',
            comment: ''
        },
        {
            id: 5,
            name: '',
            comment: ''
        },
        {
            id: 6,
            name: '',
            comment: ''
        },
    ])

    const team = ref([
        {
            id: 11,
            name: 'محمد پورممی',
            job: 'بک اند',
            avatar: '/mohammad.jpg'
        },
        {
            id: 12,
            name: 'طاها وحیدی مهر',
            job: 'فرانت اند',
            avatar: '/taha.jpg'
        },
        {
            id: 13,
            name: 'علیرضا محمدخانی',
            job: 'شبکه',
            avatar: '/profile.png'
        },
        {
            id: 14,
            name: 'نیما عباسی',
            job: 'بک اند',
            avatar: '/nima.jpg'
        },
        {
            id: 15,
            name: 'سپهر جلیز',
            job: 'فرانت اند',
            avatar: '/sepehr.jpg'
        },
        {
            id: 16,
            name: 'علیرضا تیزقدم',
            job: 'امنیت',
            avatar: '/alireza.jpg'
        },
        {
            id: 17,
            name: 'سجاد نجف نژاد',
            job: 'اپلیکیشن موبایل',
            avatar: '/profile.png'
        },
    ])

    return { team, benefits }
})