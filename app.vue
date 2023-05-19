<template>
    <div class="font-inter text-white h-screen flex flex-col lg:flex-row bg-bgclr">
		<div class="content-left w-full lg:w-3/6">
			<Intro :activeSection="activeSection.id" />
		</div>
		<div id="content-right" class="content-right w-full lg:w-3/6 lg:overflow-y-auto bg-bgclr scroll-smooth">
			<div id="experience">
				<Experience class="mt-12"/>
			</div>
			<div id="project" class="mt-12">
				<Project/>
			</div>
			<div id="article" class="mt-12 mb-12">
				<Article/>
			</div>
		</div>
  	</div>
</template>

<script setup lang="ts">
import { retrieveAndDecodeUserData } from './services/userdata-service';

const userData = ref('');
let activeSection = reactive({ id: 'about' });
let scrollableContent: HTMLElement | null = null;

const handleScroll = () => {
	const scrollPosition: number | undefined = scrollableContent?.scrollTop;

	const experience: HTMLElement | null = document.getElementById('experience');
	const project: HTMLElement | null = document.getElementById('project');
	const article: HTMLElement | null = document.getElementById('article');

	if(scrollPosition != undefined) {
		if (experience && experience.offsetTop <= scrollPosition && experience.offsetTop + experience.offsetHeight > scrollPosition) {
			activeSection.id = 'experience';
		} else if (project && project.offsetTop <= scrollPosition && project.offsetTop + project.offsetHeight > scrollPosition) {
			activeSection.id = 'project';
		} else if (article && article.offsetTop <= scrollPosition && article.offsetTop + article.offsetHeight > scrollPosition) {
			activeSection.id = 'article';
		}
	}
};

userData.value = await retrieveAndDecodeUserData()
	.then(response => JSON.parse(JSON.stringify(response)));

onMounted(() => {
	scrollableContent = document.getElementById('content-right');
	scrollableContent?.addEventListener('scroll', handleScroll);
});
onUnmounted(() => { 
	scrollableContent?.removeEventListener('scroll', handleScroll); 
});

</script>