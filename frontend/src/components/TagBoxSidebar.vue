<script setup>
import TagBoxSidebarItem from '../components/TagBoxSidebarItem.vue';
import {useForumStore} from "@/stores/ForumStore";
import {onMounted} from "vue";

const store = useForumStore()

onMounted(() => {
  store.getTags()
})
</script>

<template>
        <!-- <h1 class="text-xl">فروم ها</h1>
        <div class="w-full flex flex-col justify-start mt-5">
            <ForumsSidebarItem />
            <ForumsSidebarItem />
            <ForumsSidebarItem />
            <ForumsSidebarItem />
            <ForumsSidebarItem />
            <ForumsSidebarItem />
            <ForumsSidebarItem />
            <ForumsSidebarItem />   
            <ForumsSidebarItem />
            <ForumsSidebarItem />
        </div> -->
        <div class="w-full h-96 border border-gray-300 rounded p-5 overflow-auto">
            <div class="w-full h-10 flex items-center border-b border-gray-300 pb-2 font-bold mb-3">تگ ها</div>
            <div class="flex justify-start items-start flex-wrap">
                <TagBoxSidebarItem v-for="tag in store.tags" :key="tag.id" :tag="tag"/>
            </div>
        </div>
</template>