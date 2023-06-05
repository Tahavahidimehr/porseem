<template>
    <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10" src="profile.png" alt="">
                </div>
                <div class="mr-4 flex flex-col justify-center items-start">
                    <RouterLink :to="{ name: 'forumTopics', params: { forum: 'test' } }" class="text-lg text-gray-900">
                        عنوان فروم
                    </RouterLink>
                    <p class="text-[12px] mt-1 text-gray-500">توضیحات مربوط به فروم</p>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div class="text-sm text-gray-500">
                4
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
                12
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            10 ماه پیش
        </td>
    </tr>
</template>