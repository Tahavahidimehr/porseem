<script setup>
import ReplyIcon from '../components/icons/ReplyIcon.vue'

defineProps(['topic', 'forumSlug'])
</script>

<template>
    <div class="w-full h-96 border-t border-gray-100 pt-5 mb-10 shadow-md rounded flex flex-col px-10 pb-7">
            <div class="w-full flex justify-between items-center">
                <div class="flex justify-between items-center">
                    <div class="w-20 h-20 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                    <div class="flex flex-col mr-2">
                        <h1 class="text-xl text-gray-800">{{ topic.user.name }}</h1>
                        <h2 class="text-gray-400 text-sm mt-2">2 ساعت پیش مطرح شده</h2>
                    </div>
                </div>
                <RouterLink :to="{ name: 'forumTopicDetail', params: { forum: forumSlug, topic: topic.slug } }" class="px-5 py-1.5 border border-gray-800 text-gray-800 rounded transition cursor-pointer hover:bg-gray-800 hover:text-white  flex justify-center items-center">
                    <ReplyIcon class="h-5 ml-2"/>پاسخ دادن
                </RouterLink>
            </div>
            <RouterLink :to="{ name: 'forumTopicDetail', params: { forum: forumSlug, topic: topic.slug } }" class="mt-10 hover:text-gray-500 transition text-3xl text-gray-800 font-bold mr-3">{{ topic.title }}</RouterLink>
            <div class="w-full rounded p-7 leading-7 h-32 overflow-hidden text-gray-600">{{ topic.description }}</div>
            <div class="flex justify-start items-center">
                <RouterLink :to="{ name: 'topicsOfTag', params: { tag: tag.tag } }" v-for="tag in topic.tags" class="px-2 py-1 rounded text-gray-500 border border-gray-400 mr-2">#{{ tag.tag }}</RouterLink>
            </div>
        </div>
</template>