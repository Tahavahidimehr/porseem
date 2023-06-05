<script setup>
import DefaultLayout from './DefaultLayout.vue';
import ForumsSidebar from '../components/ForumsSidebar.vue';

</script>

<template>
    <DefaultLayout>
        <RouterLink :to="{ name: 'forums' }" class="w-full flex justify-between items-center mt-5 pl-20 pr-10">
            <div class="flex items-center">
                <img class="w-32" src="/ask_answer.png" alt="">
                <h1 class="text-3xl font-bold">فروم ها</h1>
            </div>
        </RouterLink>
        <div class="w-full flex justify-start items-start mt-10 mb-20 px-20">
            <ForumsSidebar />
            <div class="w-3/4 flex flex-col justify-start">
                <RouterView></RouterView>
            </div>
        </div>
    </DefaultLayout>
</template>