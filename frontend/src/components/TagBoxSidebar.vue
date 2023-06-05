<script setup>
import TagBoxSidebarItem from '../components/TagBoxSidebarItem.vue';
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
            <div class="w-full h-10 flex items-center border-b border-gray-300 pb-2 font-bold mb-3">تگ های محبوب</div>
            <div class="flex justify-start items-start flex-wrap">
                <TagBoxSidebarItem />
                <TagBoxSidebarItem />
                <TagBoxSidebarItem />
                <TagBoxSidebarItem />
                <TagBoxSidebarItem />
                <TagBoxSidebarItem />
                <TagBoxSidebarItem />
            </div>
        </div>
</template>