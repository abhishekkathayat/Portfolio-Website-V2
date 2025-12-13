import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  runtimeConfig: {
        userDataFile: process.env.USERDATA_FILE,
        userDataRepo: process.env.USERDATA_REPO,
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
