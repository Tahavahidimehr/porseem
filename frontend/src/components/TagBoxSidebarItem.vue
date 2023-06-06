<script setup>
import {useForumStore} from "@/stores/ForumStore";

const { tag } = defineProps({
  tag: Object
})

const store = useForumStore()

const getTagData = () => {
  store.getTagTopics(tag.tag)
}
</script>

<template>
    <!-- <div class="w-full flex justify-between items-center border-b border-gray-200 mb-2 pb-2">
        <div class="flex justify-center items-center">
            <img src="/profile.png" class="h-10 w-10" alt="">
            <h2 class="mr-2">عنوان فروم</h2>
        </div>
        <div class="rounded-full p-1 bg-gray-200 text-gray-700 h-8 w-8 text-center">10</div>
    </div> -->

    <RouterLink @click="getTagData" :to="{ name: 'topicsOfTag', params: { tag: tag.tag } }" class="px-2 py-1 rounded text-gray-500 border border-gray-400 ml-2 mb-2">#{{ tag.tag }}</RouterLink>
</template>

