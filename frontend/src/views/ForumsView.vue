<script setup>
import ForumsTable from '../components/ForumsTable.vue';
import SearchIcon from '../components/icons/SearchIcon.vue';
import {onMounted, ref} from "vue";
import {useForumStore} from "@/stores/ForumStore";
import NoData from "@/components/NoData.vue";

const store = useForumStore()

let search = ref('')

const searchData = () => {
  console.log(search.value)
  store.getForums(search.value)
}

onMounted(() => {
  store.getForums()
})
</script>

<template>
  <template v-if="store.forums.length >= 1">
    <div class="w-full flex justify-between items-center mb-5">
        <div class="w-10/12 flex justify-center items-center">
            <div class="w-full relative border border-gray-300 rounded">
                <div class="h-10 w-10 rounded-l flex justify-center items-center absolute top-0 left-0">
                    <SearchIcon class="h-6 fill-gray-300"/>
                </div>
                <input @change="searchData" type="text" v-model="search" placeholder="جستوجو ..." class="w-full h-10 pl-16 pr-5 rounded focus:outline-none">
            </div>
        </div>
        <RouterLink :to="{ name: 'newForum' }" class="px-4 py-2 rounded bg-gray-900 text-white">فروم جدید بساز</RouterLink>
    </div>
    <ForumsTable />
  </template>
  <template v-else>
    <NoData />
  </template>
</template>