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
        githubUsername: process.env.GITHUB_USERNAME,
        githubPaToken: process.env.GITHUB_PA_TOKEN,
        mediumUsername: process.env.MEDIUM_USERNAME,
        public: {
            githubBaseUrl: process.env.GITHUB_BASE_URL,
            rssToJsonUrl: process.env.RSS_TO_JSON_URL,
            mediumFeedUrl: process.env.MEDIUM_FEED_URL
        }
    }
})
