<script setup>
import ForumTableItem from '../components/ForumTableItem.vue';
import {useForumStore} from "@/stores/ForumStore";
import {onMounted} from "vue";

const store = useForumStore()

onMounted(() => {
  store.getForums()
})
</script>

<template>
    <table class="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    فروم
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    تاپیک ها
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    پاسخ ها
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    آخرین پاسخ
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <ForumTableItem v-for="forum in store.forums" :key="forum.id" :forum="forum"/>
        </tbody>
    </table>
</template>