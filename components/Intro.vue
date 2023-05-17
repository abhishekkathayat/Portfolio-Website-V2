<template>
    <div class="flex flex-col flex-grow-1 h-full ml-6 sm:ml-12 lg:ml-12 xl:ml-20 2xl:ml-32 py-20">
        <h1 class="font-bold text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl leading-tight"> Abhishek Kathayat </h1>
        <h2 class="font-semibold text-[18px] sm:text-[22px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]"> Specialist Programmer at Infosys </h2>
        <p class="mt-10 text-sm text-subclr leading-relaxed"> 
            I build innovation software solutions at 
            <a class="text-white" href="https://infosys.com" target="_blank" rel="noopener noreferrer"> 
                Infosys</a>. <br/> 
            In my spare time, I enjoy working on side projects and building stuff. 
        </p>
        <div class="hidden lg:block mt-auto">
            <ul class="text-[11px] tracking-[2px] font-semibold uppercase text-subclr">
                <li class="my-8 w-fit"
                    v-for="(link, index) in navLinks" :key="index"> 
                    <a :href="link.reference" v-on:click="updateActiveIndex(index)" class="group flex items-center">
                        <span :class="{'text-white' : selected.id == index}" class="group-hover:text-white"> 0{{ index + 1 }} </span>
                        <span :class="[{'w-6' : selected.id != index}, {'w-20 bg-white' : selected.id == index}]" 
                            class="inline-block bg-subclr h-[1px] mx-2 duration-300 group-hover:w-20 group-hover:bg-white group-hover:duration-300"></span>
                        <span :class="{'text-white' : selected.id == index}" class="group-hover:text-white"> {{ link.name }} </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="text-sm mt-16 lg:mt-auto">
            <ul class="flex flex-row">
                <li class="flex flex-row items-center mr-8" v-for="(externalLink, index) in externalLinks" :key="index">
                    <img class="mr-3" :src="externalLink.img" height="20" width="20"/>
                    {{ externalLink.name }}
                    <a :href="externalLink.url"> 
                        <img class="mx-2" src="../assets/icons/external.svg" height="12" width="12"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
let selected = reactive({ id: 0 });

const navLinks: Array<any> = [
    { id: "about",  name: "About", reference: "#about" },
    { id: "experience", name: "Experience", reference: "#experience" },
    { id: "project", name: "Projects", reference: "#project" },
    { id: "article", name: "Articles", reference: "#article" },
];

const externalLinks: Array<any> = [
    { img: "platform-icons/linkedin.svg", url: "https://linkedin.com/in/abhishek-kathayat", name: "LinkedIn" },
    { img: "platform-icons/github.svg", url: "https://github.com/Abhishek-Kathayat", name: "GitHub" },
    { img: "platform-icons/medium.svg", url: "https://medium.com/@abhishekkathayat", name: "Medium" }
];

const props = defineProps({
    activeSection: {
        type: String
    }
})

watch(() => props.activeSection, (newValue, oldValue) => {
    selected.id = navLinks.findIndex(link => link.id === newValue);
})

function updateActiveIndex(index: number) {
    selected.id = index;
}

</script>