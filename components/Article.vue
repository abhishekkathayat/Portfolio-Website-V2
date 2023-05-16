<template>
    <div class="flex flex-col mx-10 lg:mx-0">
        <div class="lg:hidden text-xs uppercase font-semibold tracking-[2px] mb-6"> Articles </div>
        <div class="lg:w-[460px] xl:w-[580px] 2xl:w-[700px] flex flex-col p-8 mb-6 relative bg-center backdrop-blur-0"
            v-for="(article, index) of articles" :key="index" :style="{ 'background-image': `url(${article.thumbnail})` }">
            <div class="absolute inset-0 bg-gradient-to-r from-bgclr/100 to-bgclr/90"></div>
            <div class="flex flex-col z-10">
                <div class="text-[11px] tracking-[2px] uppercase"> {{ formatPublishDate(article.pubDate) }} </div>
                <h1 class="mt-2 font-semibold text-lg leading-tight"> {{ article.title }} </h1>
                <ul class="mt-4 flex whitespace-nowrap flex-wrap">
                    <li class="text-[10px] bg-topicsbgclr rounded-full font-semibold text-white px-2 py-1 mr-2 mb-2"
                        v-for="category in article.categories">
                        {{ category }}
                    </li>
                </ul>
                <div class="mt-auto ml-auto flex items-center"> 
                    <img src="platform-icons/medium.svg" height="18" width="18" />
                    <span class="mx-2 text-sm"> Medium </span>
                    <a :href="article.link">
                        <img src="~/assets/icons/external.svg" height="12" width="12"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const articles: Array<any> = await useFetch('/api/medium')
    .then(response => response.data.value.items);

function formatPublishDate(date: string): string {
    return date.split(" ")[0].split("-").reverse().join("-");
}

</script>