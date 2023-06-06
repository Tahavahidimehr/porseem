<script setup>
import ForumTopicsItem from '../components/ForumTopicsItem.vue';
import {useForumStore} from "@/stores/ForumStore";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import NoData from "@/components/NoData.vue";

const store = useForumStore()

const route = useRoute()

onMounted(() => {
  store.getForumTopics(route.params.forum)
})
</script>

<template>
      <div class="flex flex-col">
        <div class="w-full flex justify-between items-center border-b border-gray-200 mb-10 pb-6">
          <h1 class="text-2xl font-bold">تاپیک ها</h1>
          <RouterLink :to="{ name: 'newTopic' }" class="px-4 py-2 rounded bg-gray-900 text-white">تاپیک جدید بساز</RouterLink>
        </div>
        <template v-if="store.topics.length >= 1">
          <ForumTopicsItem v-for="topic in store.topics" :key="topic.id" :forumSlug="route.params.forum" :topic="topic"/>
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
</template>