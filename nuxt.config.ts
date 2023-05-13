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
        public: {
            githubBaseUrl: process.env.GITHUB_BASE_URL
        }
    }
})
