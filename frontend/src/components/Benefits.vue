<script setup>
import BenefitBox from './BenefitBox.vue';

</script>

<template>
    <div>
            <div class="w-full h-48 flex flex-col justify-center items-center">
                <h2 class="text-3xl text-gray-700">درباره پُرسیم چه می شنویم؟</h2>
                <p class="text-sm text-gray-600 mt-4">
                </p>
            </div>
            <div class="w-full flex justify-center flex-wrap pb-16">
                <BenefitBox />
                <BenefitBox />
                <BenefitBox />
                <BenefitBox />
                <BenefitBox />
                <BenefitBox />
            </div>
        </div>
</template>