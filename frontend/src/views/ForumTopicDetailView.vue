<script setup>
import ReplyIcon from '../components/icons/ReplyIcon.vue'
</script>

<template>
    <div class="flex flex-col">
        <div class="w-full border-t border-gray-100 pt-5 shadow-md rounded flex flex-col px-5 pb-5">
            <div class="w-full flex justify-between items-center">
                <div class="flex justify-between items-center">
                    <div class="w-20 h-20 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                    <div class="flex flex-col mr-2">
                        <h1 class="text-xl text-gray-800">طاها وحیدی مهر</h1>
                        <h2 class="text-gray-400 text-sm mt-2">2 ساعت پیش مطرح شده</h2>
                    </div>
                </div>
                <div class="px-5 py-1.5 border border-gray-800 text-gray-800 rounded transition cursor-pointer hover:bg-gray-800 hover:text-white  flex justify-center items-center">
                    <ReplyIcon class="h-5 ml-2"/>پاسخ دادن
                </div>
            </div>
            <h1 class="mt-10 text-3xl text-gray-800 font-bold mr-3">نحوه راه اندازی cdn ابراروان</h1>
            <div class="w-full rounded p-7 leading-7 mt-10 text-gray-600 bg-gray-100">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>
            <div class="w-full border-b border-gray-200 my-5"></div>
            <div class="flex justify-end items-center">
                <div class="px-2 py-1 rounded text-gray-500 border border-gray-400 mr-2">#لاراول</div>
                <div class="px-2 py-1 rounded text-gray-500 border border-gray-400 mr-2">#لاراول</div>
                <div class="px-2 py-1 rounded text-gray-500 border border-gray-400 mr-2">#لاراول</div>
            </div>
        </div>

        <div class="w-full mt-5 bg-gray-100 rounded p-7 min-h-[20rem]">
            <div class="w-full flex justify-between items-center">
                <div class="flex justify-between items-start">
                    <div class="w-14 h-14 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                    <div class="flex flex-col mr-2">
                        <h1 class="text-lg text-gray-800">طاها وحیدی مهر</h1>
                        <h2 class="text-gray-400 text-sm mt-2">2 ساعت پیش مطرح شده</h2>
                    </div>
                </div>
                <div class="px-5 py-1.5 border border-gray-800 text-gray-800 rounded transition cursor-pointer hover:bg-gray-800 hover:text-white  flex justify-center items-center">
                    <ReplyIcon class="h-5 ml-2"/>پاسخ دادن
                </div>
            </div>
            <div class="w-full rounded min-h-[12rem] p-7 leading-7 mt-5 text-gray-600 bg-gray-50">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>
        </div>

        <div class="w-full mt-5 rounded min-h-[20rem] border border-gray-300 p-5">
            <div class="w-full flex justify-between items-center">
                <div class="flex justify-between items-center">
                    <div class="w-14 h-14 rounded-full"><img src="/profile.png" class="rounded-full" alt=""></div>
                    <h1 class="text-lg text-gray-800 mr-3">طاها وحیدی مهر</h1>
                </div>
            </div>
            <textarea class="w-full focus:outline-none rounded min-h-[12rem] p-7 leading-7 mt-5 text-gray-600 border border-gray-300"></textarea>
            <div class="w-full flex justify-end my-3">
                <button type="submit" class="w-40 p-2 rounded bg-gray-800 text-white flex justify-center items-center transition hover:bg-gray-700 focus:outline-none">
                    ثبت پاسخ
                </button>
            </div>
        </div>
    </div>
</template>
