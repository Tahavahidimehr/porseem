<script setup>
defineProps(['forum'])
</script>

<template>
    <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10" src="profile.png" alt="">
                </div>
                <div class="mr-4 flex flex-col justify-center items-start">
                    <RouterLink :to="{ name: 'forumTopics', params: { forum: forum.slug } }" class="text-lg text-gray-900">
                        {{ forum.title }}
                    </RouterLink>
                    <p class="text-[12px] mt-1 text-gray-500">{{ forum.description }}</p>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div class="text-sm text-gray-500">
              {{ forum.topics_count }}
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
                {{ forum.comments_count }}
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            10 ماه پیش
        </td>
    </tr>
</template>