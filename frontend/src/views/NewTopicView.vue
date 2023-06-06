<script setup>
import {ref} from "vue";
import {useForumStore} from "@/stores/ForumStore";
import {useRoute} from "vue-router";

const store = useForumStore()

let title = ref('')
let description = ref('')

const route = useRoute()

const formSubmitHandler = () => {
  store.createTopic({ title: title.value, description: description.value, forumSlug: route.params.forum })
}
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full flex justify-between items-center border-b border-gray-200 pb-6">
      <h1 class="text-2xl font-bold">تاپیک جدید</h1>
    </div>
    <form @submit.prevent="formSubmitHandler" class="w-full text-gray-700 flex flex-col border-b border-r border-l border-gray-300 p-7 justify-start items-center">
      <div class="w-full my-2">
        <div class="w-2/4 mb-2 text-sm">عنوان</div>
        <input name="title" v-model="title" type="text" :class="{'border border-red-500': store.errors && store.errors.title}" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
        <span v-if="store.errors.title" class="text-red-500 text-sm mt-2">{{ store.errors.title && store.errors.title[0] }}</span>
      </div>
      <div class="w-full my-2">
        <div class="w-full mb-2 text-sm">توضیحات</div>
        <textarea v-model="description" :class="{'border border-red-500': store.errors && store.errors.description}" class="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition"></textarea>
        <span v-if="store.errors.description" class="text-red-500 text-sm mt-2">{{ store.errors.description && store.errors.description[0] }}</span>
      </div>
      <div class="w-full flex justify-end my-3">
        <button type="submit" class="w-40 py-2 px-3 rounded bg-gray-800 text-white flex justify-center items-center transition hover:bg-gray-700 focus:outline-none">
          ایجاد کن
        </button>
      </div>
    </form>
  </div>
</template>