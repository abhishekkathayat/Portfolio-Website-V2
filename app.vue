<template>
	<div class="flex justify-center h-screen bg-bgclr">
		<div class="font-inter text-white max-w-[1980px] w-full flex flex-col lg:flex-row">
			<div class="content-left w-full lg:w-3/6">
				<Intro :activeSection="activeSection.id" :intro="user.data.intro" :platforms="user.data.platforms"/>
			</div>
			<div id="content-right" class="content-right w-full lg:w-3/6 lg:pl-4 lg:overflow-y-auto bg-bgclr scroll-smooth">
				<div id="experience">
					<Experience class="lg:mt-20" :experience="user.data.experience" :platforms="user.data.platforms"/>
				</div>
				<div id="project" class="mt-32">
					<Project :platforms="user.data.platforms"/>
				</div>
				<div id="article" class="mt-32 mb-32">
					<Article :platforms="user.data.platforms"/>
				</div>
				<div id="footer" class="mb-20">
					<Footer :content="user.data.footer"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { retrieveAndDecodeUserData } from './services/userdata-service';

const user = reactive({ 
	data: {
		intro: {},
		experience: [],
		platforms: [],
		footer: []
	} 
});
let activeSection = reactive({ id: 'about' });
let scrollableContent: HTMLElement | null = null;

const handleScroll = () => {
	const scrollPosition: number | undefined = scrollableContent?.scrollTop;

	const experience: HTMLElement | null = document.getElementById('experience');
	const project: HTMLElement | null = document.getElementById('project');
	const article: HTMLElement | null = document.getElementById('article');

	if(scrollPosition != undefined) {
		if (experience && (experience.offsetTop + (experience.offsetHeight * 0.25)) > scrollPosition) {
			activeSection.id = 'experience';
		} else if (project && (project.offsetTop + (project.offsetHeight * 0.25)) > scrollPosition) {
			activeSection.id = 'project';
		} else if (article && (article.offsetTop + (article.offsetHeight * 0.25)) > scrollPosition) {
			activeSection.id = 'article';
		}
	}
};

user.data = await retrieveAndDecodeUserData()
	.then(response => JSON.parse(response));

onMounted(() => {
	scrollableContent = document.getElementById('content-right');
	scrollableContent?.addEventListener('scroll', handleScroll);
});
onUnmounted(() => { 
	scrollableContent?.removeEventListener('scroll', handleScroll); 
});
</script>