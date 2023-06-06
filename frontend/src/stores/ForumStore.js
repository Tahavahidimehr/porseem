import {ref} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import { useRouter } from "vue-router";

export const useForumStore = defineStore('forumStore', () => {
    const forums = ref([])
    const topics = ref([])
    const topic = ref([])
    const tags = ref([])
    const errors = ref([])
    const error = ref('')
    const loading = ref(false)

    const router = useRouter()

    const baseURL = 'http://localhost:8000/api'

    async function getForums(search) {
        loading.value = true
        let url = ''
        if (search) {
            url = `${baseURL}/forums?search=${search}`
        }
        else {
            url = `${baseURL}/forums`
        }
        await axios.get(url)
            .then(res => {
                forums.value = res.data.forums
            })
            .catch((err) => console.log(err))
        loading.value = false
    }

    async function getForumTopics(forumSlug) {
        loading.value = true
        await axios.get(`${baseURL}/forums/${forumSlug}`)
            .then(res => {
                topics.value = res.data.topics[res.data.topics.findIndex((item) => item.slug === forumSlug)].topics
            })
            .catch((err) => console.log(err))
        loading.value = false
    }

    async function getForumTopic(forumSlug, topicSlug) {
        loading.value = true
        await axios.get(`${baseURL}/forums/${forumSlug}/${topicSlug}`)
            .then(res => {
                topic.value = res.data.topic[res.data.topic.findIndex(item => item.slug === topicSlug)]
            })
            .catch((err) => console.log(err))
        loading.value = false
    }

    async function createForum(data) {
        loading.value = true
        await axios.post(`${baseURL}/forums/new`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                router.push({ name: 'forums' })
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

    async function createTopic(data) {
        loading.value = true
        await axios.post(`${baseURL}/forums/${data.forumSlug}/new`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                router.push({ name: 'forumTopics', params: { forum: data.forumSlug } })
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

    async function createComment(data) {
        loading.value = true
        await axios.post(`${baseURL}/forums/${data.forumSlug}/${data.topicSlug}/comment`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                // router.push({ name: 'forumTopicDetail', params: { forum: data.forumSlug, topic: data.topicSlug } })
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


    return { loading, forums, topics, topic, errors, error, getForumTopic, getForums, getForumTopics, createForum, createTopic, createComment }
})
