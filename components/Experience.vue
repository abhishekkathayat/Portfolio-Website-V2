<template>
    <div class="flex flex-col mx-10 lg:mx-0">
        <div class="lg:hidden text-xs uppercase font-semibold tracking-[2px] mb-6"> Experience </div>
        <div class="lg:w-[460px] xl:w-[580px] 2xl:w-[700px] bg-cardbgclr p-8 mb-6"
            v-for="(experience, index) in experiences" :key="index">
            <div class="text-[11px] tracking-[2px]"> {{ experience.from }} &mdash; {{ experience.to }} </div>
            <div class="mt-2 text-xl lg:text-lg xl:text-xl 2xl:text-xl font-semibold"> {{ experience.designation }} 
                <span class="font-normal"> {{ experience.organization }} </span> 
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
    </div>
</template>

<script setup lang="ts">

const experiences: Array<any> = [
    {
        from: "01-2022",
        to: "PRESENT",
        designation: "Specialist Programmer • ",
        organization: 'Infosys',
        description: "Spearheaded the development of Layer 3 VPN Services for Verizon Communications Inc., " 
            + "as part of the Network as a Service offering, generating approximately $3.5 million in quarterly " 
            + "revenue for Infosys.",
        techstack: [
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring" },
            { imgurl: "dev-icons/apachekafka.svg", name: "Apache Kafka"},
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", name: "Prometheus" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", name: "Grafana" },
            { imgurl: "dev-icons/github.svg", name: "GitHub" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", name: "Jira" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg", name: "Confleunce" }
        ]
    },
    {
        from: "09-2020",
        to: "12-2021",
        designation: "Digital Specialist Engineer • ",
        organization: 'Infosys',
        description: "Closely coordinated with the Service Design Team for Verizon Communications Inc., " 
            + "automating and optimizing the Service Design Process for Cross Region Point-to-Point Ethernet Line Service " 
            + "leading to more efficient and effective service delivery.",
        techstack: [
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg", name: "Neo4J" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", name: "GitLab" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", name: "Jira" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg", name: "Confleunce" }
        ]
    },
    {
        from: "06-2019",
        to: "07-2019",
        designation: "Summer Intern • ",
        organization: 'Indian Institute of Remote Sensing (IIRS)',
        description: "Conceptualized and created an innovative application that enables easy access to past survey information " 
        + "by extracting and visualizing geospatial data from ArcGIS Shapefiles over an Android device, allowing efficient " 
        + "and seamless access to important geospatial data.",
        techstack: [
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", name: "Android" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", name: "Django" },
            { imgurl: "dev-icons/github.svg", name: "GitHub" },
            { imgurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", name: "Nginx" },
        ]
    }
];
</script>