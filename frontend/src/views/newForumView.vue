<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ForumsSidebar from '../components/ForumsSidebar.vue';
</script>

<template>
<DefaultLayout>
    <div class="w-full flex justify-start items-start mt-10 mb-20 px-20">
        <ForumsSidebar />
        <div class="w-3/4 my-10 flex flex-col justify-center items-center">
            <form @submit.prevent="" class="w-full p-7 text-gray-700 rounded border border-gray-300 flex flex-col justify-start items-center">
                <div class="w-full my-6"><h1 class="text-xl text-right font-bold">فروم جدید</h1></div>
                <div class="w-full my-2">
                    <div class="w-2/4 mb-2 text-sm">عنوان</div>
                    <input name="title" type="email" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                </div>
                <div class="w-full my-2">
                    <div class="w-full mb-2 text-sm">توضیحات</div>
                    <textarea class="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition"></textarea>
                </div>
                <div class="w-full my-2">
                    <div class="w-2/4 mb-2 text-sm">وضعیت انتشار</div>
                    <select class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                        <option value="public">عمومی</option>
                        <option value="private">خصوصی</option>
                    </select>
                </div>
                <div class="w-full my-2">
                    <div class="w-2/4 mb-2 text-sm">آواتار</div>
                    <input name="file" type="file" class=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500 transition">
                </div>
                <div class="w-full flex justify-end my-3">
                    <button type="submit" class="w-40 py-2 px-3 rounded bg-gray-800 text-white flex justify-center items-center transition hover:bg-gray-700 focus:outline-none">
                        ایجاد کن
                    </button>
                </div>
            </form>
        </div>
    </div>
</DefaultLayout>
</template>