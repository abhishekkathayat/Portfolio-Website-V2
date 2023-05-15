<template>
    <div class="mt-10 flex flex-col">
        <div class="w-[700px] bg-cardbgclr p-8 mb-6"
            v-for="(experience, index) in experiences" :key="index">
            <div class="text-[11px] tracking-[2px]"> {{ experience.from }} &mdash; {{ experience.to }} </div>
            <div class="mt-2 text-xl font-semibold"> {{ experience.designation }} 
                <span class="font-normal"> {{ experience.organization }} </span> 
            </div>
            <div class="mt-4 text-sm text-subclr"> {{ experience.description }} </div>
            <div class="text-[11px] mt-4 uppercase font-semibold tracking-widest"> Tech Stack </div>
            <ul class="mt-4 flex">
                <li class="mr-5" v-for="technology in experience.techstack"> 
                    <img :src="technology.imgurl" height="25" width="25" :alt="technology.name"/>
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
            { imgurl: "dev-icons/java.svg", name: "Java", url:"" },
            { imgurl: "dev-icons/spring.svg", name: "Spring", url:"" },
            { imgurl: "dev-icons/apachekafka.svg", name: "Apache Kafka", url:"" },
            { imgurl: "dev-icons/prometheus.svg", name: "Prometheus", url:"" },
            { imgurl: "dev-icons/grafana.svg", name: "Grafana", url:"" },
            { imgurl: "dev-icons/github.svg", name: "GitHub", url:"" },
            { imgurl: "dev-icons/jira.svg", name: "Jira", url:"" },
            { imgurl: "dev-icons/confluence.svg", name: "Confleunce", url:"" }
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
            { imgurl: "dev-icons/java.svg", name: "Java", url:"" },
            { imgurl: "dev-icons/spring.svg", name: "Spring", url:"" },
            { imgurl: "dev-icons/neo4j.svg", name: "Neo4J", url:"" },
            { imgurl: "dev-icons/gitlab.svg", name: "GitLab", url:"" },
            { imgurl: "dev-icons/jira.svg", name: "Jira", url:"" },
            { imgurl: "dev-icons/confluence.svg", name: "Confleunce", url:"" }
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
            { imgurl: "dev-icons/java.svg", name: "Java", url:"" },
            { imgurl: "dev-icons/android.svg", name: "Android", url:"" },
            { imgurl: "dev-icons/androidstudio.svg", name: "Android Studio", url:"" },
            { imgurl: "dev-icons/python.svg", name: "Python", url:"" },
            { imgurl: "dev-icons/django.svg", name: "Django", url:"" },
            { imgurl: "dev-icons/github.svg", name: "GitHub", url:"" },
            { imgurl: "dev-icons/nginx.svg", name: "Nginx", url:"" },
        ]
    }
];
</script>