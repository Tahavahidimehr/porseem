<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ForumsSidebar from '../components/ForumsSidebar.vue';
import NoData from "@/components/NoData.vue";
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import {useForumStore} from "@/stores/ForumStore";
import ForumTopicsItem from "@/components/ForumTopicsItem.vue";

const route = useRoute()
const store = useForumStore()

onMounted(() => {
  store.getTagTopics(route.params.tag)
})
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
        <div class="flex flex-col">
          <div class="w-full flex justify-between items-center border-b border-gray-200 mb-10 pb-6">
            <h1 class="text-3xl font-bold"># {{ store.tag }}</h1>
          </div>
          <ForumTopicsItem v-if="store.tagTopics.length >= 1" v-for="topic in store.tagTopics" :key="topic.id" :forumSlug="topic.forum.slug" :topic="topic"/>
          <NoData v-else/>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>