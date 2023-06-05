<script setup>
import ForumTopicsItem from '../components/ForumTopicsItem.vue';
</script>

<template>
    <div class="flex flex-col">
        <div class="w-full flex justify-between items-center border-b border-gray-200 mb-10 pb-6">
            <h1 class="text-2xl font-bold">تاپیک ها</h1>
            <RouterLink :to="{ name: 'newTopic' }" class="px-4 py-2 rounded bg-gray-900 text-white">تاپیک جدید بساز</RouterLink>
        </div>
        <ForumTopicsItem />
        <ForumTopicsItem />
        <ForumTopicsItem />
    </div>
</template>