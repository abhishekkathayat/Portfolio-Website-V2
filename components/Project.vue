<template>
    <div class="w-[720px] flex flex-wrap">
        <div class="w-[340px] h-[340px] flex flex-col bg-cardbgclr p-8 odd:mr-5 mb-5"
            v-for="repository in repositories" :key="repository.id">
            <div class="text-[11px] tracking-[2px] uppercase"> {{ repository.language }} </div>
            <h1 class="mt-2 font-semibold text-2xl leading-tight"> {{ repository.name }} </h1>
            <p class="mt-2 text-sm text-subclr" v-html="repository.description"> </p>
            <ul class="mt-6 flex whitespace-nowrap flex-wrap">
                <li class="text-[10px] bg-topicsbgclr rounded-full font-semibold text-white px-2 py-1 mr-2 mb-2"
                    v-for="topic in repository.topics">
                    {{ topic }}
                </li>
            </ul>
            <div class="mt-auto flex items-center"> 
                <img src="platform-icons/github.svg" height="18" width="18" />
                <span class="mx-2 text-sm"> GitHub </span>
                <a :href="repository.html_url">
                    <img src="~/assets/icons/external.svg" height="12" width="12"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { processDescriptionEmojis } from '~/services/github-service';

const repositories: any = await useFetch('/api/github')
    .then(response => response.data)
    .catch(error => error.data);

for(const repository of repositories.value) {
    repository.name = repository.name.replace(/-/g, ' ');
    repository.description = await processDescriptionEmojis(repository.description);
}
</script>