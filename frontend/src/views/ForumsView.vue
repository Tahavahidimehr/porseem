<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import SearchIcon from '../components/icons/SearchIcon.vue';
import ForumsTable from '../components/ForumsTable.vue';
import ForumsSidebar from '../components/ForumsSidebar.vue';

</script>

<template>
    <DefaultLayout>
        <div class="w-full h-52 bg-gray-900 flex justify-center items-center">
            <div class="relative border border-white rounded">
                <div class="h-12 w-12 rounded-l flex justify-center items-center bg-gray-900 absolute top-0 left-0">
                    <SearchIcon class="h-6 fill-white"/>
                </div>
                <input type="text" placeholder="جستوجو ..." class="w-[40rem] h-12 pl-16 pr-5 rounded focus:outline-none">
            </div>
        </div>
        <div class="w-full flex justify-start items-start mt-10 mb-20 px-20">
            <ForumsSidebar />
            <div class="w-3/4 flex flex-col justify-start">
                <div class="flex justify-between items-center mb-10 shadow-md py-5 px-8 rounded">
                    <div class="flex items-center">
                        <img class="w-16 ml-2" src="/noData.jpg" alt="">
                        <h2>نمیتونی جواب سؤالتو پیدا کنی؟</h2>
                    </div>
                    <RouterLink :to="{ name: 'newForum' }" class="px-4 py-2 rounded bg-gray-900 text-white">فروم جدید بساز</RouterLink>
                </div>
                <ForumsTable />
            </div>
        </div>
    </DefaultLayout>
</template>