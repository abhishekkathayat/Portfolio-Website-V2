<template>
    <div class="flex flex-col mx-6 sm:mx-10 lg:mx-0 text-sm text-subclr">
        <div class="flex flex-wrap">
            Built with
            <a :href="props.content && props.content[0].url" class="flex items-center mr-1 text-white" target="_blank" rel="noopener noreferrer">
                <img class="mx-1" :src="props.content && props.content[0].imgurl" height="20" width="20" /> {{ props.content && props.content[0].name }} 
            </a> and 
            <a :href="props.content && props.content[1].url" class="flex item-center mr-1 text-white" target="_blank" rel="noopener noreferrer">
                <img class="mx-1" :src="props.content && props.content[1].imgurl" height="20" width="20" /> {{ props.content && props.content[1].name }}
            </a> and deployed using
            <a :href="props.content && props.content[4].url" class="text-white ml-1" target="_blank" rel="noopener noreferrer"> Vercel </a>.
        </div>
        <div class="flex flex-wrap mt-1">
            All Development Tools icons are 
            <a :href="props.content && props.content[2].url" class="flex items-center mr-1 text-white" target="_blank" rel="noopener noreferrer">
                <img class="mx-1" :src="props.content && props.content[2].imgurl" height="20" width="20" /> {{ props.content && props.content[2].name }}
            </a> and all text is set in the
            <a :href="props.content && props.content[3].url" class="ml-1 text-white" target="_blank" rel="noopener noreferrer">
                {{ props.content && props.content[3].name }}
            </a>.
        </div>
    </div>
</template>

<script setup lang="ts">
import { Props } from 'nuxt/dist/head/runtime/types';

const props: Props = defineProps({
    content: Array<any>
})
</script>