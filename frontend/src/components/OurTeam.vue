<script setup>
import TeamBox from './TeamBox.vue';

</script>

<template>
    <div class="pb-20">
            <div class="w-full h-48 flex flex-col justify-center items-center">
                <h2 class="text-3xl text-gray-700">تیم پُرسیم</h2>
            </div>
            <div class="h-full w-full px-20">
                <div class="grid justify-items-center content-center grid-cols-3 grid-rows-2">
                    <TeamBox />
                    <TeamBox />
                    <TeamBox />
                    <TeamBox />
                    <TeamBox />
                    <TeamBox />
                </div>
            </div>
        </div>
</template>