<template>
    <div class="font-inter text-white h-screen flex flex-col lg:flex-row bg-bgclr">
		<div class="content-left w-full lg:w-3/6">
			<Intro />
		</div>
		<div class="content-right w-full lg:w-3/6 overflow-y-auto scroll-smooth">
			<Experience id="experience" />
			<Project id="projects" class="mt-12" />
			<Articles id="articles" class="mt-12 mb-12" />
		</div>
  	</div>
</template>

<script lang="ts">
</script>