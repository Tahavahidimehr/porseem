<script setup>
defineProps(['item'])
</script>

<template>
    <div class="relative w-72 h-40 m-4 flex justify-end items-end">
        <img class="h-36 w-36 rounded-full" :src="item.avatar" alt="">
        <div class="w-48 shadow-md h-20 rounded absolute pr-3 top-2 left-24 flex flex-col items-start justify-center bg-white">
            <h2 class="text-gray-800 mb-1 font-bold">{{ item.name }}</h2>
            <h3 class="text-gray-500 text-sm">{{ item.job }}</h3>
        </div>
    </div>
</template>