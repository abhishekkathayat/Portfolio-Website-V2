<template>
    <div class="flex flex-col flex-grow-1 h-full px-24 py-20">
        <h1 class="font-bold text-5xl leading-tight"> Abhishek Kathayat </h1>
        <h2 class="font-semibold text-[22px]"> Specialist Programmer at Infosys </h2>
        <p class="mt-10 text-sm text-subclr leading-relaxed"> 
            I build innovation software solutions at 
            <a class="text-white" href="https://infosys.com" target="_blank" rel="noopener noreferrer"> 
                Infosys</a>. <br/> 
            In my spare time, I enjoy working on side projects and building stuff. 
        </p>
        <div class="text-sm mt-auto">
            <ul class="flex flex-row">
                <li class="flex flex-row items-center mr-8" v-for="(externalLink, index) in externalLinks" :key="index">
                    <img class="mx-3" :src="externalLink.img" height="20" width="20"/>
                    {{ externalLink.name }}
                    <a :href="externalLink.url"> 
                        <img class="mx-2" src="../assets/icons/external.svg" height="12" width="12"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">

export default defineComponent({
    data() {
        return {
            externalLinks: [] as { img: string, url: string, name: string }[]
        }
    },
    mounted() {
        this.externalLinks = [
            { img: "platform-icons/linkedin.svg", url: "https://linkedin.com/in/abhishek-kathayat", name: "LinkedIn" },
            { img: "platform-icons/github.svg", url: "https://github.com/Abhishek-Kathayat", name: "GitHub" },
            { img: "platform-icons/medium.svg", url: "https://medium.com/@abhishekkathayat", name: "Medium" }
        ]
    }
})

</script>