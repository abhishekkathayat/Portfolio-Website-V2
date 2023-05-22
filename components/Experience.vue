<template>
    <div class="flex flex-col mx-6 sm:mx-10 lg:mx-0">
        <div class="lg:hidden text-xs uppercase font-semibold tracking-[2px] mb-6"> Experience </div>
        <div class="lg:w-[460px] xl:w-[580px] 2xl:w-[700px] bg-cardbgclr p-6 sm:p-8 mb-6"
            v-for="(experience, index) in props.experience" :key="index">
            <div class="text-[11px] tracking-[2px]"> {{ experience.from }} &mdash; {{ experience.to }} </div>
            <div class="mt-2 text-xl lg:text-lg xl:text-xl 2xl:text-xl font-semibold"> {{ experience.designation }} 
                <span class="font-normal"> • {{ experience.organization }} </span> 
            </div>
            <div class="mt-4 text-sm text-subclr"> {{ experience.description }} </div>
            <div class="text-[11px] mt-4 uppercase font-semibold tracking-widest"> Tech Stack </div>
            <ul class="mt-4 flex flex-wrap">
                <li class="mr-2 flex items-center whitespace-nowrap text-[11px] bg-topicsbgclr rounded-full font-semibold text-white px-3 py-2 mb-2"
                    v-for="technology in experience.techstack"> 
                    <img class="mr-2" :src="technology.imgurl" height="15" width="15" :alt="technology.name"/>
                    {{ technology.name }}
                </li>
            </ul>
        </div>
        <div class="w-fit">
            <a class="flex items-center group" :href="props.platforms && props.platforms[0].url" target="_blank" rel="noopener noreferrer">
                <span class="font-semibold tracking-wide text-sm"> View LinkedIn Profile </span>
                <img class="ml-2 group-hover:ml-4 duration-300" src="~/assets/icons/right-arrow.svg" height="15" width="15"/>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Props } from 'nuxt/dist/head/runtime/types';

const props: Props = defineProps({
    experience: Array<any>,
    platforms: Array<any>
});

</script>