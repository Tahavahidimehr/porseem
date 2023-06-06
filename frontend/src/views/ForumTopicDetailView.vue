<script setup>
import ReplyIcon from '../components/icons/ReplyIcon.vue'
import {onMounted, ref} from "vue";
import {useForumStore} from "@/stores/ForumStore";
import {useRoute} from "vue-router";
import {useAuthStore} from "@/stores/AuthStore";

const forumStore = useForumStore()
const authStore = useAuthStore()

let comment = ref('')

const route = useRoute()

const formSubmitHandler = () => {
  forumStore.createComment({ comment: comment.value, forumSlug: route.params.forum, topicSlug: route.params.topic })
  comment.value = ''
}

onMounted(() => {
  forumStore.getForumTopic(route.params.forum, route.params.topic)
})
</script>

<template>
    <div class="flex flex-col">
        <div class="w-full border-t border-gray-100 pt-5 shadow-md rounded flex flex-col px-5 pb-5">
            <div class="w-full flex justify-between items-center">
                <div class="flex justify-between items-center">
                    <div class="w-20 h-20 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                    <div class="flex flex-col mr-2">
                        <h1 class="text-xl text-gray-800">{{ forumStore.topic.user && forumStore.topic.user.name }}</h1>
                        <h2 class="text-gray-400 text-sm mt-2">2 ساعت پیش مطرح شده</h2>
                    </div>
                </div>
                <div class="px-5 py-1.5 border border-gray-800 text-gray-800 rounded transition cursor-pointer hover:bg-gray-800 hover:text-white  flex justify-center items-center">
                    <ReplyIcon class="h-5 ml-2"/>پاسخ دادن
                </div>
            </div>
            <h1 class="mt-10 text-3xl text-gray-800 font-bold mr-3">{{ forumStore.topic.title }}</h1>
            <div class="w-full rounded p-7 leading-7 mt-10 text-gray-600 bg-gray-100">{{ forumStore.topic.description }}</div>
            <div class="w-full border-b border-gray-200 my-5"></div>
            <div class="flex justify-end items-center">
                <RouterLink :to="{ name: 'topicsOfTag', params: { tag: tag.tag } }" v-for="tag in forumStore.tags" class="px-2 py-1 rounded text-gray-500 border border-gray-400 mr-2">#{{ tag.tag }}</RouterLink>
            </div>
        </div>

        <div v-for="comment in forumStore.topic.comments" :key="comment.id" class="w-full mt-5 bg-gray-100 rounded p-7 min-h-[20rem]">
            <div class="w-full flex justify-between items-center">
                <div class="flex justify-between items-start">
                    <div class="w-14 h-14 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                    <div class="flex flex-col mr-2">
                        <h1 class="text-lg text-gray-800">{{ comment.user.name }}</h1>
                        <h2 class="text-gray-400 text-sm mt-2">2 ساعت پیش مطرح شده</h2>
                    </div>
                </div>
            </div>
          <div class="w-full rounded min-h-[12rem] p-7 leading-7 mt-5 text-gray-600 bg-gray-50">{{ comment.comment }}</div>
        </div>

        <template v-if="authStore.isLoggedIn">
          <form @submit.prevent="formSubmitHandler" class="w-full mt-5 rounded min-h-[20rem] border border-gray-300 p-5">
            <div class="w-full flex justify-between items-center">
              <div class="flex justify-between items-center">
                <div class="w-14 h-14 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                <h1 class="text-lg text-gray-800 mr-3">{{ authStore.userData.value && authStore.userData.value.name }}</h1>
              </div>
            </div>
            <textarea v-model="comment" :class="{'border border-red-500': forumStore.errors && forumStore.errors.comment}" class="w-full focus:outline-none rounded min-h-[12rem] p-7 leading-7 mt-5 text-gray-600 border border-gray-300"></textarea>
            <span v-if="forumStore.errors.comment" class="text-red-500 text-sm mt-2">{{ forumStore.errors.comment && forumStore.errors.comment[0] }}</span>
            <div class="w-full flex justify-end my-3">
              <button type="submit" class="w-40 p-2 rounded bg-gray-800 text-white flex justify-center items-center transition hover:bg-gray-700 focus:outline-none">
                ثبت پاسخ
              </button>
            </div>
          </form>
        </template>
      <template v-else>
        <RouterLink :to="{ name: 'login' }" class="w-full h-20 flex justify-start items-center px-10 mt-5 rounded shadow-md">برای ثبت پاسخ لطفا ابتدا وارد شوید.</RouterLink>
      </template>
    </div>
</template>
