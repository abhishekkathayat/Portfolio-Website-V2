// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        userDataFile: process.env.USERDATA_FILE,
        userDataRepo: process.env.USERDATA_REPO,
        githubUsername: process.env.GH_USERNAME,
        githubPaToken: process.env.GH_PA_TOKEN,
        mediumUsername: process.env.MEDIUM_USERNAME,
        public: {
            githubBaseUrl: process.env.GH_BASE_URL,
            rssToJsonUrl: process.env.RSS_TO_JSON_URL,
            mediumFeedUrl: process.env.MEDIUM_FEED_URL
        }
    }
})
