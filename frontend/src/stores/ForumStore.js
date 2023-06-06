import {reactive, ref} from 'vue'
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

    async function getForums() {
        loading.value = true
        await axios.get(`${baseURL}/forums`)
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
                topics.value = res.data.topics[0].topics
            })
            .catch((err) => console.log(err))
        loading.value = false
    }

    async function getForumTopic(forumSlug, topicSlug) {
        loading.value = true
        await axios.get(`${baseURL}/forums/${forumSlug}/${topicSlug}`)
            .then(res => {
                topic.value = res.data.topic
            })
            .catch((err) => console.log(err))
        loading.value = false
    }

    async function createForum(data) {
        loading.value = true
        await axios.post(`${baseURL}/forums/new`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                console.log(res.data)
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


    return { loading, forums, topics, topic, errors, error, getForumTopic, getForums, getForumTopics, createForum }
})
